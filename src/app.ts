import { Atom } from "web-atoms-core/bin/Atom";
import { ServiceProvider } from "web-atoms-core/bin/di";
import { WindowService } from "web-atoms-core/bin/services/WindowService";
import { WebApp } from "web-atoms-core/bin/WebApp";
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

        const windowService = this.resolve(WindowService);

        windowService.register("NewTaskWindow", NewTaskWindow);
        windowService.register("LoginView", LoginView);
        windowService.register("TaskListView", TaskListView);
        windowService.register("UserSelector", UserSelector);

        const appFrame = new AppFrame();
        appFrame.serviceProvider = this;
        const vm = app.get(AppFrameViewModel);

        appFrame.viewModel = vm;

        document.body.appendChild(appFrame.element);
    }
}

const app = new SampleApp();
