namespace Todo {

	@DIGlobal
	export class ConfigService extends WebAtoms.Rest.BaseService {

		static get instance(): ConfigService{
			return WebAtoms.DI.resolve(ConfigService);
		}

		@Get("/config/status")
        async getStatusList():Promise<ConfigItem[]> {
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

}