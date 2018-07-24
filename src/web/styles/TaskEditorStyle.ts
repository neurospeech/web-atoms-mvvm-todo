import { AtomStyle } from "web-atoms-core/dist/web/styles/AtomStyle";
import { AtomStyleClass } from "web-atoms-core/dist/web/styles/AtomStyleClass";

export class TaskEditorStyle extends AtomStyle {

    public readonly saveButton: AtomStyleClass = this.createClass("button", () => ({
        fontFamily: "bold"
    }));
}
