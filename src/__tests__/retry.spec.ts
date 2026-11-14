import { describe, expect, test } from '@jest/globals'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import { CreateTemplate, TemplateVariables } from '../generated'
import { PdfService } from '../services/PdfService'
import { ScreenshotService } from '../services/ScreenshotService'
import { TemplateService } from '../services/TemplateService'

function createBody(): TemplateVariables {
  return {
    page: {
      html: '<p>Hello</p>',
      htmlTemplate: '<p>{{name}}</p>',
      templateData: { name: 'Example' }
    },
    pdf: {
      headerHtml: '<header>Header</header>',
      footerHtml: '<footer>Footer</footer>'
    }
  }
}

function encodedBody(): TemplateVariables {
  const body = createBody()
  return {
    page: {
      ...body.page,
      html: Buffer.from(body.page.html).toString('base64'),
      htmlTemplate: Buffer.from(body.page.htmlTemplate).toString('base64')
    },
    pdf: {
      headerHtml: Buffer.from(body.pdf.headerHtml).toString('base64'),
      footerHtml: Buffer.from(body.pdf.footerHtml).toString('base64')
    }
  }
}

describe.each(['pdf', 'screenshot', 'template generation', 'template create', 'template update'])('%s encoding', service => {
  function setup() {
    const client = axios.create()
    const mock = new MockAdapter(client)
    const template = new TemplateService(client)
    const requests: Record<string, (body: TemplateVariables) => Promise<unknown>> = {
      pdf: body => new PdfService(client).direct(body),
      screenshot: body => new ScreenshotService(client).direct(body),
      'template generation': body => template.direct('id', body),
      'template create': body => template.create({ name: 'Example', output: CreateTemplate.output.PDF, variables: body }),
      'template update': body => template.update('id', { variables: body })
    }
    return { mock, request: requests[service] }
  }

  function expectEncodedPayload(data: string) {
    const payload = JSON.parse(data)
    expect(payload.variables ?? payload).toEqual(encodedBody())
  }

  test('sends the same singly encoded content after a 429', async () => {
    const { mock, request } = setup()
    mock.onPost().replyOnce(429).onPost().reply(200, Buffer.from('result'))
    const body = createBody()

    await request(body)

    expect(mock.history.post).toHaveLength(2)
    expectEncodedPayload(mock.history.post[0].data)
    expect(mock.history.post[1].data).toBe(mock.history.post[0].data)
    expect(body).toEqual(encodedBody())
  })

  test('encodes the input in place on a successful call', async () => {
    const { mock, request } = setup()
    mock.onPost().reply(200, Buffer.from('result'))
    const body = createBody()

    await request(body)

    expect(mock.history.post).toHaveLength(1)
    expectEncodedPayload(mock.history.post[0].data)
    expect(body).toEqual(encodedBody())
  })

  test('stops after one retry if the rate limit persists', async () => {
    const { mock, request } = setup()
    mock.onPost().reply(429)
    const body = createBody()

    await expect(request(body)).rejects.toMatchObject({ response: { status: 429 } })

    expect(mock.history.post).toHaveLength(2)
    expectEncodedPayload(mock.history.post[0].data)
    expect(mock.history.post[1].data).toBe(mock.history.post[0].data)
    expect(body).toEqual(encodedBody())
  })

  test('does not retry other errors', async () => {
    const { mock, request } = setup()
    mock.onPost().reply(500)

    await expect(request(createBody())).rejects.toMatchObject({ response: { status: 500 } })

    expect(mock.history.post).toHaveLength(1)
  })
})
