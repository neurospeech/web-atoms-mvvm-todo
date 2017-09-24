namespace Todo {


    export class TaskListViewModel extends WebAtoms.AtomViewModel {

        @bindableProperty
        list:WebAtoms.AtomList<Task> = new WebAtoms.AtomList<Task>();

        taskService = Todo.TaskListService.instance;
        windowService = WebAtoms.DI.resolve(WebAtoms.WindowService);

        async init():Promise<any> {
            var r:Task[] = await this.taskService.retrive();
            this.list.addAll(r);
        }


        async deleteTask(task:Task):Promise<any> {
            await this.taskService.deleteTask(task.id);
            this.list.remove(task);
        }

        async addTask():Promise<any> {

            try {

                var task:Task = await this.windowService.openWindow<Task>(Todo.NewTaskWindow, new NewTaskViewWindowViewModel() );
                task = await this.taskService.create(task);
                this.list.add(task);

            }catch(e) {
                console.error(e);
                this.windowService.alert(e);
            }

        }
    }
}