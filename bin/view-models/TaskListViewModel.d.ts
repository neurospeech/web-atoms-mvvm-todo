import { AtomList } from "web-atoms-core/bin/core";
import { WindowService } from "web-atoms-core/bin/services/WindowService";
import { AtomViewModel } from "web-atoms-core/bin/view-model/AtomViewModel";
import { Task } from "../models/task";
import { TaskListService } from "../services/TaskListService";
export declare class TaskListViewModel extends AtomViewModel {
    private windowService;
    private taskService;
    list: AtomList<Task>;
    selectedTask: Task;
    constructor(windowService: WindowService, taskService: TaskListService);
    init(): Promise<any>;
    deleteTask(task: Task): Promise<any>;
    addTask(): Promise<any>;
}
