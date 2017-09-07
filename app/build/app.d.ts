declare class SettingsWindowViewModel extends WebAtoms.AtomWindowViewModel {
    save(): void;
}
declare class Task {
    label: string;
    finished: boolean;
}
declare class TaskListViewModel extends WebAtoms.AtomViewModel {
    list: WebAtoms.AtomList<Task>;
    newTask: Task;
    constructor();
    addTask(): void;
    deleteTask(task: Task): void;
    openSettings(): Promise<void>;
}
