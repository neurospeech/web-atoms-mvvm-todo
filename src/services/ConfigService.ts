import DISingleton from "web-atoms-core/dist/di/DISingleton";
import { RegisterSingleton } from "web-atoms-core/dist/di/RegisterSingleton";
import { BaseService, Get } from "web-atoms-core/dist/services/http/RestService";
import { IConfigItem } from "../models/task-status";

@DISingleton({ mock: "./mocks/MockConfigService" })
export class ConfigService extends BaseService {

    @Get("/config/status")
    public async getStatusList(): Promise<IConfigItem[]> {
        return null;
    }

}
