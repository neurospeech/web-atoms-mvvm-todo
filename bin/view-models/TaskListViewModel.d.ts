import { App } from "web-atoms-core/bin/App";
import { AtomList } from "web-atoms-core/bin/core/AtomList";
import { NavigationService } from "web-atoms-core/bin/services/NavigationService";
import { AtomViewModel } from "web-atoms-core/bin/view-model/AtomViewModel";
import { Task } from "../models/task";
import { TaskListService } from "../services/TaskListService";
export declare class TaskListViewModel extends AtomViewModel {
    private windowService;
    private taskService;
    list: AtomList<Task>;
    selectedTask: Task;
    constructor(app: App, windowService: NavigationService, taskService: TaskListService);
    init(): Promise<any>;
    deleteTask(task: Task): Promise<any>;
    addTask(): Promise<any>;
}
