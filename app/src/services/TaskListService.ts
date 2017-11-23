// tslint:disable

namespace Todo{

    @DIGlobal
    export class TaskListService extends WebAtoms.Rest.BaseService {

        static get instance():TaskListService{
            return WebAtoms.DI.resolve(TaskListService);
        }


        tasks:Array<Task> = [];

        users: User[] = [{
            label: "Akash Kava",
            value: "ackava",
        },{ 
            label:"John", 
            value:"Hemond"
        },{ 
            label:"Chris", 
            value: "Tucker"
        }];

        constructor() {
            super();
            var t:Task = new Task();
            t.label = "Sample task";
            t.status = "open";
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

        @Get("/users")
        async getUsers(@Query("name") name: string): Promise<User[]> {

            if(!name) {
                return this.users;
            }

            var n: string = name.toLocaleLowerCase();
            return this.users.filter( x => { 
                if(name){
                    if( x.label.toLocaleLowerCase().indexOf(n) >= 0 || 
                        x.value.toLocaleLowerCase().indexOf(n) >= 0) {
                        return true;
                    }
                } else { 
                    return true; 
                } 
            });
        }


    }
}