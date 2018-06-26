import { Task } from "../models/task";
import { IUser } from "../models/user";
import { TaskListService } from "./TaskListService";
export declare class MockTaskListService extends TaskListService {
    tasks: Task[];
    users: IUser[];
    constructor();
    create(task: Task): Promise<Task>;
    retrive(): Promise<Task[]>;
    update(data: Task): Promise<Task>;
    deleteTask(id: number): Promise<any>;
    getUsers(name: string): Promise<IUser[]>;
}
