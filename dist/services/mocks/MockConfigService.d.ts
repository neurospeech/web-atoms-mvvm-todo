import { IConfigItem } from "../../models/task-status";
import { ConfigService } from "../ConfigService";
export default class MockConfigService extends ConfigService {
    getStatusList(): Promise<IConfigItem[]>;
}
