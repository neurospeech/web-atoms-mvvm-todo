import { WindowService } from "web-atoms-core/bin/services/WindowService";
import { AtomWindowViewModel } from "web-atoms-core/bin/view-model/AtomWindowViewModel";
import { Task } from "../models/task";
import { IUser } from "../models/user";
export declare class TaskEditorViewModel extends AtomWindowViewModel {
    private windowService;
    task: Task;
    user: IUser;
    readonly errorLabel: string;
    readonly errorStatus: string;
    constructor(windowService: WindowService);
    save(): Promise<any>;
    assign(): Promise<any>;
}
