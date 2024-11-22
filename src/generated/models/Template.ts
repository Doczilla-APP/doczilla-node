/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TemplateVariables } from './TemplateVariables';
export type Template = {
    /**
     * The unique identifier of the template.
     */
    id: string;
    /**
     * The name of the template.
     */
    name: string;
    /**
     * The output format of the template.
     */
    output: Template.output;
    /**
     * The date and time the template was created.
     */
    createdAt: string;
    /**
     * The date and time the template was last updated.
     */
    updatedAt: string;
    /**
     * The variables of the template.
     */
    variables: TemplateVariables;
};
export namespace Template {
    /**
     * The output format of the template.
     */
    export enum output {
        PDF = 'PDF',
        IMAGE = 'IMAGE',
    }
}

