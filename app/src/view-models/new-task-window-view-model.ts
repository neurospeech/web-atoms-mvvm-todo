namespace Todo{

    export class NewTaskWindowErrors extends WebAtoms.AtomErrors{

        @bindableProperty
        label: string;

        @bindableProperty
        status: string;

        @bindableProperty
        description: string;

    }

    export class NewTaskViewWindowViewModel extends WebAtoms.AtomWindowViewModel{

        errors: NewTaskWindowErrors;

        @bindableProperty
        task:Task = new Task();

        constructor(){
            super();

            this.errors = new NewTaskWindowErrors(this);

            this.addValidation(
                () => this.errors.label = this.task.label ? "" : "Task cannot be empty",
                () => this.errors.status = this.task.status ? "" : "Status cannot be empty"
            );

        }

        async save(){

            var windowService = WebAtoms.DI.resolve(WindowService);

            if(this.errors.hasErrors()){
                await windowService.alert("Please complete all required fields.");
                return;
            }

            this.close(this.task);

        }


    }
}