import { AtomListBoxStyle } from "web-atoms-core/dist/web/styles/AtomListBoxStyle";

export default class RedListStyle extends AtomListBoxStyle {

    protected init(): void {
        this.item.hover(() => ({
            backgroundColor: "red"
        })).hover(" > button", () => ({
            backgroundColor: "black",
            color: "red"
        }));

        this.selectedItem.updateStyle(() => ({
            backgroundColor: "red",
            color: "blue"
        }));

        this.selectedItem.hover(() => ({
            backgroundColor: "red",
            color: "white"
        })).hover(" > button", () => ({
            backgroundColor: "black",
            color: "red"
        }));
    }
}
