import { RegisterSingleton, ServiceProvider } from "web-atoms-core/bin/di";
import { BaseService, Get } from "web-atoms-core/bin/services/RestService";
import { IConfigItem } from "../models/task-status";

@RegisterSingleton
export class ConfigService extends BaseService {

    public static get instance(): ConfigService {
        return ServiceProvider.global.get(ConfigService);
    }

    @Get("/config/status")
    public async getStatusList(): Promise<IConfigItem[]> {
        return [
            {
                label: "Select", value: ""
            },
            {
                label: "Open", value: "open"
            },
            {
                label: "Closed", value: "closed"
            }
        ];
    }

}
