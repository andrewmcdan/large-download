export interface HTTPOptions {
    retries?: number;
    // Additional properties from 'got' can be added here as needed.
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
