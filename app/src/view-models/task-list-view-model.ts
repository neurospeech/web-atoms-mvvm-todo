namespace Todo{


    export class Task{

        id: number = 0;
        
        label:string = "";

        description:string;

        status: string = "";
    }

    export class TaskListViewModel extends WebAtoms.AtomViewModel{

        @bindableProperty
        list:WebAtoms.AtomList<Task> = new WebAtoms.AtomList<Task>();

        taskService = WebAtoms.DI.resolve(Todo.TaskListService);

        async init():Promise<any>{
            var r = await this.taskService.retrive();
            this.list.addAll(r);
        }


        async deleteTask(task:Task){
            await this.taskService.deleteTask(task.id);
            this.list.remove(task);
        }

        async addTask(){

            var windowService = WebAtoms.DI.resolve(WindowService);

            try{

                var task:Task = await windowService.openWindow<Task>(Todo.NewTaskWindow, new NewTaskViewWindowViewModel() );
                task = await this.taskService.create(task);
                this.list.add(task);

            }catch(e){
                console.error(e);
                windowService.alert(e);
            }

        }
    }
}