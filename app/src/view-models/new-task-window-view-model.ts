namespace Todo {

    export class TaskEditorErrors extends WebAtoms.AtomErrors {

        @bindableProperty
        label: string;

        @bindableProperty
        status: string;

        @bindableProperty
        description: string;

    }

    export class TaskEditorViewModel extends WebAtoms.AtomWindowViewModel {

        errors: TaskEditorErrors;

        @bindableProperty
        task:Task = new Task();

        constructor() {
            super();

            this.errors = new TaskEditorErrors(this);

            this.addValidation(
                () => this.errors.label = this.task.label ? "" : "Task cannot be empty",
                () => this.errors.status = this.task.status ? "" : "Status cannot be empty"
            );

        }

        async save(): Promise<any> {

            var windowService:WebAtoms.WindowService = WebAtoms.DI.resolve(WindowService);

            if(this.errors.hasErrors()) {
                await windowService.alert("Please complete all required fields.");
                return;
            }

            this.close(this.task);

        }

        @receive(Channels.SelectedTaskChanged)
        onSelectedTaskChanged(channel:string, task:Task):void {
            if(!this.windowName) {
                this.task = task;
            }
        }


    }
}