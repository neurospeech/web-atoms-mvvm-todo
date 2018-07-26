import { AtomStyle } from "web-atoms-core/dist/web/styles/AtomStyle";
import { AtomStyleClass } from "web-atoms-core/dist/web/styles/AtomStyleClass";
import { ModuleFiles } from "../../ModuleFiles";

export class TaskListStyle extends AtomStyle {

    public readonly saveButton: AtomStyleClass = this.createClass("button", () => ({
        fontWeight: "bold",
        color: "green"
    }));

    public readonly addButton: AtomStyleClass = this.createClass("add-button", () => ({
        backgroundImage: `url(${ModuleFiles.src.images.AddIcon_svg})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        paddingLeft: "20px"
    }));

}
