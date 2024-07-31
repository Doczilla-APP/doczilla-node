/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type PageWaitForFunctionOptions = {
    /**
     * An interval at which the `pageFunction` is executed, defaults to `raf`. If `polling` is a number, then it is treated as an interval in milliseconds at which the function would be executed. If `polling` is a string, then it can be one of the following values:
     * - `raf` to constantly execute `pageFunction` in `requestAnimationFrame` callback. This is the tightest polling mode which is suitable to observe styling changes.
     * - `mutation` to execute `pageFunction` on every DOM mutation.
     */
    polling?: ('raf' | 'mutation' | number);
    /**
     * Maximum time to wait in milliseconds.
     */
    timeout?: number;
};

