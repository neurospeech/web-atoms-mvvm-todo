declare namespace Todo {
    class NewTaskViewModelWindow extends WebAtoms.AtomWindowViewModel {
        task: Task;
        save(): void;
    }
}
declare namespace Todo {
    class Task {
        label: string;
        description: string;
        status: string;
    }
    class TaskListViewModel extends WebAtoms.AtomViewModel {
        list: WebAtoms.AtomList<Task>;
        newTask: Task;
        constructor();
        deleteTask(task: Task): void;
        addTask(): Promise<void>;
    }
}
