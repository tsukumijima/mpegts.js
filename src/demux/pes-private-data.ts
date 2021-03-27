// ISO/IEC 13818-1 PES packets containing private data (stream_type=0x06)
export class PESPrivateData {
    pid: number;
    stream_id: number;
    pts: number;
    dts: number;
    data: Uint8Array;
    len: number;
}