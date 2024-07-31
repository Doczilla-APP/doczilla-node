/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AsyncJob = {
    /**
     * Id of the queued job.
     */
    id: string;
    /**
     * Status of the job.
     */
    status: AsyncJob.status;
};
export namespace AsyncJob {
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

