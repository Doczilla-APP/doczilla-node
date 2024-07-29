/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PageWaitForFunctionOptions } from './PageWaitForFunctionOptions';
export type PageWaitForFunction = {
    /**
     * Function to be evaluated in browser context until it returns a truthy value.
     */
    pageFunction: string;
    /**
     * Options for configuring waiting behavior.
     */
    options?: PageWaitForFunctionOptions | null;
};

