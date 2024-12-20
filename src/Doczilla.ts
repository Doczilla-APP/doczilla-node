import axios, { Axios } from 'axios'

import { version } from '../package.json'
import { PdfService } from './services/PdfService'
import { ScreenshotService } from './services/ScreenshotService'
import { TemplateService } from './services/TemplateService'
import { WebhookService } from './services/WebhookService'

interface DoczillaOptions {
  baseURL?: string
}

export default class Doczilla {

  private readonly client: Axios

  public readonly pdf: PdfService
  public readonly screenshot: ScreenshotService
  public readonly webhook: WebhookService
  public readonly template: TemplateService

  constructor(token: string, options: DoczillaOptions = {}) {
    if (!token) {
      throw new Error('No token provided!')
    }

    this.client = axios.create({
      baseURL: options.baseURL || 'https://api.doczilla.app',
      headers: {
        'User-Agent': `Doczilla Node.js / ${version}`,
        Authorization: `Bearer ${token}`
      }
    })

    this.pdf = new PdfService(this.client)
    this.screenshot = new ScreenshotService(this.client)
    this.template = new TemplateService(this.client)
    this.webhook = new WebhookService()
  }

}
