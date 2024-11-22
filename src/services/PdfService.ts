import type { AsyncJob, AsyncPdf, CreatePdf, SyncJob, SyncPdf } from '../generated'

import { BaseService } from './BaseService'

export class PdfService extends BaseService {

  /**
   * Create a PDF and directly return the result.
   * @param requestBody
   * @returns Buffer
   * @throws AxiosError
   */
  public direct(requestBody: CreatePdf): Promise<Buffer> {
    return this.request('POST', '/v1/pdf', requestBody, {
      responseType: 'arraybuffer'
    })
  }

  /**
   * Create a PDF and write the result directly in your bucket.
   * @param requestBody
   * @returns SyncJob
   * @throws AxiosError
   */
  public async sync(requestBody: SyncPdf): Promise<SyncJob> {
    return this.request('POST', '/v1/pdf/sync', requestBody)
  }

  /**
   * Queue the creation of a PDF and call the webhook with the result.
   * @param requestBody
   * @returns AsyncJob
   * @throws AxiosError
   */
  public async(requestBody: AsyncPdf): Promise<AsyncJob> {
    return this.request('POST', '/v1/pdf/async', requestBody)
  }

}
