import { IClassOf, IDisposable } from "../core/types";
import { ServiceDescription } from "./ServiceCollection";
export declare class ServiceProvider implements IDisposable {
    parent: ServiceProvider;
    private instances;
    readonly global: ServiceProvider;
    protected constructor(parent: ServiceProvider);
    get<T>(key: IClassOf<T>): T;
    put(key: any, value: any): void;
    resolve(key: any, create?: boolean, defValue?: any): any;
    getValue(sd: ServiceDescription): any;
    newScope(): ServiceProvider;
    dispose(): void;
    private create;
}
