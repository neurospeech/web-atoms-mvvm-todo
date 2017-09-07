declare class Task {
    label: string;
    finished: boolean;
}
declare class TaskListViewModel extends WebAtoms.AtomViewModel {
    list: WebAtoms.AtomList<Task>;
    newTask: Task;
    constructor();
    addTask(): void;
}
