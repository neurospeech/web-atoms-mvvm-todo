import { IConfigItem } from "../models/task-status";
import { ConfigService } from "./ConfigService";
export declare class MockConfigService extends ConfigService {
    getStatusList(): Promise<IConfigItem[]>;
}
