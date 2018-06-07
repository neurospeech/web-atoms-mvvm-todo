namespace Todo {

	export class UserSelectorViewModel extends WebAtoms.AtomWindowViewModel {

		@bindableProperty
		items: User[];

		@bindableProperty
		searchText: string;

		async init(): Promise<any> {
			this.items = await TaskListService.instance.getUsers(null);
		}

		@watch
		async searchUser(): Promise<any> {
			this.items = await TaskListService.instance.getUsers(this.searchText);
		}

		select(user:User): void {
			this.close(user);
		}

	}

}