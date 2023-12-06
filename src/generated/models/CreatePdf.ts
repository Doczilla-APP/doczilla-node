/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PageOptions } from './PageOptions';
import type { PdfOptions } from './PdfOptions';

export type CreatePdf = {
    /**
     * Page options, either provide the `url` or `html` option.
     */
    page: PageOptions;
    pdf?: PdfOptions | null;
};

