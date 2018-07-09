import { Atom } from "web-atoms-core/bin/Atom";
import { JsonService } from "web-atoms-core/bin/services/JsonService";
import { WebApp } from "web-atoms-core/bin/web/WebApp";
import { ConfigService } from "./services/ConfigService";
import { MockConfigService } from "./services/MockConfigService";
import { MockTaskListService } from "./services/MockTaskListService";
import { TaskListService } from "./services/TaskListService";
import { AppTheme } from "./web/styles/AppTheme";
import AppFrame from "./web/views/AppFrame";

export class SampleApp extends WebApp {

    public main(): void {

        Atom.designMode = true;

        if (Atom.designMode) {
            this.put(ConfigService, new MockConfigService(this.resolve(JsonService)));
            this.put(TaskListService, new MockTaskListService(this.resolve(JsonService)));
        }

        this.theme = this.resolve(AppTheme);

        const appFrame = new AppFrame(this);

        document.body.appendChild(appFrame.element);
    }
}

const app = new SampleApp();
