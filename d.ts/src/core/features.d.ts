export default Features;
declare class Features {
    static supportMSEH264Playback(): boolean;
    static supportMSEH265Playback(): boolean;
    static supportWorkerForMSEH265Playback(): Promise<any>;
    static supportNetworkStreamIO(): boolean;
    static getNetworkLoaderTypeName(): any;
    static supportNativeMediaPlayback(mimeType: any): boolean;
    static getFeatureList(): {
        msePlayback: boolean;
        mseLivePlayback: boolean;
        mseH265Playback: boolean;
        networkStreamIO: boolean;
        networkLoaderName: string;
        nativeMP4H264Playback: boolean;
        nativeMP4H265Playback: boolean;
        nativeWebmVP8Playback: boolean;
        nativeWebmVP9Playback: boolean;
    };
}
