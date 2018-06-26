import { IConfigItem } from "../models/task-status";
import { ConfigService } from "./ConfigService";

export class MockConfigService extends ConfigService {

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
