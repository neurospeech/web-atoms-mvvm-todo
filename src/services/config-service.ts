import { BaseService, Get } from "web-atoms-core/bin/services/RestService";
import { IConfigItem } from "../models/task-status";

export class ConfigService extends BaseService {

    @Get("/config/status")
    async getStatusList():Promise<IConfigItem[]> {
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

