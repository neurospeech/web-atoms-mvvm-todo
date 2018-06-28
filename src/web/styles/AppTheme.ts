import { RegisterSingleton } from "web-atoms-core/bin/di/RegisterSingleton";
import { AtomTheme } from "web-atoms-core/bin/web/styles/AtomTheme";
import { TaskEditor } from "../views/TaskEditor";
import { TaskEditorStyle } from "./TaskEditorStyle";

@RegisterSingleton
export class AppTheme extends AtomTheme {

    public readonly taskEditor: TaskEditorStyle = this.createStyle(TaskEditor, TaskEditorStyle, "editor");
}
