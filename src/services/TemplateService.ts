import type {
  AsyncFromTemplate,
  AsyncJob,
  CreateFromTemplate,
  CreateTemplate,
  ListTemplateResponse,
  SyncFromTemplate,
  SyncJob,
  Template,
  UpdateTemplate
} from '../generated'
import type { AxiosRequestConfig } from 'axios'

import { BaseService } from './BaseService'

export class TemplateService extends BaseService {

  /**
   * Create the template and directly return the raw result.
   * @param id
   * @param requestBody
   * @param config Optional Axios request configuration.
   * @returns Buffer
   * @throws AxiosError
   */
  public direct(id: string, requestBody: CreateFromTemplate, config: AxiosRequestConfig = {}): Promise<Buffer> {
    return this.request('POST', `/v1/template/${id}`, requestBody, {
      ...config,
      responseType: 'arraybuffer'
    })
  }

  /**
   * Create the template and write the result directly in your bucket.
   * @param id
   * @param requestBody
   * @param config Optional Axios request configuration.
   * @returns SyncJob
   * @throws AxiosError
   */
  public async sync(id: string, requestBody: SyncFromTemplate, config: AxiosRequestConfig = {}): Promise<SyncJob> {
    return this.request('POST', `/v1/template/${id}/sync`, requestBody, config)
  }

  /**
   * Queue the creation of the template and call the webhook with the result.
   * @param id
   * @param requestBody
   * @param config Optional Axios request configuration.
   * @returns AsyncJob
   * @throws AxiosError
   */
  public async(id: string, requestBody: AsyncFromTemplate, config: AxiosRequestConfig = {}): Promise<AsyncJob> {
    return this.request('POST', `/v1/template/${id}/async`, requestBody, config)
  }

  /**
   * List all available templates.
   * @param params
   * @param config Optional Axios request configuration.
   * @returns ListTemplateResponse
   * @throws AxiosError
   */
  public list(params: { page?: number } = {}, config: AxiosRequestConfig = {}): Promise<ListTemplateResponse> {
    return this.request('GET', '/v1/templates', undefined, {
      params,
      ...config
    })
  }

  /**
   * Creates a new template with the provided request body.
   * @param requestBody
   * @param config Optional Axios request configuration.
   * @returns Template
   * @throws AxiosError
   */
  public create(requestBody: CreateTemplate, config: AxiosRequestConfig = {}): Promise<Template> {
    return this.request('POST', '/v1/templates', {
      ...requestBody,
      variables: this.encodeRequestBody(requestBody.variables)
    }, config)
  }

  /**
   * Get one template.
   * @param id
   * @param config Optional Axios request configuration.
   * @returns Template
   * @throws AxiosError
   */
  public get(id: string, config: AxiosRequestConfig = {}): Promise<Template> {
    return this.request('GET', `/v1/templates/${id}`, undefined, config)
  }

  /**
   * Update one template.
   * @param id
   * @param requestBody
   * @param config Optional Axios request configuration.
   * @throws AxiosError
   */
  public update(id: string, requestBody: UpdateTemplate, config: AxiosRequestConfig = {}): Promise<void> {
    return this.request('POST', `/v1/templates/${id}`, {
      ...requestBody,
      ...(requestBody.variables && ({
        variables: this.encodeRequestBody(requestBody.variables)
      }))
    }, config)
  }

  /**
   * Delete one template.
   * @param id
   * @param config Optional Axios request configuration.
   * @throws AxiosError
   */
  public delete(id: string, config: AxiosRequestConfig = {}): Promise<void> {
    return this.request('DELETE', `/v1/templates/${id}`, undefined, config)
  }

}
