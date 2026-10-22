export class RuntimeException {
    constructor(message: any);
    _message: any;
    get name(): string;
    get message(): any;
    toString(): string;
}
export class IllegalStateException extends RuntimeException {
}
export class InvalidArgumentException extends RuntimeException {
}
export class NotImplementedException extends RuntimeException {
}
