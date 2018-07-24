import { MockApp } from "web-atoms-core/dist/MockApp";
import { MockTaskListService } from "../services/MockTaskListService";
import { TaskListService } from "../services/TaskListService";

export class TestApp extends MockApp {

    constructor() {
        super();

        this.put(TaskListService, new MockTaskListService());
    }

}
