import "test-dom";
import { Atom } from "web-atoms-core/bin/Atom";
import { MockWindowService } from "web-atoms-core/bin/services/MockWindowService";
import {Assert, Category, Test, TestItem} from "web-atoms-core/bin/unit/base-test";
import { TaskListService } from "../services/TaskListService";
import { TaskEditorViewModel } from "../view-models/TaskEditorViewModel";
import { TaskListViewModel } from "../view-models/TaskListViewModel";

/**
 * @class WindowTests
 * @extends {TestItem}
 */
@Category("Window Tests")
class WindowTests extends TestItem {

    constructor(private windowService: MockWindowService = new MockWindowService()) {
        super();

        // following line will use mock of REST Services
        Atom.designMode = true;
    }

    public dispose() {

        // this is important, we must verify that all
        // expected windows did open correctly
        this.windowService.assert();

        return super.dispose();
    }

    /**
     * This task verifies every possibility of Window
     *
     * @memberof WindowTests
     */
    @Test("New Task")
    public async newTask() {

        const vm = new TaskEditorViewModel(this.windowService);

        this.windowService.expectAlert("Please complete all required fields.");

        await vm.save();

        Assert.equals("Task cannot be empty", vm.errorLabel);
        Assert.equals("Status cannot be empty", vm.errorStatus);

        this.windowService.expectAlert("Please complete all required fields.");
        vm.task.label = "Sample";
        await vm.save();
        Assert.equals("Status cannot be empty", vm.errorStatus);

        vm.task.status = "Open";

        await vm.save();

    }

    @Test("Task List new Window")
    public async taskList() {

        this.windowService.assert();

        const vm = new TaskListViewModel(this.windowService, new TaskListService());

        // we will not execute methods of view model here...
        // instead we will only return expected return value
        // unit test of View Model of Window should verify all
        // individual tasks
        this.windowService
            .expectWindow<TaskEditorViewModel>("NewTaskWindow", async (vm2) => {

                vm2.task.label = "New Task";
                vm2.task.status = "Open";

                return vm2.task;

            } );

        await vm.addTask();

        const task = vm.list[1];

        Assert.equals("New Task", task.label);
        Assert.equals("Open", task.status);

    }

}
