export default ExpGolomb;
declare class ExpGolomb {
    constructor(uint8array: any);
    TAG: string;
    _buffer: any;
    _buffer_index: number;
    _total_bytes: any;
    _total_bits: number;
    _current_word: number;
    _current_word_bits_left: number;
    destroy(): void;
    _fillCurrentWord(): void;
    readBits(bits: any): number;
    readBool(): boolean;
    readByte(): number;
    _skipLeadingZero(): any;
    readUEG(): number;
    readSEG(): number;
}
