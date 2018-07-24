import { MockNavigationService } from "web-atoms-core/dist/services/MockNavigationService";
import { NavigationService } from "web-atoms-core/dist/services/NavigationService";
import { TestItem } from "web-atoms-core/dist/unit/TestItem";
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
