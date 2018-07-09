import { RegisterSingleton } from "web-atoms-core/bin/di/RegisterSingleton";
import { AtomTheme } from "web-atoms-core/bin/web/styles/AtomTheme";
import TaskEditor from "../views/TaskEditor";
import TaskListView from "../views/TaskListView";
import { TaskEditorStyle } from "./TaskEditorStyle";
import { TaskListStyle } from "./TaskListStyle";

@RegisterSingleton
export class AppTheme extends AtomTheme {

    public readonly taskEditor: TaskEditorStyle = this.createStyle(TaskEditor, TaskEditorStyle, "editor");

    public readonly taskList: TaskListStyle = this.createStyle(TaskListView, TaskListStyle, "list");
}
