namespace Todo{


    export class Task{
        
        label:string = "";

        description:string;

        status: string = "";
    }

    export class TaskListViewModel extends WebAtoms.AtomViewModel{
        @bindableProperty
        list:WebAtoms.AtomList<Task>

        @bindableProperty
        newTask:Task

        constructor(){
            super()
            this.list = new WebAtoms.AtomList();

            var sample = new Task();
            sample.label = "Sample task 1";
            this.list.add(sample);
            this.newTask = new Task();
        }


        deleteTask(task:Task){

            var windowService = WebAtoms.DI.resolve(WindowService);

            this.list.remove(task);
        }

        async addTask(){

            var windowService = WebAtoms.DI.resolve(WindowService);

            try{

                var task:Task = await windowService.openWindow<Task>(Todo.NewTaskWindow, new NewTaskViewWindowViewModel() );
                this.list.add(task);

            }catch(e){
                console.error(e);
                windowService.alert(e);
            }

        }
    }
}