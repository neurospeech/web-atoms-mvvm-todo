import { ServiceProvider } from "./ServiceProvider";
export declare type ServiceFactory = (sp: ServiceProvider) => any;
export declare enum Scope {
    Global = 1,
    Scoped = 2,
    Transient = 3
}
export declare class ServiceDescription {
    id: string;
    scope: Scope;
    type: any;
    factory: ServiceFactory;
    constructor(id: string, scope: Scope, type: any, factory: ServiceFactory);
}
export declare class ServiceCollection {
    static instance: ServiceCollection;
    private registrations;
    private ids;
    register(type: any, factory: ServiceFactory, scope?: Scope, id?: string): ServiceDescription;
    registerScoped(type: any, factory?: ServiceFactory, id?: string): ServiceDescription;
    registerSingleton(type: any, factory?: ServiceFactory, id?: string): ServiceDescription;
    get(type: any): ServiceDescription;
}
