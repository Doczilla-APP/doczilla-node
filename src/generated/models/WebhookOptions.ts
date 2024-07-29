/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type WebhookOptions = {
    /**
     * The way this webhook wants to receive the result.
     * - When `URL` is used an temporary URL will be provided to download the file (the file will be automatically deleted after 1 hour).
     * - When `base64` is used make sure your webhook can receive the size of the file!
     */
    receiveType?: WebhookOptions.receiveType;
    /**
     * The webhook's URL. Should include the scheme, e.g. `https://`
     */
    url: string;
    /**
     * Method to use when calling the webhook.
     */
    method?: WebhookOptions.method;
    /**
     * An object containing additional HTTP headers to be sent with the webhook. All header values must be strings.
     */
    headers?: Record<string, any> | null;
    /**
     * Additional metadata that will be inside the request when the webhook is called. All values must be strings. Max 1kB.
     */
    metadata?: Record<string, any> | null;
};
export namespace WebhookOptions {
    /**
     * The way this webhook wants to receive the result.
     * - When `URL` is used an temporary URL will be provided to download the file (the file will be automatically deleted after 1 hour).
     * - When `base64` is used make sure your webhook can receive the size of the file!
     */
    export enum receiveType {
        BASE64 = 'base64',
        URL = 'URL',
    }
    /**
     * Method to use when calling the webhook.
     */
    export enum method {
        POST = 'POST',
        PUT = 'PUT',
    }
}

