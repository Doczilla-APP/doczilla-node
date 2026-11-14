import type { AsyncJob, AsyncScreenshot, CreateScreenshot, SyncJob, SyncScreenshot } from '../generated'
import type { AxiosRequestConfig } from 'axios'

import { BaseService } from './BaseService'

export class ScreenshotService extends BaseService {

  /**
   * Create a screenshot and directly return the result.
   * @param requestBody
   * @param config Optional Axios request configuration.
   * @returns binary
   * @throws AxiosError
   */
  public direct(requestBody: CreateScreenshot, config: AxiosRequestConfig = {}): Promise<Buffer> {
    return this.request('POST', '/v1/screenshot', requestBody, {
      ...config,
      responseType: 'arraybuffer'
    })
  }

  /**
   * Create a screenshot and write the result directly in your bucket.
   * @param requestBody
   * @param config Optional Axios request configuration.
   * @returns SyncJob
   * @throws AxiosError
   */
  public sync(requestBody: SyncScreenshot, config: AxiosRequestConfig = {}): Promise<SyncJob> {
    return this.request('POST', '/v1/screenshot/sync', requestBody, config)
  }

  /**
   * Queue the creation of a screenshot and call the webhook with the result.
   * @param requestBody
   * @param config Optional Axios request configuration.
   * @returns AsyncJob
   * @throws AxiosError
   */
  public async(requestBody: AsyncScreenshot, config: AxiosRequestConfig = {}): Promise<AsyncJob> {
    return this.request('POST', '/v1/screenshot/async', requestBody, config)
  }

}
