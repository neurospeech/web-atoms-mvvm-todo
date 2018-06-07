import { BaseService, Body, Delete, Get, Patch, Path, Put, Query } from "web-atoms-core/bin/services/RestService";
import { Task } from "../models/task";
import { IUser } from "../models/user";

export class TaskListService extends BaseService {

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

    constructor() {
        super();
        const t = new Task();
        t.label = "Sample task";
        t.status = "open";
        t.id = (new Date()).getTime();
        this.tasks.push(t);
    }

    @Put("/tasks/task")
    public async create(@Body task: Task): Promise<Task> {
        task.id = (new Date()).getTime();
        this.tasks.push(task);
        return task;
    }

    @Get("/tasks")
    public async retrive(): Promise<Task[]> {
        return this.tasks;
    }

    @Patch("/tasks/task")
    public async update(@Body data: Task): Promise<Task> {
        const t = this.tasks.find((x) => x.id === data.id);
        t.label = data.label;
        t.description = data.description;
        t.status = data.status;
        return data;
    }

    @Delete("/tasks/{id}")
    public async deleteTask( @Path("id") id: number): Promise<any> {
        this.tasks = this.tasks.filter((x) => x.id !== id);
    }

    @Get("/users")
    public async getUsers(@Query("name") name: string): Promise<IUser[]> {

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
