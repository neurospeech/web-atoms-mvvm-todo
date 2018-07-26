import { Inject } from "web-atoms-core/dist/di/Inject";
import { JsonService } from "web-atoms-core/dist/services/JsonService";
import { Task } from "../models/task";
import { IUser } from "../models/user";
import { TaskListService } from "./TaskListService";

export class MockTaskListService extends TaskListService {
    public tasks: Task[] = [];

    public users: IUser[] = [{
        label: "Akash Kava",
        value: "ackava",
    }, {
        label: "John",
        value: "Hemond"
    }, {
        label: "Chris",
        value: "Tucker"
    }];

    constructor(@Inject jsonService: JsonService = new JsonService()) {
        super(jsonService);

        let t = new Task();
        t.label = "Sample task 1";
        t.status = "open";
        t.id = (new Date()).getTime();
        this.tasks.push(t);

        t = new Task();
        t.label = "Sample task 2";
        t.status = "open";
        t.id = (new Date()).getTime();
        this.tasks.push(t);

        t = new Task();
        t.label = "Sample task 3";
        t.status = "open";
        t.id = (new Date()).getTime();
        this.tasks.push(t);
    }

    public async create(task: Task): Promise<Task> {
        task.id = (new Date()).getTime();
        this.tasks.push(task);
        return task;
    }

    public async retrive(): Promise<Task[]> {
        return this.tasks;
    }

    public async update(data: Task): Promise<Task> {
        const t = this.tasks.find((x) => x.id === data.id);
        t.label = data.label;
        t.description = data.description;
        t.status = data.status;
        return data;
    }

    public async deleteTask(id: number): Promise<any> {
        this.tasks = this.tasks.filter((x) => x.id !== id);
    }

    public async getUsers( name: string): Promise<IUser[]> {

        if (!name) {
            return this.users;
        }

        const n: string = name.toLocaleLowerCase();
        return this.users.filter( (x) => {
            if (name) {
                if (x.label.toLocaleLowerCase().indexOf(n) >= 0 ||
                    x.value.toLocaleLowerCase().indexOf(n) >= 0) {
                    return true;
                }
            } else {
                return true;
            }
        });
    }

}
