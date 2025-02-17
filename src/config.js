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

export const defaultConfig = {
    enableWorker: false,
    enableWorkerForMSE: false,
    enableStashBuffer: true,
    stashInitialSize: undefined,

    isLive: false,

    liveBufferLatencyChasing: false,
    liveBufferLatencyChasingOnPaused: false,
    liveBufferLatencyMaxLatency: 1.5,
    liveBufferLatencyMinRemain: 0.5,

    liveSync: false,
    liveSyncMaxLatency: 1.2,
    liveSyncTargetLatency: 0.8,
    liveSyncPlaybackRate: 1.2,
    liveSyncMinLatency: undefined,
    liveSyncMinPlaybackRate: 0.95,

    lazyLoad: true,
    lazyLoadMaxDuration: 3 * 60,
    lazyLoadRecoverDuration: 30,
    deferLoadAfterSourceOpen: true,

    // autoCleanupSourceBuffer: default as false, leave unspecified
    autoCleanupMaxBackwardDuration: 3 * 60,
    autoCleanupMinBackwardDuration: 2 * 60,

    statisticsInfoReportInterval: 600,

    fixAudioTimestampGap: true,

    accurateSeek: false,
    seekType: 'range',  // [range, param, custom]
    seekParamStart: 'bstart',
    seekParamEnd: 'bend',
    rangeLoadZeroStart: false,
    customSeekHandler: undefined,
    reuseRedirectedURL: false,
    // referrerPolicy: leave as unspecified

    headers: undefined,
    customLoader: undefined
};

export function createDefaultConfig() {
    return Object.assign({}, defaultConfig);
}