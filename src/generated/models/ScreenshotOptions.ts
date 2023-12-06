/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ScreenshotClip } from './ScreenshotClip';
import type { ScreenshotOverlay } from './ScreenshotOverlay';
import type { ScreenshotViewport } from './ScreenshotViewport';

export type ScreenshotOptions = {
    type?: ScreenshotOptions.type | null;
    /**
     * Device preset to use, will not be set when `viewport` option is provided!
     */
    device?: ScreenshotOptions.device | null;
    /**
     * Define an custom viewport, when defined the `device` option will be ignored!
     */
    viewport?: ScreenshotViewport | null;
    /**
     * When `true`, takes a screenshot of the full page.
     */
    fullPage?: boolean;
    /**
     * Capture the screenshot from the surface, rather than the view.
     */
    fromSurface?: boolean;
    /**
     * Hides default white background and allows capturing screenshots with transparency.
     */
    omitBackground?: boolean;
    optimizeForSpeed?: boolean;
    /**
     * Quality of the image, between 0-100. Not applicable to `png` images.
     */
    quality?: number | null;
    /**
     * Capture the screenshot beyond the viewport. `false` if there is no `clip`. `true` otherwise.
     */
    captureBeyondViewport?: boolean;
    /**
     * Specifies the region of the page to clip.
     */
    clip?: ScreenshotClip | null;
    /**
     * It captures the DOM element matching the given CSS selector. This will overwrite the `clip` property and set `fullPage` to `false`.
     */
    element?: string | null;
    /**
     * Add an overlay to the image. Cannot be used together with the `fullPage` option!
     */
    overlay?: ScreenshotOverlay | null;
};

export namespace ScreenshotOptions {

    export enum type {
        PNG = 'png',
        JPEG = 'jpeg',
        WEBP = 'webp',
    }

