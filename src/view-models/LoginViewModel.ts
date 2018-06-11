import { bindableProperty } from "web-atoms-core/bin/core/bindable-properties";
import { AtomViewModel } from "web-atoms-core/bin/view-model/AtomViewModel";

export class LoginViewModel extends AtomViewModel {

	@bindableProperty
	public username: string = "demo";

	@bindableProperty
	public password: string = "demo";

	public login(): void {
		this.broadcast("app-url", "Todo.TaskListView");
	}

}
