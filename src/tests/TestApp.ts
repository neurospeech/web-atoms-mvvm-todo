import { MockApp } from "web-atoms-core/bin/MockApp";
import { MockTaskListService } from "../services/MockTaskListService";
import { TaskListService } from "../services/TaskListService";

export class TestApp extends MockApp {

    constructor() {
        super();

        this.put(TaskListService, new MockTaskListService());
    }

}
