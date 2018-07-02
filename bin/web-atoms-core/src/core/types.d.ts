import "reflect-metadata";
export interface INativeComponent {
}
export interface INotifyPropertyChanging {
    onPropertyChanging(name: string, newValue: any, oldValue: any): void;
}
export interface INotifyPropertyChanged {
    onPropertyChanged(name: string): void;
}
export interface IClassOf<T> {
    new (...v: any[]): T;
}
export declare type IAtomElement = HTMLElement | INativeComponent;
export declare type PathList = string[];
export interface INameValuePairs {
    [key: string]: any;
}
export interface INameValues {
    [key: string]: (string | number | boolean);
}
export interface IDisposable {
    dispose(): void;
}
export interface IRect {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
}
export declare class AtomDisposable implements IDisposable {
    private f;
    /**
     *
     */
    constructor(f: Function);
    dispose(): void;
}
/**
 *
 *
 * @export
 * @class CancelToken
 */
export declare class CancelToken {
    private listeners;
    private mCancelled;
    readonly cancelled: boolean;
    cancel(): void;
    reset(): void;
    registerForCancel(f: () => void): void;
}
export declare class ArrayHelper {
    static remove<T>(a: T[], filter: (item: T) => boolean): boolean;
}
