/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListTemplate } from './ListTemplate';
export type ListTemplateResponse = {
    /**
     * Is true if there is a next page.
     */
    hasNextPage: boolean;
    /**
     * Is true if there is a previous page.
     */
    hasPreviousPage: boolean;
    /**
     * The list of templates.
     */
    data: Array<ListTemplate>;
};

