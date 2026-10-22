export default mpegts;
declare namespace mpegts {
    export { createPlayer };
    export { isSupported };
    export { getFeatureList };
    export { supportWorkerForMSEH265Playback };
    export { BaseLoader };
    export { LoaderStatus };
    export { LoaderErrors };
    export { PlayerEvents as Events };
    export { ErrorTypes };
    export { ErrorDetails };
    export { MSEPlayer };
    export { NativePlayer };
    export { LoggingControl };
    export const version: any;
}
/** @returns {MSEPlayer | NativePlayer} */
declare function createPlayer(mediaDataSource: any, optionalConfig: any): MSEPlayer | NativePlayer;
declare function isSupported(): boolean;
declare function getFeatureList(): {
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
declare function supportWorkerForMSEH265Playback(): Promise<any>;
import { BaseLoader } from './io/loader.js';
import { LoaderStatus } from './io/loader.js';
import { LoaderErrors } from './io/loader.js';
import PlayerEvents from './player/player-events';
import { ErrorTypes } from './player/player-errors.js';
import { ErrorDetails } from './player/player-errors.js';
import MSEPlayer from './player/mse-player';
import NativePlayer from './player/native-player.js';
import LoggingControl from './utils/logging-control.js';
