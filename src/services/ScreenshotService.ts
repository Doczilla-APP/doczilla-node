import type { AsyncJob, AsyncScreenshot, CreateScreenshot, SyncJob, SyncScreenshot } from '../generated'

import { BaseService } from './BaseService'

export class ScreenshotService extends BaseService {

  /**
   * Create a screenshot and directly return the result.
   * @param requestBody
   * @returns binary
   * @throws AxiosError
   */
  public direct(requestBody: CreateScreenshot): Promise<Buffer> {
    return this.post('/v1/screenshot', requestBody, {
      responseType: 'arraybuffer'
    })
  }

  /**
   * Create a screenshot and write the result directly in your bucket.
   * @param requestBody
   * @returns SyncJob
   * @throws AxiosError
   */
  public sync(requestBody: SyncScreenshot): Promise<SyncJob> {
    return this.post('/v1/screenshot/sync', requestBody)
  }

  /**
   * Queue the creation of a screenshot and call the webhook with the result.
   * @param requestBody
   * @returns AsyncJob
   * @throws AxiosError
   */
  public async(requestBody: AsyncScreenshot): Promise<AsyncJob> {
    return this.post('/v1/screenshot/async', requestBody)
  }

}
