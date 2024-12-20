/*
 * Copyright (C) 2016 Bilibili. All Rights Reserved.
 *
 * @author zheng qian <xqq@xqq.im>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import IOController from '../io/io-controller.js';
import {createDefaultConfig} from '../config.js';
import PlayerEngineDedicatedThread from '../player/player-engine-dedicated-thread';

class Features {

    static supportMSEH264Playback() {
        const avc_aac_mime_type = 'video/mp4; codecs="avc1.42E01E,mp4a.40.2"';
        const support_w3c_mse = self.MediaSource && self.MediaSource.isTypeSupported(avc_aac_mime_type);
        const support_apple_mme = self.ManagedMediaSource && self.ManagedMediaSource.isTypeSupported(avc_aac_mime_type);
        return support_w3c_mse === true|| support_apple_mme === true;
    }

    static supportMSEH265Playback() {
        const hevc_mime_type = 'video/mp4; codecs="hvc1.1.6.L93.B0"';
        const support_w3c_mse = self.MediaSource && self.MediaSource.isTypeSupported(hevc_mime_type);
        const support_apple_mme = self.ManagedMediaSource && self.ManagedMediaSource.isTypeSupported(hevc_mime_type);
        return support_w3c_mse === true || support_apple_mme === true;
    }

    static supportWorkerForMSEH265Playback() {
        return new Promise((resolve) => {
            if (!PlayerEngineDedicatedThread.isSupported()) {
                resolve(false);
                return;
            }
            const blobUrl = URL.createObjectURL(new Blob([`
                const hevc_mime_type = 'video/mp4; codecs="hvc1.1.6.L93.B0"';
                const support_w3c_mse = self.MediaSource && self.MediaSource.isTypeSupported(hevc_mime_type);
                const support_apple_mme = self.ManagedMediaSource && self.ManagedMediaSource.isTypeSupported(hevc_mime_type);
                self.postMessage(support_w3c_mse === true || support_apple_mme === true);
            `], { type: 'application/javascript' }));
            const worker = new Worker(blobUrl);
            worker.addEventListener('message', (e) => resolve(e.data));
            URL.revokeObjectURL(blobUrl);
        });
    }

    static supportNetworkStreamIO() {
        let ioctl = new IOController({}, createDefaultConfig());
        let loaderType = ioctl.loaderType;
        ioctl.destroy();
        return loaderType == 'fetch-stream-loader' || loaderType == 'xhr-moz-chunked-loader';
    }

    static getNetworkLoaderTypeName() {
        let ioctl = new IOController({}, createDefaultConfig());
        let loaderType = ioctl.loaderType;
        ioctl.destroy();
        return loaderType;
    }

    static supportNativeMediaPlayback(mimeType) {
        if (Features.videoElement == undefined) {
            Features.videoElement = window.document.createElement('video');
        }
        let canPlay = Features.videoElement.canPlayType(mimeType);
        return canPlay === 'probably' || canPlay == 'maybe';
    }

    static getFeatureList() {
        let features = {
            msePlayback: false,
            mseLivePlayback: false,
            mseH265Playback: false,
            networkStreamIO: false,
            networkLoaderName: '',
            nativeMP4H264Playback: false,
            nativeMP4H265Playback: false,
            nativeWebmVP8Playback: false,
            nativeWebmVP9Playback: false
        };

        features.msePlayback = Features.supportMSEH264Playback();
        features.networkStreamIO = Features.supportNetworkStreamIO();
        features.networkLoaderName = Features.getNetworkLoaderTypeName();
        features.mseLivePlayback = features.msePlayback && features.networkStreamIO;
        features.mseH265Playback = Features.supportMSEH265Playback();
        features.nativeMP4H264Playback = Features.supportNativeMediaPlayback('video/mp4; codecs="avc1.42001E, mp4a.40.2"');
        features.nativeMP4H265Playback = Features.supportNativeMediaPlayback('video/mp4; codecs="hvc1.1.6.L93.B0"');
        features.nativeWebmVP8Playback = Features.supportNativeMediaPlayback('video/webm; codecs="vp8.0, vorbis"');
        features.nativeWebmVP9Playback = Features.supportNativeMediaPlayback('video/webm; codecs="vp9"');

        return features;
    }

}

export default Features;