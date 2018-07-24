import { AtomViewModel, BindableReceive } from "web-atoms-core/dist/view-model/AtomViewModel";
import { ModuleFiles } from "../ModuleFiles";

export class AppFrameViewModel extends AtomViewModel {

    @BindableReceive("app-url")
    public url: string = ModuleFiles.views.LoginView;

}
