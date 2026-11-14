import type { AsyncJob, AsyncPdf, CreatePdf, SyncJob, SyncPdf } from '../generated'
import type { AxiosRequestConfig } from 'axios'

import { BaseService } from './BaseService'

export class PdfService extends BaseService {

  /**
   * Create a PDF and directly return the result.
   * @param requestBody
   * @param config Optional Axios request configuration.
   * @returns Buffer
   * @throws AxiosError
   */
  public direct(requestBody: CreatePdf, config: AxiosRequestConfig = {}): Promise<Buffer> {
    return this.request('POST', '/v1/pdf', requestBody, {
      ...config,
      responseType: 'arraybuffer'
    })
  }

  /**
   * Create a PDF and write the result directly in your bucket.
   * @param requestBody
   * @param config Optional Axios request configuration.
   * @returns SyncJob
   * @throws AxiosError
   */
  public async sync(requestBody: SyncPdf, config: AxiosRequestConfig = {}): Promise<SyncJob> {
    return this.request('POST', '/v1/pdf/sync', requestBody, config)
  }

  /**
   * Queue the creation of a PDF and call the webhook with the result.
   * @param requestBody
   * @param config Optional Axios request configuration.
   * @returns AsyncJob
   * @throws AxiosError
   */
  public async(requestBody: AsyncPdf, config: AxiosRequestConfig = {}): Promise<AsyncJob> {
    return this.request('POST', '/v1/pdf/async', requestBody, config)
  }

}
