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
        this.list.add(this.newTask);
        this.newTask = new Task();
    }
}