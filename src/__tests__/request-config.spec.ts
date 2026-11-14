import { describe, expect, test } from '@jest/globals'
import axios, { AxiosRequestConfig } from 'axios'
import MockAdapter from 'axios-mock-adapter'

import { CreateTemplate } from '../generated'
import { PdfService } from '../services/PdfService'
import { ScreenshotService } from '../services/ScreenshotService'
import { TemplateService } from '../services/TemplateService'

describe('Request configuration', () => {
  const client = axios.create()
  const mock = new MockAdapter(client)
  const pdf = new PdfService(client)
  const screenshot = new ScreenshotService(client)
  const template = new TemplateService(client)
  const page = { url: 'https://example.com' }
  const webhook = { url: 'https://example.com/webhook' }
  const requests: [string, (config: AxiosRequestConfig) => Promise<unknown>][] = [
    ['pdf.direct', config => pdf.direct({ page }, config)],
    ['pdf.sync', config => pdf.sync({ page }, config)],
    ['pdf.async', config => pdf.async({ page, webhook }, config)],
    ['screenshot.direct', config => screenshot.direct({ page }, config)],
    ['screenshot.sync', config => screenshot.sync({ page }, config)],
    ['screenshot.async', config => screenshot.async({ page, webhook }, config)],
    ['template.direct', config => template.direct('id', {}, config)],
    ['template.sync', config => template.sync('id', {}, config)],
    ['template.async', config => template.async('id', { webhook }, config)],
    ['template.list', config => template.list({ page: 2 }, config)],
    ['template.create', config => template.create({
      name: 'Example', output: CreateTemplate.output.PDF, variables: { page }
    }, config)],
    ['template.get', config => template.get('id', config)],
    ['template.update', config => template.update('id', { name: 'Updated' }, config)],
    ['template.delete', config => template.delete('id', config)]
  ]

  mock.onAny().reply(200, Buffer.from('result'))

  test.each(requests)('%s forwards Axios configuration', async (_name, request) => {
    await request({ timeout: 5000, headers: { 'X-Request-ID': 'example' } })

    const config = mock.history[mock.history.length - 1]
    expect(config.timeout).toBe(5000)
    expect(config.headers['X-Request-ID']).toBe('example')
  })

  test.each(requests)('%s rejects when its signal is already aborted', async (_name, request) => {
    const controller = new AbortController()
    controller.abort()

    await expect(request({ signal: controller.signal })).rejects.toMatchObject({ code: 'ERR_CANCELED' })
  })

  test('passes the signal to the transport and preserves binary responses', async () => {
    const controller = new AbortController()

    await expect(pdf.direct({ page }, { signal: controller.signal, timeout: 5000, responseType: 'json' })).resolves.toEqual(Buffer.from('result'))
    expect(mock.history.post[mock.history.post.length - 1].signal).toBe(controller.signal)
    expect(mock.history.post[mock.history.post.length - 1].responseType).toBe('arraybuffer')
    expect(mock.history.post[mock.history.post.length - 1].timeout).toBe(5000)
  })

  test('preserves pagination when passing a signal', async () => {
    const controller = new AbortController()

    await template.list({ page: 2 }, { signal: controller.signal, headers: { 'X-Request-ID': 'example' } })

    expect(mock.history.get[mock.history.get.length - 1].signal).toBe(controller.signal)
    expect(mock.history.get[mock.history.get.length - 1].params).toEqual({ page: 2 })
    expect(mock.history.get[mock.history.get.length - 1].headers['X-Request-ID']).toBe('example')
  })
})
