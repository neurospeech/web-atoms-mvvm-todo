import { App } from "web-atoms-core/bin/App";
import { AtomList, bindableProperty } from "web-atoms-core/bin/core";
import { Inject } from "web-atoms-core/bin/di/Inject";
import { NavigationService } from "web-atoms-core/bin/services/NavigationService";
import { AtomViewModel, bindableBroadcast } from "web-atoms-core/bin/view-model/AtomViewModel";
import { Channels } from "../channels";
import { Task } from "../models/task";
import { TaskListService } from "../services/TaskListService";
import { TaskEditorViewModel } from "./TaskEditorViewModel";

export class TaskListViewModel extends AtomViewModel {

    @bindableProperty
    public list: AtomList<Task> = new AtomList<Task>();

    @bindableBroadcast(Channels.SelectedTaskChanged)
    public selectedTask: Task;

    constructor(
        @Inject app: App,
        @Inject private windowService: NavigationService,
        @Inject private taskService: TaskListService
    ) {
        super(app);
    }

    public async init(): Promise<any> {
        const r = await this.taskService.retrive();
        this.list.addAll(r);

        this.selectedTask = this.list[0];
    }

    // // Use bindableBroadcast unless you need custom watch
    // @watch
    // onSelectedTaskChanged(): void {
    //     this.broadcast(Channels.SelectedTaskChanged,this.selectedTask);
    // }

    public async deleteTask(task: Task): Promise<any> {
        await this.taskService.deleteTask(task.id);
        this.list.remove(task);

        this.selectedTask = this.list[0];
    }

    public async addTask(): Promise<any> {

        try {

            let task = await this.windowService.openPage<Task>("NewTaskWindow",
                this.services.get(TaskEditorViewModel) );
            task = await this.taskService.create(task);
            this.list.add(task);

            this.selectedTask = task;

        } catch (e) {
            // tslint:disable-next-line:no-console
            console.error(e);
            this.windowService.alert(e);
        }

    }
}
