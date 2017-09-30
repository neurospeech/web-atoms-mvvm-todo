namespace Todo {


    export class TaskListViewModel extends WebAtoms.AtomViewModel {

        @bindableProperty
        list:WebAtoms.AtomList<Task> = new WebAtoms.AtomList<Task>();

        taskService = Todo.TaskListService.instance;
        windowService = WebAtoms.DI.resolve(WebAtoms.WindowService);

        @bindableProperty
        selectedTask: Task;

        async init():Promise<any> {
            var r:Task[] = await this.taskService.retrive();
            this.list.addAll(r);

            this.selectedTask = this.list[0];
        }

        @watch
        onSelectedTaskChanged(): void {
            this.broadcast("selected-task-changed",this.selectedTask);
        }

        async deleteTask(task:Task):Promise<any> {
            await this.taskService.deleteTask(task.id);
            this.list.remove(task);
        }

        async addTask():Promise<any> {

            try {

                var task:Task = await this.windowService.openWindow<Task>(Todo.NewTaskWindow, new TaskEditorViewModel() );
                task = await this.taskService.create(task);
                this.list.add(task);

                this.selectedTask = task;

            }catch(e) {
                console.error(e);
                this.windowService.alert(e);
            }

        }
    }
}