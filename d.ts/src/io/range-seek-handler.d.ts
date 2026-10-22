export default RangeSeekHandler;
declare class RangeSeekHandler {
    constructor(zeroStart: any);
    _zeroStart: any;
    getConfig(url: any, range: any): {
        url: any;
        headers: {
            Range: string;
        };
    };
    removeURLParameters(seekedURL: any): any;
}
