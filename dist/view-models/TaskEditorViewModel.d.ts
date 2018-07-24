import { App } from "web-atoms-core/dist/App";
import { NavigationService } from "web-atoms-core/dist/services/NavigationService";
import { AtomWindowViewModel } from "web-atoms-core/dist/view-model/AtomWindowViewModel";
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
