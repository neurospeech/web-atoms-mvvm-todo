import { bindableProperty } from "web-atoms-core/bin/core/bindable-properties";
import { Inject } from "web-atoms-core/bin/di/Inject";
import { NavigationService } from "web-atoms-core/bin/services/NavigationService";
import { bindableReceive, validate } from "web-atoms-core/bin/view-model/AtomViewModel";
import { AtomWindowViewModel } from "web-atoms-core/bin/view-model/AtomWindowViewModel";
import { Channels } from "../channels";
import { Task } from "../models/task";
import { IUser } from "../models/user";
import { UserSelectorViewModel } from "./UserSelectorViewModel";

export class TaskEditorViewModel extends AtomWindowViewModel {

    // when AtomWindowViewModel starts, channelPrefix is set to windowName
    // this will avoid receiving messages in WindowViewModel
    // in order to receive messages for default, you will have to set
    // channelPrefix = ""
    @bindableReceive(Channels.SelectedTaskChanged)
    public task: Task = new Task();

    @bindableProperty
    public user: IUser = {};

    @validate
    public get errorLabel(): string {
        return this.task.label ? "" : "Task cannot be empty";
    }

    @validate
    public get errorStatus(): string {
        return this.task.status ? "" : "Status cannot be empty";
    }

    constructor(@Inject private windowService: NavigationService) {
        super();
    }

    public async save(): Promise<any> {

        if (!this.isValid) {
            await this.windowService.alert("Please complete all required fields.");
            return;
        }

        this.close(this.task);

    }

    public async assign(): Promise<any> {
        this.user = await this.windowService.openPopup<IUser>("UserSelector", this.resolve(UserSelectorViewModel));
    }

    // @receive(Channels.SelectedTaskChanged)
    // onSelectedTaskChanged(channel:string, task:Task):void {
    //     if(!this.windowName) {
    //         this.task = task;
    //     }
    // }

}
