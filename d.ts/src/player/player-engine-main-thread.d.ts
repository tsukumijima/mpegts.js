import type PlayerEngine from './player-engine';
import MediaInfo from '../core/media-info';
declare class PlayerEngineMainThread implements PlayerEngine {
    private readonly TAG;
    private _emitter;
    private _media_data_source;
    private _config;
    private _media_element?;
    private _mse_controller?;
    private _transmuxer?;
    private _pending_seek_time?;
    private _seeking_handler?;
    private _loading_controller?;
    private _startup_stall_jumper?;
    private _live_latency_chaser?;
    private _live_latency_synchronizer?;
    private _mse_source_opened;
    private _has_pending_load;
    private _loaded_metadata_received;
    private _media_info?;
    private _statistics_info?;
    private e?;
    constructor(mediaDataSource: any, config: any);
    destroy(): void;
    on(event: string, listener: (...args: any[]) => void): void;
    off(event: string, listener: (...args: any[]) => void): void;
    attachMediaElement(mediaElement: HTMLMediaElement): void;
    detachMediaElement(): void;
    load(): void;
    unload(): void;
    play(): Promise<void>;
    pause(): void;
    seek(seconds: number): void;
    switchPrimaryAudio(): void;
    switchSecondaryAudio(): void;
    get mediaInfo(): MediaInfo;
    get statisticsInfo(): any;
    private _onMSESourceOpen;
    private _onMSEUpdateEnd;
    private _onMSEBufferFull;
    private _onMSEError;
    private _onMSEStartStreaming;
    private _onMSEEndStreaming;
    private _onMediaLoadedMetadata;
    private _onRequestDirectSeek;
    private _onRequiredUnbufferedSeek;
    private _onRequestPauseTransmuxer;
    private _onRequestResumeTransmuxer;
    private _fillStatisticsInfo;
}
export default PlayerEngineMainThread;
