import { AtomViewModel, BindableReceive } from "web-atoms-core/bin/view-model/AtomViewModel";

export class AppFrameViewModel extends AtomViewModel {

    @BindableReceive("app-url")
    public url: string = "LoginView";

}
