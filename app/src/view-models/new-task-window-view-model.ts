namespace Todo{
    
    export class NewTaskWindowErrors extends WebAtoms.AtomErrors{

        @bindableProperty
        label: string;

        @bindableProperty
        status: string;

    }

    export class NewTaskViewModelWindow extends WebAtoms.AtomWindowViewModel{
        
        errors: NewTaskWindowErrors;

        @bindableProperty
        task:Task = new Task();

        constructor(){
            super();

            this.errors = new NewTaskWindowErrors(this);

            this.addValidation(this, x=> {
                x.errors.label = x.task.label ? "" : "Task cannot be empty";
            });

            this.addValidation(this, x=>{
                x.errors.status = x.task.status ? "" : "Status cannot be empty";
            });
        }

        save():void{

            var windowService = WebAtoms.DI.resolve(WindowService);

            if(this.errors.hasErrors()){
                windowService.alert("Please complete all required fields.");
                return;
            }

            this.close(this.task);

        }


    }
}