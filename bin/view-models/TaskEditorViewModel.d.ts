import { App } from "web-atoms-core/bin/App";
import { NavigationService } from "web-atoms-core/bin/services/NavigationService";
import { AtomWindowViewModel } from "web-atoms-core/bin/view-model/AtomWindowViewModel";
import { Task } from "../models/task";
import { IUser } from "../models/user";
export declare class TaskEditorViewModel extends AtomWindowViewModel {
    private windowService;
    task: Task;
    user: IUser;
    readonly errorLabel: string;
    readonly errorStatus: string;
    constructor(app: App, windowService: NavigationService);
    save(): Promise<any>;
    assign(): Promise<any>;
}
