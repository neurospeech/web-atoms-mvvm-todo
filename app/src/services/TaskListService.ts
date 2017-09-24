// tslint:disable

namespace Todo{

    @DIGlobal
    export class TaskListService extends WebAtoms.Rest.BaseService {

        static get instance():TaskListService{
            return WebAtoms.DI.resolve(TaskListService);
        }


        tasks:Array<Task> = [];

        constructor() {
            super();
            var t:Task = new Task();
            t.label = "Sample task";
            t.status = "Open";
            t.id = (new Date()).getTime();
            this.tasks.push(t);
        }

        @Put("/tasks/task")
        async create(@Body task: Task):Promise<Task>{
            task.id = (new Date()).getTime();
            this.tasks.push(task);
            return task;
        }

        @Get("/tasks")
        async retrive():Promise<Task[]>{
            return this.tasks;
        }

        @Patch("/tasks/task")
        async update(@Body data:Task):Promise<Task> {
            var t:Task = this.tasks.find(x=>x.id === data.id);
            t.label = data.label;
            t.description = data.description;
            t.status = data.status;
            return data;
        }

        @Delete("/tasks/{id}")
        async deleteTask(@Path("id") id:number):Promise<any> {
            this.tasks = this.tasks.filter(x=> x.id !== id);
        }


    }
}