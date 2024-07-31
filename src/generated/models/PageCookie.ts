/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type PageCookie = {
    /**
     * Cookie name.
     */
    name: string;
    /**
     * Cookie value.
     */
    value: string;
    /**
     * Cookie domain.
     */
    domain: string;
    /**
     * The request-URI to associate with the setting of the cookie. This value can affect the default domain, path, source port, and source scheme values of the created cookie. Should include the scheme, e.g. `https://`
     */
    url?: string | null;
    /**
     * Cookie path.
     */
    path?: string | null;
    /**
     * `true` if cookie is secure.
     */
    secure?: boolean | null;
    /**
     * `true` if cookie is http-only.
     */
    httpOnly?: boolean | null;
    /**
     * Cookie SameSite type.
     */
    sameSite?: PageCookie.sameSite | null;
    /**
     * Cookie expiration date (UTC time in seconds, counted from January 1, 1970.), session cookie if not set.
     */
    expires?: number | null;
};
export namespace PageCookie {
    /**
     * Cookie SameSite type.
     */
    export enum sameSite {
        STRICT = 'Strict',
        LAX = 'Lax',
        NONE = 'None',
    }
}

