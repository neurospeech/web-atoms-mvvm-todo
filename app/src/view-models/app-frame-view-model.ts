namespace Todo {

    export class AppFrameViewModel extends WebAtoms.AtomViewModel {

        @bindableReceive("app-url")
        url:string = "Todo.TaskListView";

    }
}