/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type PageWaitForSelectorOptions = {
    /**
     * Wait for the selected element to be present in DOM and to be visibleAn element is considered to be visible if all of the following is true:
     * - the element has [computed styles](https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle)
     * - the element has a non-empty [bounding client rect](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)
     * - the element's [visibility](https://developer.mozilla.org/en-US/docs/Web/CSS/visibility) is not `hidden` or `collapse`
     */
    visible?: boolean;
    /**
     * Wait for the selected element to not be found in the DOM or to be hidden.An element is considered to be hidden if at least one of the following is true:
     * - the element has no [computed styles](https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle)
     * - the element has an empty [bounding client rect](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)
     * - the element's [visibility](https://developer.mozilla.org/en-US/docs/Web/CSS/visibility) is `hidden` or `collapse`
     */
    hidden?: boolean;
    /**
     * Maximum time to wait in milliseconds.
     */
    timeout?: number;
};

