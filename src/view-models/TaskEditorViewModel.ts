import { bindableProperty } from "web-atoms-core/bin/core/bindable-properties";
import { Inject } from "web-atoms-core/bin/di/decorators/Inject";
import { WindowService } from "web-atoms-core/bin/services/WindowService";
import { AtomErrors, bindableReceive } from "web-atoms-core/bin/view-model/AtomViewModel";
import { AtomWindowViewModel } from "web-atoms-core/bin/view-model/AtomWindowViewModel";
import { Channels } from "../channels";
import { Task } from "../models/task";
import { IUser } from "../models/user";
import { UserSelector } from "../views/UserSelector";
import { UserSelectorViewModel } from "./UserSelectorViewModel";
export class TaskEditorErrors extends AtomErrors {

    @bindableProperty
    public label: string;

    @bindableProperty
    public status: string;

    @bindableProperty
    public description: string;

}

export class TaskEditorViewModel extends AtomWindowViewModel {

    public errors: TaskEditorErrors;

    // when AtomWindowViewModel starts, channelPrefix is set to windowName
    // this will avoid receiving messages in WindowViewModel
    // in order to receive messages for default, you will have to set
    // channelPrefix = ""
    @bindableReceive(Channels.SelectedTaskChanged)
    public task: Task = new Task();

    @bindableProperty
    public user: IUser = {};

    constructor(@Inject() private windowService: WindowService) {
        super();

        this.errors = new TaskEditorErrors(this);

        this.addValidation(
            () => this.errors.label = this.task.label ? "" : "Task cannot be empty",
            () => this.errors.status = this.task.status ? "" : "Status cannot be empty"
        );

    }

    public async save(): Promise<any> {

        if (this.errors.hasErrors()) {
            await this.windowService.alert("Please complete all required fields.");
            return;
        }

        this.close(this.task);

    }

    public async assign(): Promise<any> {
        this.user = await this.windowService.openPopup<IUser>(UserSelector, this.resolve(UserSelectorViewModel));
    }

    // @receive(Channels.SelectedTaskChanged)
    // onSelectedTaskChanged(channel:string, task:Task):void {
    //     if(!this.windowName) {
    //         this.task = task;
    //     }
    // }

}
