import { describe, expect, test } from '@jest/globals'
import MockAdapter from 'axios-mock-adapter'

import Doczilla from '../Doczilla'
import { CreateTemplate } from '../generated'

describe('Templates', () => {

  const client = new Doczilla('fake-api-token')
  // @ts-expect-error private property
  const axiosMock = new MockAdapter(client.client)

  axiosMock.onAny().reply(200, Buffer.from(''))

  describe('create', () => {
    test('it should encode the page.html, page.htmlTemplate, pdf.headerHtml and pdf.footerHtml options', async () => {
      await client.template.create({
        name: 'fake template',
        output: CreateTemplate.output.PDF,
        variables: {
          page: {
            html: '<div>Your first Doczilla PDF</div>',
            htmlTemplate: '<div>Your first Doczilla {{ type }}</div>'
          },
          pdf: {
            headerHtml: '<div>Header template</div>',
            footerHtml: '<div>Footer template</div>'
          }
        }
      })

      expect(axiosMock.history.post.length).toBe(1)
      expect(axiosMock.history.post[0].data).toEqual(JSON.stringify({
        name: 'fake template',
        output: CreateTemplate.output.PDF,
        variables: {
          page: {
            html: 'PGRpdj5Zb3VyIGZpcnN0IERvY3ppbGxhIFBERjwvZGl2Pg==',
            htmlTemplate: 'PGRpdj5Zb3VyIGZpcnN0IERvY3ppbGxhIHt7IHR5cGUgfX08L2Rpdj4='
          },
          pdf: {
            headerHtml: 'PGRpdj5IZWFkZXIgdGVtcGxhdGU8L2Rpdj4=',
            footerHtml: 'PGRpdj5Gb290ZXIgdGVtcGxhdGU8L2Rpdj4='
          }
        }
      }))
    })
  })

  describe('update', () => {
    test('it should encode the page.html, page.htmlTemplate, pdf.headerHtml and pdf.footerHtml options', async () => {
      await client.template.update('fake-template-id', {
        variables: {
          page: {
            html: '<div>Your first Doczilla PDF</div>',
            htmlTemplate: '<div>Your first Doczilla {{ type }}</div>'
          },
          pdf: {
            headerHtml: '<div>Header template</div>',
            footerHtml: '<div>Footer template</div>'
          }
        }
      })

      expect(axiosMock.history.post.length).toBe(2)
      expect(axiosMock.history.post[1].data).toEqual(JSON.stringify({
        variables: {
          page: {
            html: 'PGRpdj5Zb3VyIGZpcnN0IERvY3ppbGxhIFBERjwvZGl2Pg==',
            htmlTemplate: 'PGRpdj5Zb3VyIGZpcnN0IERvY3ppbGxhIHt7IHR5cGUgfX08L2Rpdj4='
          },
          pdf: {
            headerHtml: 'PGRpdj5IZWFkZXIgdGVtcGxhdGU8L2Rpdj4=',
            footerHtml: 'PGRpdj5Gb290ZXIgdGVtcGxhdGU8L2Rpdj4='
          }
        }
      }))
    })
  })

})