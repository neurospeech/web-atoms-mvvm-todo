import { AtomTheme } from "web-atoms-core/bin/web/styles/AtomTheme";
import { TaskEditorStyle } from "./TaskEditorStyle";
import { TaskListStyle } from "./TaskListStyle";
export declare class AppTheme extends AtomTheme {
    readonly taskEditor: TaskEditorStyle;
    readonly taskList: TaskListStyle;
}
