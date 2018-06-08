import { BaseService } from "web-atoms-core/bin/services/RestService";
import { IConfigItem } from "../models/task-status";
export declare class ConfigService extends BaseService {
    static readonly instance: ConfigService;
    getStatusList(): Promise<IConfigItem[]>;
}
