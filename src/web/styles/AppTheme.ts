import { RegisterSingleton } from "web-atoms-core/dist/di/RegisterSingleton";
import { AtomTheme } from "web-atoms-core/dist/web/styles/AtomTheme";
import TaskEditor from "../views/TaskEditor";
import TaskListView from "../views/TaskListView";
import { TaskEditorStyle } from "./TaskEditorStyle";
import { TaskListStyle } from "./TaskListStyle";

@RegisterSingleton
export class AppTheme extends AtomTheme {

    constructor() {
        super();
        this.selectedBgColor = "green";
        this.selectedColor = "yellow";
    }

}
