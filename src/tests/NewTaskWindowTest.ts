import "test-dom";
import { Assert } from "web-atoms-core/bin/unit/Assert";
import { Category } from "web-atoms-core/bin/unit/Category";
import { Test } from "web-atoms-core/bin/unit/Test";
import { TaskEditorViewModel } from "../view-models/TaskEditorViewModel";
import { TaskListViewModel } from "../view-models/TaskListViewModel";
import { BaseTest } from "./BaseTest";

/**
 * @class WindowTests
 * @extends {TestItem}
 */
@Category("Window Tests")
class WindowTests extends BaseTest {

    /**
     * This task verifies every possibility of Window
     *
     * @memberof WindowTests
     */
    @Test("New Task")
    public async newTask() {

        const vm = this.app.get(TaskEditorViewModel);

        await vm.waitForReady();

        this.navigationService.expectAlert("Please complete all required fields.");

        await vm.save();

        Assert.equals("Task cannot be empty", vm.errorLabel);
        Assert.equals("Status cannot be empty", vm.errorStatus);

        this.navigationService.expectAlert("Please complete all required fields.");
        vm.task.label = "Sample";
        await vm.save();
        Assert.equals("Status cannot be empty", vm.errorStatus);

        vm.task.status = "Open";

        await vm.save();

    }

    @Test("Task List new Window")
    public async taskList() {

        const vm = this.app.get(TaskListViewModel);

        await vm.waitForReady();

        // tslint:disable-next-line:no-debugger
        debugger;

        // we will not execute methods of view model here...
        // instead we will only return expected return value
        // unit test of View Model of Window should verify all
        // individual tasks
        this.navigationService
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
