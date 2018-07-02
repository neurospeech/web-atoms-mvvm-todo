export declare class InjectedTypes {
    static paramList: {
        [key: string]: Array<{
            new (): any;
        }>;
    };
}
export declare function Inject(target: any, name: string, index: number): void;
