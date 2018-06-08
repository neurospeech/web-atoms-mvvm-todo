var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "web-atoms-core/bin/controls/AtomControl", "./TaskStatusCombo"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // tslint:disable
    var AtomControl_1 = require("web-atoms-core/bin/controls/AtomControl");
    var TaskStatusCombo_1 = require("./TaskStatusCombo");
    var TaskEditor = /** @class */ (function (_super) {
        __extends(TaskEditor, _super);
        function TaskEditor() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TaskEditor.prototype.create = function () {
            _super.prototype.create.call(this);
            this.element = document.createElement("div");
            var e1 = document.createTextNode("\r\n\r\n\t");
            this.append(e1);
            var e2 = document.createElement("undefined");
            this.append(e2);
            var e3 = document.createTextNode("\r\n\r\n\t");
            this.append(e3);
            var e4 = document.createElement("undefined");
            this.append(e4);
            var e5 = document.createTextNode("\r\n\r\n\t");
            this.append(e5);
            var e6 = document.createElement("undefined");
            this.append(e6);
            var e7 = document.createTextNode("\r\n\t\r\n\r\n\t\t");
            this.append(e7);
            var e8 = document.createElement("input");
            this.append(e8);
            this.setLocalValue(e8, "atom-label", "Task:");
            this.setLocalValue(e8, "type", "text");
            this.setLocalValue(e8, "atom-value", "^[viewModel.task.label]");
            this.setLocalValue(e8, "autofocus", "autofocus");
            this.bind(e8, "atom-error", [["viewModel", "errors", "label"]], false, function (v1) { return (v1); });
            var e9 = document.createTextNode("\r\n\t\t\r\n\r\n\t\t");
            this.append(e9);
            var e10 = document.createElement("undefined");
            this.append(e10);
            var e11 = document.createTextNode("\r\n\t\t");
            this.append(e11);
            var e12 = new TaskStatusCombo_1.TaskStatusCombo(document.createElement("select"));
            e12.setLocalValue(e12.element, "atom-label", "Status:");
            e12.bind(e12.element, "atom-value", [["viewModel", "task", "status"]], true);
            e12.bind(e12.element, "atom-error", [["viewModel", "errors", "status"]], false, function (v1) { return (v1); });
            this.append(e12);
            var e13 = document.createTextNode("\r\n\t\t\r\n\r\n\t\t");
            this.append(e13);
            var e14 = document.createElement("textarea");
            this.append(e14);
            this.setLocalValue(e14, "atom-label", "Description:");
            this.setLocalValue(e14, "cols", "30");
            this.setLocalValue(e14, "rows", "10");
            this.bind(e14, "atom-value", [["viewModel", "task", "description"]], true);
            var e15 = document.createTextNode("\r\n\r\n\t\t");
            this.append(e15);
            var e16 = document.createElement("div");
            this.append(e16);
            var e23 = document.createTextNode("\r\n\r\n\t\t");
            this.append(e23);
            var e24 = document.createElement("div");
            this.append(e24);
            this.setLocalValue(e24, "atom-field-visibility", !(this.getValue("viewModel.windowName")));
            var e29 = document.createTextNode("\r\n\r\n");
            this.append(e29);
            this.setLocalValue(this.element, "atom-component", "TaskEditor");
        };
        return TaskEditor;
    }(AtomControl_1.AtomControl));
    exports.TaskEditor = TaskEditor;
});
//# sourceMappingURL=TaskEditor.js.map