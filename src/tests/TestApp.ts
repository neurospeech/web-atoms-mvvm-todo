import { MockApp } from "web-atoms-core/dist/MockApp";
import { JsonService } from "web-atoms-core/dist/services/JsonService";
import { MockTaskListService } from "../services/mocks/MockTaskListService";
import { TaskListService } from "../services/TaskListService";

export class TestApp extends MockApp {

    constructor() {
        super();

        this.put(TaskListService, new MockTaskListService(this, this.resolve(JsonService) ));
    }

}
