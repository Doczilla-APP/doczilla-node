import { describe, expect, test } from '@jest/globals'
import MockAdapter from 'axios-mock-adapter'

import Doczilla from '../Doczilla'

describe('Page', () => {

  const client = new Doczilla('fake-api-token')
  // @ts-expect-error private property
  const axiosMock = new MockAdapter(client.client)

  axiosMock.onAny().reply(200, Buffer.from(''))

  beforeEach(() => {
    axiosMock.resetHistory()
  })

  test('it encode the page.html option (pdf)', async () => {
    await client.pdf.direct({
      page: {
        html: '<div>Your first Doczilla PDF</div>'
      }
    })

    expect(axiosMock.history.post.length).toBe(1)
    expect(axiosMock.history.post[0].data).toEqual(JSON.stringify({
      page: {
        html: 'PGRpdj5Zb3VyIGZpcnN0IERvY3ppbGxhIFBERjwvZGl2Pg=='
      }
    }))
  })

  test('it encode the page.html option (screenshot)', async () => {
    await client.screenshot.direct({
      page: {
        html: '<div>Your first Doczilla PDF</div>'
      }
    })

    expect(axiosMock.history.post.length).toBe(1)
    expect(axiosMock.history.post[0].data).toEqual(JSON.stringify({
      page: {
        html: 'PGRpdj5Zb3VyIGZpcnN0IERvY3ppbGxhIFBERjwvZGl2Pg=='
      }
    }))
  })

})