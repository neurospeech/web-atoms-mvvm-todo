import { Atom } from "web-atoms-core/bin/Atom";
import { NavigationService } from "web-atoms-core/bin/services/NavigationService";
import { AtomTheme } from "web-atoms-core/bin/web/styles/AtomTheme";
import { WebApp } from "web-atoms-core/bin/web/WebApp";
import { ConfigService } from "./services/ConfigService";
import { MockConfigService } from "./services/MockConfigService";
import { MockTaskListService } from "./services/MockTaskListService";
import { TaskListService } from "./services/TaskListService";
import { AppTheme } from "./web/styles/AppTheme";
import { AppFrame } from "./web/views/AppFrame";
import { LoginView } from "./web/views/LoginView";
import { NewTaskWindow } from "./web/views/NewTaskWindow";
import { TaskListView } from "./web/views/TaskListView";
import { UserSelector } from "./web/views/UserSelector";

export class SampleApp extends WebApp {

    public main(): void {

        Atom.designMode = true;

        const windowService = this.resolve(NavigationService);

        windowService.register("NewTaskWindow", NewTaskWindow);
        windowService.register("LoginView", LoginView);
        windowService.register("TaskListView", TaskListView);
        windowService.register("UserSelector", UserSelector);

        if (Atom.designMode) {
            this.put(ConfigService, new MockConfigService());
            this.put(TaskListService, new MockTaskListService());
        }

        this.theme = this.resolve(AppTheme);

        const appFrame = new AppFrame(this);

        document.body.appendChild(appFrame.element);
    }
}

const app = new SampleApp();