    /**
     * Device preset to use, will not be set when `viewport` option is provided!
     */
    export enum device {
        BLACKBERRY_PLAY_BOOK = 'Blackberry PlayBook',
        BLACKBERRY_PLAY_BOOK_LANDSCAPE = 'Blackberry PlayBook landscape',
        BLACK_BERRY_Z30 = 'BlackBerry Z30',
        BLACK_BERRY_Z30_LANDSCAPE = 'BlackBerry Z30 landscape',
        GALAXY_NOTE_3 = 'Galaxy Note 3',
        GALAXY_NOTE_3_LANDSCAPE = 'Galaxy Note 3 landscape',
        GALAXY_NOTE_II = 'Galaxy Note II',
        GALAXY_NOTE_II_LANDSCAPE = 'Galaxy Note II landscape',
        GALAXY_S_III = 'Galaxy S III',
        GALAXY_S_III_LANDSCAPE = 'Galaxy S III landscape',
        GALAXY_S5 = 'Galaxy S5',
        GALAXY_S5_LANDSCAPE = 'Galaxy S5 landscape',
        GALAXY_S8 = 'Galaxy S8',
        GALAXY_S8_LANDSCAPE = 'Galaxy S8 landscape',
        GALAXY_S9_ = 'Galaxy S9+',
        GALAXY_S9_LANDSCAPE = 'Galaxy S9+ landscape',
        GALAXY_TAB_S4 = 'Galaxy Tab S4',
        GALAXY_TAB_S4_LANDSCAPE = 'Galaxy Tab S4 landscape',
        I_PAD = 'iPad',
        I_PAD_LANDSCAPE = 'iPad landscape',
        I_PAD_GEN_6_ = 'iPad (gen 6)',
        I_PAD_GEN_6_LANDSCAPE = 'iPad (gen 6) landscape',
        I_PAD_GEN_7_ = 'iPad (gen 7)',
        I_PAD_GEN_7_LANDSCAPE = 'iPad (gen 7) landscape',
        I_PAD_MINI = 'iPad Mini',
        I_PAD_MINI_LANDSCAPE = 'iPad Mini landscape',
        I_PAD_PRO = 'iPad Pro',
        I_PAD_PRO_LANDSCAPE = 'iPad Pro landscape',
        I_PAD_PRO_11 = 'iPad Pro 11',
        I_PAD_PRO_11_LANDSCAPE = 'iPad Pro 11 landscape',
        I_PHONE_4 = 'iPhone 4',
        I_PHONE_4_LANDSCAPE = 'iPhone 4 landscape',
        I_PHONE_5 = 'iPhone 5',
        I_PHONE_5_LANDSCAPE = 'iPhone 5 landscape',
        I_PHONE_6 = 'iPhone 6',
        I_PHONE_6_LANDSCAPE = 'iPhone 6 landscape',
        I_PHONE_6_PLUS = 'iPhone 6 Plus',
        I_PHONE_6_PLUS_LANDSCAPE = 'iPhone 6 Plus landscape',
        I_PHONE_7 = 'iPhone 7',
        I_PHONE_7_LANDSCAPE = 'iPhone 7 landscape',
        I_PHONE_7_PLUS = 'iPhone 7 Plus',
        I_PHONE_7_PLUS_LANDSCAPE = 'iPhone 7 Plus landscape',
        I_PHONE_8 = 'iPhone 8',
        I_PHONE_8_LANDSCAPE = 'iPhone 8 landscape',
        I_PHONE_8_PLUS = 'iPhone 8 Plus',
        I_PHONE_8_PLUS_LANDSCAPE = 'iPhone 8 Plus landscape',
        I_PHONE_SE = 'iPhone SE',
        I_PHONE_SE_LANDSCAPE = 'iPhone SE landscape',
        I_PHONE_X = 'iPhone X',
        I_PHONE_X_LANDSCAPE = 'iPhone X landscape',
        I_PHONE_XR = 'iPhone XR',
        I_PHONE_XR_LANDSCAPE = 'iPhone XR landscape',
        I_PHONE_11 = 'iPhone 11',
        I_PHONE_11_LANDSCAPE = 'iPhone 11 landscape',
        I_PHONE_11_PRO = 'iPhone 11 Pro',
        I_PHONE_11_PRO_LANDSCAPE = 'iPhone 11 Pro landscape',
        I_PHONE_11_PRO_MAX = 'iPhone 11 Pro Max',
        I_PHONE_11_PRO_MAX_LANDSCAPE = 'iPhone 11 Pro Max landscape',
        I_PHONE_12 = 'iPhone 12',
        I_PHONE_12_LANDSCAPE = 'iPhone 12 landscape',
        I_PHONE_12_PRO = 'iPhone 12 Pro',
        I_PHONE_12_PRO_LANDSCAPE = 'iPhone 12 Pro landscape',
        I_PHONE_12_PRO_MAX = 'iPhone 12 Pro Max',
        I_PHONE_12_PRO_MAX_LANDSCAPE = 'iPhone 12 Pro Max landscape',
        I_PHONE_12_MINI = 'iPhone 12 Mini',
        I_PHONE_12_MINI_LANDSCAPE = 'iPhone 12 Mini landscape',
        I_PHONE_13 = 'iPhone 13',
        I_PHONE_13_LANDSCAPE = 'iPhone 13 landscape',
        I_PHONE_13_PRO = 'iPhone 13 Pro',
        I_PHONE_13_PRO_LANDSCAPE = 'iPhone 13 Pro landscape',
        I_PHONE_13_PRO_MAX = 'iPhone 13 Pro Max',
        I_PHONE_13_PRO_MAX_LANDSCAPE = 'iPhone 13 Pro Max landscape',
        I_PHONE_13_MINI = 'iPhone 13 Mini',
        I_PHONE_13_MINI_LANDSCAPE = 'iPhone 13 Mini landscape',
        JIO_PHONE_2 = 'JioPhone 2',
        JIO_PHONE_2_LANDSCAPE = 'JioPhone 2 landscape',
        KINDLE_FIRE_HDX = 'Kindle Fire HDX',
        KINDLE_FIRE_HDX_LANDSCAPE = 'Kindle Fire HDX landscape',
        LG_OPTIMUS_L70 = 'LG Optimus L70',
        LG_OPTIMUS_L70_LANDSCAPE = 'LG Optimus L70 landscape',
        MICROSOFT_LUMIA_550 = 'Microsoft Lumia 550',
        MICROSOFT_LUMIA_950 = 'Microsoft Lumia 950',
        MICROSOFT_LUMIA_950_LANDSCAPE = 'Microsoft Lumia 950 landscape',
        NEXUS_10 = 'Nexus 10',
        NEXUS_10_LANDSCAPE = 'Nexus 10 landscape',
        NEXUS_4 = 'Nexus 4',
        NEXUS_4_LANDSCAPE = 'Nexus 4 landscape',
        NEXUS_5 = 'Nexus 5',
        NEXUS_5_LANDSCAPE = 'Nexus 5 landscape',
        NEXUS_5X = 'Nexus 5X',
        NEXUS_5X_LANDSCAPE = 'Nexus 5X landscape',
        NEXUS_6 = 'Nexus 6',
        NEXUS_6_LANDSCAPE = 'Nexus 6 landscape',
        NEXUS_6P = 'Nexus 6P',
        NEXUS_6P_LANDSCAPE = 'Nexus 6P landscape',
        NEXUS_7 = 'Nexus 7',
        NEXUS_7_LANDSCAPE = 'Nexus 7 landscape',
        NOKIA_LUMIA_520 = 'Nokia Lumia 520',
        NOKIA_LUMIA_520_LANDSCAPE = 'Nokia Lumia 520 landscape',
        NOKIA_N9 = 'Nokia N9',
        NOKIA_N9_LANDSCAPE = 'Nokia N9 landscape',
        PIXEL_2 = 'Pixel 2',
        PIXEL_2_LANDSCAPE = 'Pixel 2 landscape',
        PIXEL_2_XL = 'Pixel 2 XL',
        PIXEL_2_XL_LANDSCAPE = 'Pixel 2 XL landscape',
        PIXEL_3 = 'Pixel 3',
        PIXEL_3_LANDSCAPE = 'Pixel 3 landscape',
        PIXEL_4 = 'Pixel 4',
        PIXEL_4_LANDSCAPE = 'Pixel 4 landscape',
        PIXEL_4A_5G_ = 'Pixel 4a (5G)',
        PIXEL_4A_5G_LANDSCAPE = 'Pixel 4a (5G) landscape',
        PIXEL_5 = 'Pixel 5',
        PIXEL_5_LANDSCAPE = 'Pixel 5 landscape',
        MOTO_G4 = 'Moto G4',
        MOTO_G4_LANDSCAPE = 'Moto G4 landscape',
        MACBOOK_PRO_13 = 'Macbook Pro 13',
        MACBOOK_PRO_15 = 'Macbook Pro 15',
        MACBOOK_PRO_16 = 'Macbook Pro 16',
        I_MAC_21 = 'iMac 21',
        I_MAC_21_4K = 'iMac 21 4K',
        I_MAC_24_4_5K = 'iMac 24 4.5K',
        I_MAC_27 = 'iMac 27',
        I_MAC_27_5K = 'iMac 27 5K',
    }


}

