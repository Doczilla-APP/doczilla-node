/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PageOptions } from './PageOptions';
import type { PdfOptions } from './PdfOptions';
import type { ScreenshotOptions } from './ScreenshotOptions';
import type { StorageOptions } from './StorageOptions';
import type { WebhookOptions } from './WebhookOptions';
export type AsyncFromTemplate = {
    /**
     * Page options.
     */
    page?: PageOptions | null;
    /**
     * Screenshot options, only used if Template's output is "SCREENSHOT".
     */
    screenshot?: ScreenshotOptions | null;
    /**
     * Pdf options, only used if Template's output is "PDF".
     */
    pdf?: PdfOptions | null;
    storage?: StorageOptions | null;
    /**
     * Webhook to call when screenshot is generated.
     */
    webhook: WebhookOptions;
};

