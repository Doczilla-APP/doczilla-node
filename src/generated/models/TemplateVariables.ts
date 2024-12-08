/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PageOptions } from './PageOptions';
import type { PdfOptions } from './PdfOptions';
import type { ScreenshotOptions } from './ScreenshotOptions';
export type TemplateVariables = {
    /**
     * Page options, either provide the `url`, `html` or `htmlTemplate` option.
     */
    page: PageOptions;
    screenshot?: ScreenshotOptions | null;
    pdf?: PdfOptions | null;
};

