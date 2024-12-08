/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TemplateVariables } from './TemplateVariables';
export type UpdateTemplate = {
    /**
     * The name of the template.
     */
    name?: string;
    /**
     * The output format of the template.
     */
    output?: UpdateTemplate.output;
    /**
     * The variables of the template.
     */
    variables?: TemplateVariables;
};
export namespace UpdateTemplate {
    /**
     * The output format of the template.
     */
    export enum output {
        PDF = 'PDF',
        IMAGE = 'IMAGE',
    }
}

