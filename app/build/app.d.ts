declare namespace Todo {
    class NewTaskWindowErrors extends WebAtoms.AtomErrors {
        label: string;
        status: string;
    }
    class NewTaskViewWindowViewModel extends WebAtoms.AtomWindowViewModel {
        errors: NewTaskWindowErrors;
        task: Task;
        constructor();
        save(): Promise<void>;
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
