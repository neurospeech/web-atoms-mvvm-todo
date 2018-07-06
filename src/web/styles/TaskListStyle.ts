import { AtomStyle } from "web-atoms-core/bin/web/styles/AtomStyle";
import { AtomStyleClass } from "web-atoms-core/bin/web/styles/AtomStyleClass";
import { AddIcon } from "../images/AddIcon";

export class TaskListStyle extends AtomStyle {

    public readonly saveButton: AtomStyleClass = this.createClass("button", {
        fontWeight: "bold",
        color: "green"
    });

    public readonly addButton: AtomStyleClass = this.createClass("add-button", {
        backgroundImage: `url(${AddIcon.url})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        paddingLeft: "20px"
    });
}
