import { Atom } from "web-atoms-core/bin/Atom";
import { NavigationService } from "web-atoms-core/bin/services/NavigationService";
import { WebApp } from "web-atoms-core/bin/web/WebApp";
import { ConfigService } from "./services/ConfigService";
import { MockConfigService } from "./services/MockConfigService";
import { MockTaskListService } from "./services/MockTaskListService";
import { TaskListService } from "./services/TaskListService";
import { AppFrameViewModel } from "./view-models/AppFrameViewModel";
import { AppFrame } from "./views/AppFrame";
import { LoginView } from "./views/LoginView";
import { NewTaskWindow } from "./views/NewTaskWindow";
import { TaskListView } from "./views/TaskListView";
import { UserSelector } from "./views/UserSelector";

export class SampleApp extends WebApp {

    public static current: SampleApp = null;

    public main(): void {

        SampleApp.current = this;

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

        const appFrame = new AppFrame(this);

        document.body.appendChild(appFrame.element);
    }
}

const app = new SampleApp();
