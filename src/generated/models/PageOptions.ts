/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PageAuthentication } from './PageAuthentication';
import type { PageCookie } from './PageCookie';
import type { PageWaitForFunction } from './PageWaitForFunction';
import type { PageWaitForSelector } from './PageWaitForSelector';
export type PageOptions = {
    /**
     * URL to go to. Should include the scheme, e.g. `https://`
     */
    url?: string | null;
    /**
     * HTML to render. Needs to be base64 encoded!
     */
    html?: string | null;
    /**
     * HTML template to render, uses [Handlebars](https://handlebarsjs.com/) to render your HTML together with the provided `templateData`. Needs to be base64 encoded!
     */
    htmlTemplate?: string | null;
    /**
     * Template data, only used in combination with `page.htmlTemplate`.
     */
    templateData?: Record<string, any> | null;
    /**
     * When to consider waiting succeeds.
     * - `auto` our smart waiting option that can handle 90% of the cases.
     * - `load` waits for the 'load' event.
     * - `domcontentloaded` waits for the 'DOMContentLoaded' event.
     * - `networkidle0` waits till there are no more than 0 network connections for at least `500` ms.
     * - `networkidle2` waits till there are no more than 2 network connections for at least `500` ms.
     */
    waitUntil?: PageOptions.waitUntil;
    /**
     * Wait for a certain amount of milliseconds before the request continues.
     */
    waitForMilliseconds?: number | null;
    /**
     * Wait for the [selector](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors) to appear in page. If the [selector](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors) doesn't appear after the `timeout` milliseconds of waiting, the request will continue.
     */
    waitForSelector?: PageWaitForSelector | null;
    /**
     * Wait for the `pageFunction` to execute in the page. If the `pageFunction` doesn't execute successfully after the `timeout` milliseconds of waiting, the request will continue.
     */
    waitForFunction?: PageWaitForFunction | null;
    /**
     * An object containing additional HTTP headers to be sent with every request. All header values must be strings.
     */
    headers?: Record<string, any> | null;
    /**
     * Use our build-in adblocker.
     */
    adblock?: boolean;
    /**
     * Whether or not to enable JavaScript on the page.
     */
    javascript?: boolean;
    /**
     * Cookies added to the page, Also accepted as string inside `headers.cookie`.
     */
    cookies?: Array<PageCookie> | null;
    /**
     * Provide credentials for `HTTP authentication`.
     */
    authentication?: PageAuthentication | null;
    /**
     * Color-scheme to set on the page.
     */
    colorScheme?: string | null;
    /**
     * Changes the CSS media type of the page.
     */
    mediaType?: PageOptions.mediaType | null;
    /**
     * Changes the timezone of the page. See [ICU’s metaZones.txt](https://source.chromium.org/chromium/chromium/deps/icu.git/+/faee8bc70570192d82d2978a71e2a615788597d1:source/data/misc/metaZones.txt) for a list of supported timezone IDs.
     */
    timezone?: string | null;
};
export namespace PageOptions {
    /**
     * When to consider waiting succeeds.
     * - `auto` our smart waiting option that can handle 90% of the cases.
     * - `load` waits for the 'load' event.
     * - `domcontentloaded` waits for the 'DOMContentLoaded' event.
     * - `networkidle0` waits till there are no more than 0 network connections for at least `500` ms.
     * - `networkidle2` waits till there are no more than 2 network connections for at least `500` ms.
     */
    export enum waitUntil {
        AUTO = 'auto',
        LOAD = 'load',
        DOMCONTENTLOADED = 'domcontentloaded',
        NETWORKIDLE0 = 'networkidle0',
        NETWORKIDLE2 = 'networkidle2',
    }
    /**
     * Changes the CSS media type of the page.
     */
    export enum mediaType {
        SCREEN = 'screen',
        PRINT = 'print',
    }
}

