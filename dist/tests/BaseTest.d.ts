import { MockNavigationService } from "web-atoms-core/dist/services/MockNavigationService";
import { TestItem } from "web-atoms-core/dist/unit/TestItem";
import { TestApp } from "./TestApp";
export declare class BaseTest extends TestItem {
    protected readonly app: TestApp;
    protected readonly navigationService: MockNavigationService;
    constructor(app?: TestApp, navigationService?: MockNavigationService);
    dispose(): Promise<any>;
}
