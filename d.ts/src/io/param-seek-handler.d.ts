export default ParamSeekHandler;
declare class ParamSeekHandler {
    constructor(paramStart: any, paramEnd: any);
    _startName: any;
    _endName: any;
    getConfig(baseUrl: any, range: any): {
        url: any;
        headers: {};
    };
    removeURLParameters(seekedURL: any): any;
}
