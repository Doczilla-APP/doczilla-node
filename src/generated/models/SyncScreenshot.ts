/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PageOptions } from './PageOptions';
import type { ScreenshotOptions } from './ScreenshotOptions';
import type { StorageOptions } from './StorageOptions';

export type SyncScreenshot = {
    /**
     * Page options, either provide the `url` or `html` option.
     */
    page: PageOptions;
    screenshot?: ScreenshotOptions | null;
    storage?: StorageOptions | null;
};

