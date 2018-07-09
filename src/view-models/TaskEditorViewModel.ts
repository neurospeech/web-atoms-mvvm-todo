import { App } from "web-atoms-core/bin/App";
import { BindableProperty } from "web-atoms-core/bin/core/BindableProperty";
import { Inject } from "web-atoms-core/bin/di/Inject";
import { NavigationService } from "web-atoms-core/bin/services/NavigationService";
import { BindableReceive, Validate } from "web-atoms-core/bin/view-model/AtomViewModel";
import { AtomWindowViewModel } from "web-atoms-core/bin/view-model/AtomWindowViewModel";
import { Channels } from "../channels";
import { Task } from "../models/task";
import { IUser } from "../models/user";
import { ModuleFiles } from "../ModuleFiles";

export class TaskEditorViewModel extends AtomWindowViewModel {

    // when AtomWindowViewModel starts, channelPrefix is set to windowName
    // this will avoid receiving messages in WindowViewModel
    // in order to receive messages for default, you will have to set
    // channelPrefix = ""
    @BindableReceive(Channels.SelectedTaskChanged)
    public task: Task = new Task();

    @BindableProperty
    public user: IUser = {};

    @Validate
    public get errorLabel(): string {
        return this.task.label ? "" : "Task cannot be empty";
    }

    @Validate
    public get errorStatus(): string {
        return this.task.status ? "" : "Status cannot be empty";
    }

    constructor(
        @Inject app: App,
        @Inject private windowService: NavigationService) {
        super(app);
    }

    public async save(): Promise<any> {

        if (!this.isValid) {
            await this.windowService.alert("Please complete all required fields.");
            return;
        }

        this.close(this.task);

    }

    public async assign(): Promise<any> {
        this.user = await this.windowService.openPage<IUser>(ModuleFiles.views.UserSelector);
    }

    // @receive(Channels.SelectedTaskChanged)
    // onSelectedTaskChanged(channel:string, task:Task):void {
    //     if(!this.windowName) {
    //         this.task = task;
    //     }
    // }

}
