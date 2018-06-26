import { RegisterSingleton } from "web-atoms-core/bin/di";
import { BaseService, Body, Delete, Get, Patch, Path, Put, Query } from "web-atoms-core/bin/services/RestService";
import { Task } from "../models/task";
import { IUser } from "../models/user";

@RegisterSingleton
export class TaskListService extends BaseService {

    @Put("/tasks/task")
    public async create(@Body task: Task): Promise<Task> {
        return null;
    }

    @Get("/tasks")
    public async retrive(): Promise<Task[]> {
        return null;
    }

    @Patch("/tasks/task")
    public async update(@Body data: Task): Promise<Task> {
        return null;
    }

    @Delete("/tasks/{id}")
    public async deleteTask( @Path("id") id: number): Promise<any> {
        return null;
    }

    @Get("/users")
    public async getUsers(@Query("name") name: string): Promise<IUser[]> {
        return null;
    }

}
