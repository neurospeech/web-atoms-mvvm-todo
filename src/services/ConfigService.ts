import { RegisterSingleton } from "web-atoms-core/dist/di/RegisterSingleton";
import { BaseService, Get } from "web-atoms-core/dist/services/http/RestService";
import { SampleApp } from "../app";
import { IConfigItem } from "../models/task-status";

@RegisterSingleton
export class ConfigService extends BaseService {

    @Get("/config/status")
    public async getStatusList(): Promise<IConfigItem[]> {
        return null;
    }

}
