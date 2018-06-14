import {App} from "web-atoms-core/bin/App";
import { Atom } from "web-atoms-core/bin/Atom";
import { ServiceProvider } from "web-atoms-core/bin/di";
import { WindowService } from "web-atoms-core/bin/services/WindowService";
import { AppFrameViewModel } from "./view-models/AppFrameViewModel";
import { AppFrame } from "./views/AppFrame";
import { LoginView } from "./views/LoginView";
import { NewTaskWindow } from "./views/NewTaskWindow";
import { TaskListView } from "./views/TaskListView";
import { UserSelector } from "./views/UserSelector";

export class SampleApp extends App {

    public main(): void {

        Atom.designMode = true;

        const windowService = ServiceProvider.global.get(WindowService);

        windowService.register("NewTaskWindow", NewTaskWindow);
        windowService.register("LoginView", LoginView);
        windowService.register("TaskListView", TaskListView);
        windowService.register("UserSelector", UserSelector);

        const appFrame = ServiceProvider.global.get(AppFrame);
        const vm = ServiceProvider.global.get(AppFrameViewModel);

        appFrame.viewModel = vm;

        document.body.appendChild(appFrame.element);
    }
}

const app = new SampleApp();
