export class SampleInfo {
    constructor(dts: any, pts: any, duration: any, originalDts: any, isSync: any);
    dts: any;
    pts: any;
    duration: any;
    originalDts: any;
    isSyncPoint: any;
    fileposition: any;
}
export class MediaSegmentInfo {
    beginDts: number;
    endDts: number;
    beginPts: number;
    endPts: number;
    originalBeginDts: number;
    originalEndDts: number;
    syncPoints: any[];
    firstSample: any;
    lastSample: any;
    appendSyncPoint(sampleInfo: any): void;
}
export class IDRSampleList {
    _list: any[];
    clear(): void;
    appendArray(syncPoints: any): void;
    getLastSyncPointBeforeDts(dts: any): any;
}
export class MediaSegmentInfoList {
    constructor(type: any);
    _type: any;
    _list: any[];
    _lastAppendLocation: number;
    get type(): any;
    get length(): number;
    isEmpty(): boolean;
    clear(): void;
    _searchNearestSegmentBefore(originalBeginDts: any): number;
    _searchNearestSegmentAfter(originalBeginDts: any): number;
    append(mediaSegmentInfo: any): void;
    getLastSegmentBefore(originalBeginDts: any): any;
    getLastSampleBefore(originalBeginDts: any): any;
    getLastSyncPointBefore(originalBeginDts: any): any;
}
