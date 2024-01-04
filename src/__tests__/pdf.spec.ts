import { describe, expect, test } from '@jest/globals'
import MockAdapter from 'axios-mock-adapter'

import Doczilla from '../Doczilla'

describe('PDF', () => {

  const client = new Doczilla('fake-api-token')
  // @ts-expect-error private property
  const axiosMock = new MockAdapter(client.client)

  axiosMock.onAny().reply(200, Buffer.from(''))

  test('it should encode the page.html, page.htmlTemplate, pdf.headerHtml and pdf.footerHtml options', async () => {
    await client.pdf.direct({
      page: {
        html: '<div>Your first Doczilla PDF</div>',
        htmlTemplate: '<div>Your first Doczilla {{ type }}</div>',
      },
      pdf: {
        headerHtml: '<div>Header template</div>',
        footerHtml: '<div>Footer template</div>'
      }
    })

    expect(axiosMock.history.post.length).toBe(1)
    expect(axiosMock.history.post[0].data).toEqual(JSON.stringify({
      page: {
        html: 'PGRpdj5Zb3VyIGZpcnN0IERvY3ppbGxhIFBERjwvZGl2Pg==',
        htmlTemplate: 'PGRpdj5Zb3VyIGZpcnN0IERvY3ppbGxhIHt7IHR5cGUgfX08L2Rpdj4='
      },
      pdf: {
        headerHtml: 'PGRpdj5IZWFkZXIgdGVtcGxhdGU8L2Rpdj4=',
        footerHtml: 'PGRpdj5Gb290ZXIgdGVtcGxhdGU8L2Rpdj4='
      }
    }))
  })

})