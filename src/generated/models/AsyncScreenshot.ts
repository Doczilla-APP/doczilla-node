/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PageOptions } from './PageOptions';
import type { ScreenshotOptions } from './ScreenshotOptions';
import type { StorageOptions } from './StorageOptions';
import type { WebhookOptions } from './WebhookOptions';

export type AsyncScreenshot = {
    /**
     * Page options, either provide the `url`, `html` or `htmlTemplate` option.
     */
    page: PageOptions;
    screenshot?: ScreenshotOptions | null;
    storage?: StorageOptions | null;
    /**
     * Webhook to call when screenshot is generated.
     */
    webhook: WebhookOptions;
};

