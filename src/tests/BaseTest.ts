import { MockNavigationService } from "web-atoms-core/bin/services/MockNavigationService";
import { NavigationService } from "web-atoms-core/bin/services/NavigationService";
import { TestItem } from "web-atoms-core/bin/unit/base-test";
import { TestApp } from "./TestApp";

export class BaseTest extends TestItem {

    constructor(
        protected readonly app: TestApp = new TestApp(),
        protected readonly navigationService: MockNavigationService = app.get(NavigationService as any)
    ) {
        super();
    }

    public async dispose(): Promise<any> {
        this.navigationService.assert();
    }

}
