import { bindableProperty } from "web-atoms-core/bin/core/bindable-properties";
import { Inject } from "web-atoms-core/bin/di/decorators/Inject";
import { watch } from "web-atoms-core/bin/view-model/AtomViewModel";
import { AtomWindowViewModel } from "web-atoms-core/bin/view-model/AtomWindowViewModel";
import { IUser } from "../models/user";
import { TaskListService } from "../services/TaskListService";

export class UserSelectorViewModel extends AtomWindowViewModel {

	@bindableProperty
	public items: IUser[];

	@bindableProperty
	public searchText: string;

	constructor(@Inject() private taskListService: TaskListService) {
		super();
	}

	public async init(): Promise<any> {
		this.items = await this.taskListService.getUsers(null);
	}

	@watch
	public async searchUser(): Promise<any> {
		this.items = await this.taskListService.getUsers(this.searchText);
	}

	public select(user: IUser): void {
		this.close(user);
	}

}
