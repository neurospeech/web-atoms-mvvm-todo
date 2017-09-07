class Task{
    label:string = ""
    finished: boolean
}

class TaskListViewModel extends WebAtoms.AtomViewModel{
    @bindableProperty
    list:WebAtoms.AtomList<Task>

    @bindableProperty
    newTask:Task

    constructor(){
        super()
        this.list = new WebAtoms.AtomList();
        this.newTask = new Task();
    }

    addTask(){

        if(!this.newTask.label){
            WebAtoms.DI.resolve(WindowService)
                .alert("Task cannot be empty");
            return;
        }

        this.list.add(this.newTask);
        this.newTask = new Task();
    }

    deleteTask(task:Task){

        var windowService = WebAtoms.DI.resolve(WindowService);

        this.list.remove(task);
    }

    async openSettings(){

        var windowService = WebAtoms.DI.resolve(WindowService);

        try{
            if(await windowService.confirm(`Are you sure you change settings?`)){
                await windowService.openWindow("SettingsWindow", new SettingsWindowViewModel() );
            }
        }catch(e){
            console.error(e);
            windowService.alert("Cancelled");
        }

    }
}