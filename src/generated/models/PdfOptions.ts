/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PDFMargin } from './PDFMargin';
export type PdfOptions = {
    /**
     * Scales the rendering of the web page. Amount must be between `0.1` and `2`.
     */
    scale?: number;
    /**
     * Whether to show the header and footer.
     */
    displayHeaderFooter?: boolean;
    /**
     * HTML template for the print header. Should be valid HTML (base64 encoded) with the following classes used to inject values into them:
     * - `date` formatted print date
     * - `title` document title
     * - `url` document location
     * - `pageNumber` current page number
     * - `totalPages` total pages in the document
     */
    headerHtml?: string | null;
    /**
     * HTML template for the print footer. Has the same constraints and support for special classes as `headerHtml`.
     */
    footerHtml?: string | null;
    /**
     * Set to `true` to print background graphics.
     */
    printBackground?: boolean;
    /**
     * Whether to print in landscape orientation.
     */
    landscape?: boolean;
    /**
     * Paper ranges to print, e.g. `1-5, 8, 11-13`.
     */
    pageRanges?: string | null;
    /**
     * If set, this takes priority over the `width` and `height` options.
     * The sizes of each format are as follows:
     * - `letter` 8.5in x 11in
     * - `legal` 8.5in x 14in
     * - `tabloid` 11in x 17in
     * - `ledger` 17in x 11in
     * - `a0` 33.1in x 46.8in
     * - `a1` 23.4in x 33.1in
     * - `a2` 16.54in x 23.4in
     * - `a3` 11.7in x 16.54in
     * - `a4` 8.27in x 11.7in
     * - `a5` 5.83in x 8.27in
     * - `a6` 4.13in x 5.83in
     */
    format?: PdfOptions.format;
    /**
     * Sets the width of paper. You can pass in a number or a string with a unit.
     */
    width?: (string | number) | null;
    /**
     * Sets the height of paper. You can pass in a number or a string with a unit.
     */
    height?: (string | number) | null;
    /**
     * Give any CSS [@page](https://developer.mozilla.org/en-US/docs/Web/CSS/@page) size declared in the page priority over what is declared in the `width` or `height` or `format` option.
     */
    preferCSSPageSize?: boolean;
    /**
     * Set the PDF margins.
     */
    margin?: PDFMargin | null;
    /**
     * Hides default white background and allows generating pdfs with transparency.
     */
    omitBackground?: boolean;
    /**
     * Generate document outline.
     * If this is enabled the PDF will also be tagged (accessible).
     */
    outline?: boolean;
    /**
     * Generate tagged (accessible) PDF.
     * This is experimental and will increase the size of the PDF.
     */
    tagged?: boolean;
};
export namespace PdfOptions {
    /**
     * If set, this takes priority over the `width` and `height` options.
     * The sizes of each format are as follows:
     * - `letter` 8.5in x 11in
     * - `legal` 8.5in x 14in
     * - `tabloid` 11in x 17in
     * - `ledger` 17in x 11in
     * - `a0` 33.1in x 46.8in
     * - `a1` 23.4in x 33.1in
     * - `a2` 16.54in x 23.4in
     * - `a3` 11.7in x 16.54in
     * - `a4` 8.27in x 11.7in
     * - `a5` 5.83in x 8.27in
     * - `a6` 4.13in x 5.83in
     */
    export enum format {
        LETTER = 'letter',
        LEGAL = 'legal',
        TABLOID = 'tabloid',
        LEDGER = 'ledger',
        A0 = 'a0',
        A1 = 'a1',
        A2 = 'a2',
        A3 = 'a3',
        A4 = 'a4',
        A5 = 'a5',
        A6 = 'a6',
    }
}

