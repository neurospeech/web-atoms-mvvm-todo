import { App } from "web-atoms-core/dist/App";
import { BindableProperty } from "web-atoms-core/dist/core/BindableProperty";
import { Inject } from "web-atoms-core/dist/di/Inject";
import { Watch } from "web-atoms-core/dist/view-model/AtomViewModel";
import { AtomWindowViewModel } from "web-atoms-core/dist/view-model/AtomWindowViewModel";
import { IUser } from "../models/user";
import { TaskListService } from "../services/TaskListService";

export class UserSelectorViewModel extends AtomWindowViewModel {

	@BindableProperty
	public items: IUser[];

	@BindableProperty
	public searchText: string;

	constructor(
		@Inject app: App,
		@Inject private taskListService: TaskListService) {
		super(app);
	}

	public async init(): Promise<any> {
		this.items = await this.taskListService.getUsers(null);
	}

	@Watch
	public async searchUser(): Promise<any> {
		this.items = await this.taskListService.getUsers(this.searchText);
	}

	public select(user: IUser): void {
		this.close(user);
	}

}
