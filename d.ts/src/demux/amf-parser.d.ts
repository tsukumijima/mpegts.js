export default AMF;
declare class AMF {
    static parseScriptData(arrayBuffer: any, dataOffset: any, dataSize: any): {};
    static parseObject(arrayBuffer: any, dataOffset: any, dataSize: any): {
        data: {
            name: string;
            value: any;
        };
        size: any;
        objectEnd: any;
    };
    static parseVariable(arrayBuffer: any, dataOffset: any, dataSize: any): {
        data: {
            name: string;
            value: any;
        };
        size: any;
        objectEnd: any;
    };
    static parseString(arrayBuffer: any, dataOffset: any, dataSize: any): {
        data: string;
        size: number;
    };
    static parseLongString(arrayBuffer: any, dataOffset: any, dataSize: any): {
        data: string;
        size: number;
    };
    static parseDate(arrayBuffer: any, dataOffset: any, dataSize: any): {
        data: Date;
        size: number;
    };
    static parseValue(arrayBuffer: any, dataOffset: any, dataSize: any): any;
}
