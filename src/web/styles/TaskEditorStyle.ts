import { AtomStyle } from "web-atoms-core/bin/web/styles/AtomStyle";
import { AtomStyleClass } from "web-atoms-core/bin/web/styles/AtomStyleClass";

export class TaskEditorStyle extends AtomStyle {

    public readonly saveButton: AtomStyleClass = this.createClass("button", {
        fontFamily: "bold"
    });
}