import { RegisterSingleton, ServiceProvider } from "web-atoms-core/bin/di";
import { BaseService, Get } from "web-atoms-core/bin/services/RestService";
import { SampleApp } from "../app";
import { IConfigItem } from "../models/task-status";

@RegisterSingleton
export class ConfigService extends BaseService {

    @Get("/config/status")
    public async getStatusList(): Promise<IConfigItem[]> {
        return null;
    }

}
