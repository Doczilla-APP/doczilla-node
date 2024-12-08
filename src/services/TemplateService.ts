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

import { BaseService } from './BaseService'

export class TemplateService extends BaseService {

  /**
   * Create the template and directly return the raw result.
   * @param id
   * @param requestBody
   * @returns Buffer
   * @throws AxiosError
   */
  public direct(id: string, requestBody: CreateFromTemplate): Promise<Buffer> {
    return this.request('POST', `/v1/template/${id}`, requestBody, {
      responseType: 'arraybuffer'
    })
  }

  /**
   * Create the template and write the result directly in your bucket.
   * @param id
   * @param requestBody
   * @returns SyncJob
   * @throws AxiosError
   */
  public async sync(id: string, requestBody: SyncFromTemplate): Promise<SyncJob> {
    return this.request('POST', `/v1/template/${id}/sync`, requestBody)
  }

  /**
   * Queue the creation of the template and call the webhook with the result.
   * @param id
   * @param requestBody
   * @returns AsyncJob
   * @throws AxiosError
   */
  public async(id: string, requestBody: AsyncFromTemplate): Promise<AsyncJob> {
    return this.request('POST', `/v1/template/${id}/async`, requestBody)
  }

  /**
   * List all available templates.
   * @param params
   * @returns ListTemplateResponse
   * @throws AxiosError
   */
  public list(params: { page?: number } = {}): Promise<ListTemplateResponse> {
    return this.request('GET', '/v1/templates', undefined, {
      params
    })
  }

  /**
   * Creates a new template with the provided request body.
   * @param requestBody
   * @returns Template
   * @throws AxiosError
   */
  public create(requestBody: CreateTemplate): Promise<Template> {
    return this.request('POST', '/v1/templates', {
      ...requestBody,
      variables: this.encodeRequestBody(requestBody.variables)
    })
  }

  /**
   * Get one template.
   * @param id
   * @returns Template
   * @throws AxiosError
   */
  public get(id: string): Promise<Template> {
    return this.request('GET', `/v1/templates/${id}`)
  }

  /**
   * Update one template.
   * @param id
   * @param requestBody
   * @throws AxiosError
   */
  public update(id: string, requestBody: UpdateTemplate): Promise<void> {
    return this.request('POST', `/v1/templates/${id}`, {
      ...requestBody,
      ...(requestBody.variables && ({
        variables: this.encodeRequestBody(requestBody.variables)
      }))
    })
  }

  /**
   * Delete one template.
   * @param id
   * @throws AxiosError
   */
  public delete(id: string): Promise<void> {
    return this.request('DELETE', `/v1/templates/${id}`)
  }

}
