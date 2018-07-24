import { BaseService } from "web-atoms-core/dist/services/http/RestService";
import { IConfigItem } from "../models/task-status";
export declare class ConfigService extends BaseService {
    getStatusList(): Promise<IConfigItem[]>;
}
