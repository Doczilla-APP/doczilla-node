/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PageOptions } from './PageOptions';
import type { PdfOptions } from './PdfOptions';
import type { StorageOptions } from './StorageOptions';
import type { WebhookOptions } from './WebhookOptions';

export type AsyncPdf = {
    /**
     * Page options, either provide the `url` or `html` option.
     */
    page: PageOptions;
    /**
     * Template data, only used in combination with `page.htmlTemplate`.
     */
    templateData?: Record<string, any> | null;
    pdf?: PdfOptions | null;
    storage?: StorageOptions | null;
    /**
     * Webhook to call when screenshot is generated.
     */
    webhook: WebhookOptions;
};

