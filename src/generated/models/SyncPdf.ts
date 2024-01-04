/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PageOptions } from './PageOptions';
import type { PdfOptions } from './PdfOptions';
import type { StorageOptions } from './StorageOptions';

export type SyncPdf = {
    /**
     * Page options, either provide the `url`, `html` or `htmlTemplate` option.
     */
    page: PageOptions;
    pdf?: PdfOptions | null;
    storage?: StorageOptions | null;
};

