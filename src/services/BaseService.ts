import { Axios, AxiosHeaders, AxiosRequestConfig, isAxiosError } from 'axios'

export class BaseService {

  private rateLimit = {
    limit: 60,
    remaining: 30,
    resetIn: 0
  }

  protected readonly rateLimitHeaders = {
    limit: 'x-ratelimit-limit',
    reset: 'x-ratelimit-reset',
    remaining: 'x-ratelimit-remaining'
  }

  constructor(private readonly client: Axios) {}

  protected async post<T>(url: string, requestBody: object, config: AxiosRequestConfig = {}, retries = 1): Promise<T> {
    try {
      await this.waitForRateLimit()

      const axiosResponse = await this.client.post<T>(url, requestBody, config)
      this.processRateLimit(new AxiosHeaders(axiosResponse.headers))

      if (config.responseType === 'arraybuffer') {
        return Buffer.from(axiosResponse.data as ArrayBuffer) as T
      }

      return axiosResponse.data
    } catch (err) {
      if (isAxiosError(err) && err.status === 429 && retries > 0) {
        return this.post(url, requestBody, config, retries - 1)
      }

      throw err
    }
  }

  private async waitForRateLimit(): Promise<void> {
    // Minus 1 to be safe
    if ((this.rateLimit.remaining - 1) <= 0) {
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          resolve()
        }, this.rateLimit.resetIn + 100) // Add 100ms to be sure
      })
    }
  }

  private processRateLimit(headers: AxiosHeaders) {
    this.rateLimit = {
      limit: parseInt(`${headers.get(this.rateLimitHeaders.limit)}`, 10) || this.rateLimit.limit,
      remaining: parseInt(`${headers.get(this.rateLimitHeaders.remaining)}`, 10) || this.rateLimit.remaining,
      resetIn: parseInt(`${headers.get(this.rateLimitHeaders.reset)}`, 10) * 1000 // seconds to milliseconds
    }
  }

}
