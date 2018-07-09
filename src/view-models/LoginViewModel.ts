import { BindableProperty } from "web-atoms-core/bin/core/BindableProperty";
import { AtomViewModel } from "web-atoms-core/bin/view-model/AtomViewModel";
import { ModuleFiles } from "../ModuleFiles";

export class LoginViewModel extends AtomViewModel {

	@BindableProperty
	public username: string = "demo";

	@BindableProperty
	public password: string = "demo";

	public login(): void {
		this.broadcast("app-url", ModuleFiles.files.views.TaskListView);
	}

}
