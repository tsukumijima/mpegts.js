export namespace LoaderStatus {
    let kIdle: number;
    let kConnecting: number;
    let kBuffering: number;
    let kError: number;
    let kComplete: number;
}
export namespace LoaderErrors {
    let OK: string;
    let EXCEPTION: string;
    let HTTP_STATUS_CODE_INVALID: string;
    let CONNECTING_TIMEOUT: string;
    let EARLY_EOF: string;
    let UNRECOVERABLE_EARLY_EOF: string;
}
export class BaseLoader {
    constructor(typeName: any);
    _type: any;
    _status: number;
    _needStash: boolean;
    _onContentLengthKnown: any;
    _onURLRedirect: any;
    _onDataArrival: any;
    _onError: any;
    _onComplete: any;
    destroy(): void;
    isWorking(): boolean;
    get type(): any;
    get status(): number;
    get needStashBuffer(): boolean;
    set onContentLengthKnown(callback: any);
    get onContentLengthKnown(): any;
    set onURLRedirect(callback: any);
    get onURLRedirect(): any;
    set onDataArrival(callback: any);
    get onDataArrival(): any;
    set onError(callback: any);
    get onError(): any;
    set onComplete(callback: any);
    get onComplete(): any;
    open(dataSource: any, range: any): void;
    abort(): void;
}
