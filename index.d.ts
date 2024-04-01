interface HTTPOptions {
    retries?: number;
    // Additional properties from 'got' can be added here as needed.
}

interface LargeDownloadOptions {
    link: string;
    destination: string;
    timeout?: number;
    retries?: number;
    httpOptions?: HTTPOptions;
    onRetry?: (error: Error) => void;
    onData?: (downloadedSize: number, declaredSize: string) => void;
    minSizeToShowProgress?: number;
}

class LargeDownload {
    constructor(opts: LargeDownloadOptions);
    load(): Promise<void>;
}

declare module 'large-download' {
    export { LargeDownload, LargeDownloadOptions, HTTPOptions };
}