import { BaseService } from "web-atoms-core/bin/services/RestService";
import { Task } from "../models/task";
import { IUser } from "../models/user";
export declare class TaskListService extends BaseService {
    tasks: Task[];
    users: IUser[];
    constructor();
    create(task: Task): Promise<Task>;
    retrive(): Promise<Task[]>;
    update(data: Task): Promise<Task>;
    deleteTask(id: number): Promise<any>;
    getUsers(name: string): Promise<IUser[]>;
}
