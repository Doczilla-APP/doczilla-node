/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ScreenshotOverlay = {
    /**
     * Color to apply as background, can be an an hexadecimal/rgb/rgba color code or CSS gradient.
     */
    background?: string | null;
    /**
     * Apply [CSS Filter](https://developer.mozilla.org/en-US/docs/Web/CSS/filter) to background.
     */
    filter?: string | null;
    /**
     * Margin to apply.
     */
    margin?: number;
    /**
     * Browser to apply.
     */
    browser?: ScreenshotOverlay.browser | null;
    /**
     * The border radius, specified in CSS pixels, is applied to the screenshot only when the `device` option is not set.
     */
    screenshotBorderRadius?: number;
};
export namespace ScreenshotOverlay {
    /**
     * Browser to apply.
     */
    export enum browser {
        LIGHT = 'light',
        DARK = 'dark',
    }
}

