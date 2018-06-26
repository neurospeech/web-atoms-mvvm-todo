import { App } from "web-atoms-core/bin/App";
import { AtomWindowViewModel } from "web-atoms-core/bin/view-model/AtomWindowViewModel";
import { IUser } from "../models/user";
import { TaskListService } from "../services/TaskListService";
export declare class UserSelectorViewModel extends AtomWindowViewModel {
    private taskListService;
    items: IUser[];
    searchText: string;
    constructor(app: App, taskListService: TaskListService);
    init(): Promise<any>;
    searchUser(): Promise<any>;
    select(user: IUser): void;
}
