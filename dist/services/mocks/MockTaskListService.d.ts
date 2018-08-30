import { App } from "web-atoms-core/dist/App";
import { JsonService } from "web-atoms-core/dist/services/JsonService";
import { Task } from "../../models/task";
import { IUser } from "../../models/user";
import { TaskListService } from "../TaskListService";
export default class MockTaskListService extends TaskListService {
    tasks: Task[];
    users: IUser[];
    constructor(app: App, jsonService?: JsonService);
    create(task: Task): Promise<Task>;
    retrive(): Promise<Task[]>;
    update(data: Task): Promise<Task>;
    deleteTask(id: number): Promise<any>;
    getUsers(name: string): Promise<IUser[]>;
}
