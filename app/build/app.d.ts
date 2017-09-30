declare namespace Todo {
    type ConfigItem = {
        label: string;
        value: string;
    };
}
declare namespace Todo {
    class Task {
        id: number;
        label: string;
        description: string;
        status: string;
    }
}
declare namespace Todo {
    class ConfigService extends WebAtoms.Rest.BaseService {
        static readonly instance: ConfigService;
        getStatusList(): Promise<ConfigItem[]>;
    }
}
declare namespace Todo {
    class TaskListService extends WebAtoms.Rest.BaseService {
        static readonly instance: TaskListService;
        tasks: Array<Task>;
        constructor();
        create(task: Task): Promise<Task>;
        retrive(): Promise<Task[]>;
        update(data: Task): Promise<Task>;
        deleteTask(id: number): Promise<any>;
    }
}
declare namespace Todo {
    class TaskEditorErrors extends WebAtoms.AtomErrors {
        label: string;
        status: string;
        description: string;
    }
    class TaskEditorViewModel extends WebAtoms.AtomWindowViewModel {
        errors: TaskEditorErrors;
        task: Task;
        constructor();
        save(): Promise<any>;
        onSelectedTaskChanged(channel: string, task: Task): void;
    }
}
declare namespace Todo {
    class TaskListViewModel extends WebAtoms.AtomViewModel {
        list: WebAtoms.AtomList<Task>;
        taskService: TaskListService;
        windowService: WebAtoms.WindowService;
        selectedTask: Task;
        init(): Promise<any>;
        onSelectedTaskChanged(): void;
        deleteTask(task: Task): Promise<any>;
        addTask(): Promise<any>;
    }
}
