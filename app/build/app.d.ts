declare namespace Todo {
    class TaskListService extends WebAtoms.Rest.BaseService {
        tasks: Array<Task>;
        constructor();
        create(task: Task): Promise<Task>;
        retrive(): Promise<Task[]>;
        update(data: Task): Promise<Task>;
        deleteTask(id: number): Promise<any>;
    }
}
declare namespace Todo {
    class NewTaskWindowErrors extends WebAtoms.AtomErrors {
        label: string;
        status: string;
        description: string;
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
        id: number;
        label: string;
        description: string;
        status: string;
    }
    class TaskListViewModel extends WebAtoms.AtomViewModel {
        list: WebAtoms.AtomList<Task>;
        taskService: TaskListService;
        init(): Promise<any>;
        deleteTask(task: Task): Promise<void>;
        addTask(): Promise<void>;
    }
}
