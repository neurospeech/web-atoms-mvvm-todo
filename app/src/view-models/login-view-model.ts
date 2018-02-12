namespace Todo {
	export class LoginViewModel extends WebAtoms.AtomViewModel {

		@bindableProperty
		username: String = "demo";

		@bindableProperty
		password: String = "demo";

		login(): void {
			this.broadcast("app-url","Todo.TaskListView");
		}

	}
}