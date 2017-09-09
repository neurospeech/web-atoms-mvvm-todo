namespace Todo{
    
    export class NewTaskViewModelWindow extends WebAtoms.AtomWindowViewModel{

        @bindableProperty
        task:Task = new Task();

        save():void{

            var windowService = WebAtoms.DI.resolve(WindowService);

            if(!this.task.label){
                windowService.alert("Task cannot be empty");
                return;
            }

            this.close(this.task);

        }


    }
}