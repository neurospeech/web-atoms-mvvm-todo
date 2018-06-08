import { WindowService } from "web-atoms-core/bin/services/WindowService";
import { AtomErrors } from "web-atoms-core/bin/view-model/AtomViewModel";
import { AtomWindowViewModel } from "web-atoms-core/bin/view-model/AtomWindowViewModel";
import { Task } from "../models/task";
import { IUser } from "../models/user";
export declare class TaskEditorErrors extends AtomErrors {
    label: string;
    status: string;
    description: string;
}
export declare class TaskEditorViewModel extends AtomWindowViewModel {
    private windowService;
    errors: TaskEditorErrors;
    task: Task;
    user: IUser;
    constructor(windowService: WindowService);
    save(): Promise<any>;
    assign(): Promise<any>;
}
