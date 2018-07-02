import { Scope } from "./ServiceCollection";
export interface IServiceDef {
    id?: string;
    scope: Scope;
    for?: any;
}
export declare function Register(def: IServiceDef): ((t: any) => void);
export declare function Register(id: string, scope: Scope): ((t: any) => void);
