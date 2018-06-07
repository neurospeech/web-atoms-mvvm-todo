import { AtomViewModel, bindableReceive } from "web-atoms-core/bin/view-model/AtomViewModel";

export class AppFrameViewModel extends AtomViewModel {

    @bindableReceive("app-url")
    public url: string = "Todo.LoginView";

}
