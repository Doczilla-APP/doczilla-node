/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PageOptions } from './PageOptions';
import type { PdfOptions } from './PdfOptions';
import type { ScreenshotOptions } from './ScreenshotOptions';
export type CreateFromTemplate = {
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
};

