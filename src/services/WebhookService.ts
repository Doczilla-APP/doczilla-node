import crypto from 'node:crypto'

import type { WebhookEvent } from '../generated'

export class WebhookService {

  public verifyPayload(payload: string, signature: string, webhookSecret: string): WebhookEvent {
    const payloadSignature = crypto
      .createHmac('sha256', webhookSecret)
      .update(payload, 'utf8')
      .digest('hex')

    if (payloadSignature === signature) {
      return JSON.parse(payload.toString())
    }

    throw new Error('Signature does not match!')
  }

}
