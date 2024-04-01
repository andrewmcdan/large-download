declare module "large-download" {
    export interface HTTPOptions {
        retries?: number;
        // Include other 'got' package options as needed
    }

    export interface LargeDownloadOptions {
        link: string;
        destination: string;
        timeout?: number;
        retries?: number;
        httpOptions?: HTTPOptions;
        onRetry?: (error: Error) => void;
        onData?: (downloadedSize: number, declaredSize: string) => void;
        minSizeToShowProgress?: number;
    }

    export class LargeDownload {
        constructor(opts: LargeDownloadOptions);
        load(): Promise<void>;
    }
}
