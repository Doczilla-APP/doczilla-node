/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PageOptions } from './PageOptions';
import type { ScreenshotOptions } from './ScreenshotOptions';

export type CreateScreenshot = {
    /**
     * Page options, either provide the `url` or `html` option.
     */
    page: PageOptions;
    /**
     * Template data, only used in combination with `page.htmlTemplate`.
     */
    templateData?: Record<string, any> | null;
    screenshot?: ScreenshotOptions | null;
};

