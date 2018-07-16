import { AtomListBoxStyle } from "web-atoms-core/bin/web/styles/AtomListBoxStyle";
import { AtomStyle } from "web-atoms-core/bin/web/styles/AtomStyle";
import { AtomStyleClass } from "web-atoms-core/bin/web/styles/AtomStyleClass";
import { ModuleFiles } from "../../ModuleFiles";

export class TaskListStyle extends AtomListBoxStyle {

    public readonly saveButton: AtomStyleClass = this.createClass("button", {
        fontWeight: "bold",
        color: "green"
    });

    public readonly addButton: AtomStyleClass = this.createClass("add-button", {
        backgroundImage: `url(${ModuleFiles.src.images.AddIcon_svg})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        paddingLeft: "20px"
    });
}
