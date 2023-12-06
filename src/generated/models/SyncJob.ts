/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SyncJob = {
    /**
     * Id of the queued job.
     */
    id: string;
    /**
     * Status of the job.
     */
    status: SyncJob.status;
    /**
     * URL to the generated file (will be null if `storage.signedUrl` is used). This url is valid for 1 hour, after that the file will be deleted from our storage.
     */
    fileUrl?: string | null;
    /**
     * Status of the signed url request if provided.
     * - `NOT_PROVIDED`, no `storage.preSignedUrl` was provided.
     * - `UPLOADED`, `storage.preSignedUrl` was provided and file is uploaded.
     * - `FAILED`, `storage.preSignedUrl` was provided but the upload failed.
     */
    signedUrlStatus?: string | null;
};

export namespace SyncJob {

    /**
     * Status of the job.
     */
    export enum status {
        PENDING = 'PENDING',
        RUNNING = 'RUNNING',
        FAILED = 'FAILED',
        COMPLETED = 'COMPLETED',
    }


}

