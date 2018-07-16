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
        define(["require", "exports", "web-atoms-core/bin/web/controls/AtomControl", "./TaskStatusCombo", "../styles/TaskEditorStyle"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AtomControl_1 = require("web-atoms-core/bin/web/controls/AtomControl");
    var TaskStatusCombo_1 = require("./TaskStatusCombo");
    var TaskEditorStyle_1 = require("../styles/TaskEditorStyle");
    var TaskEditor = /** @class */ (function (_super) {
        __extends(TaskEditor, _super);
        function TaskEditor() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TaskEditor.prototype.create = function () {
            var _this = this;
            _super.prototype.create.call(this);
            var __creator = this;
            this.element = document.createElement("div");
            this.defaultControlStyle = TaskEditorStyle_1.TaskEditorStyle;
            var e1 = document.createTextNode("\r\n\t\t");
            this.element.appendChild(e1);
            var e2 = document.createElement("input");
            this.append(e2);
            this.setPrimitiveValue(e2, "type", "text");
            this.bind(e2, "value", [["viewModel", "task", "label"]], ["change", "keyup", "keydown", "blur"]);
            this.setPrimitiveValue(e2, "autofocus", "autofocus");
            var e3 = document.createTextNode("\r\n\t\t");
            this.element.appendChild(e3);
            var e4 = document.createElement("span");
            this.append(e4);
            this.bind(e4, "text", [["viewModel", "errorLabel"]], false, function (v1) { return (v1); });
            var e5 = document.createTextNode("\r\n\t\t\r\n\r\n\t\t");
            this.element.appendChild(e5);
            var e6 = document.createElement("undefined");
            this.append(e6);
            var e7 = document.createTextNode("\r\n\t\t");
            this.element.appendChild(e7);
            var e8 = new TaskStatusCombo_1.default(this.app);
            e8.bind(e8.element, "value", [["viewModel", "task", "status"]], true);
            this.append(e8);
            var e9 = document.createTextNode("\r\n\t\t");
            this.element.appendChild(e9);
            var e10 = document.createElement("span");
            this.append(e10);
            this.bind(e10, "text", [["viewModel", "errorStatus"]], false, function (v1) { return (v1); });
            var e11 = document.createTextNode("\r\n\t\t\r\n\r\n\t\t");
            this.element.appendChild(e11);
            var e12 = document.createElement("textarea");
            this.append(e12);
            this.setPrimitiveValue(e12, "cols", "30");
            this.setPrimitiveValue(e12, "rows", "10");
            this.bind(e12, "value", [["viewModel", "task", "description"]], true);
            var e13 = document.createTextNode("\r\n\r\n\t\t");
            this.element.appendChild(e13);
            var e14 = document.createElement("div");
            this.append(e14);
            var e15 = document.createTextNode("\r\n\t\t\t");
            e14.appendChild(e15);
            var e16 = document.createElement("span");
            e14.appendChild(e16);
            this.bind(e16, "text", [["viewModel", "user", "label"]], false, function (v1) { return (v1); });
            var e17 = document.createTextNode("\r\n\t\t\t");
            e14.appendChild(e17);
            var e18 = document.createElement("button");
            e14.appendChild(e18);
            this.runAfterInit(function () {
                return _this.setLocalValue(e18, "eventClick", function () { return (_this.viewModel).assign(); });
            });
            var e19 = document.createTextNode("Assign");
            e18.appendChild(e19);
            var e20 = document.createTextNode("\r\n\t\t");
            e14.appendChild(e20);
            var e21 = document.createTextNode("\r\n\r\n\t\t");
            this.element.appendChild(e21);
            var e22 = document.createElement("div");
            this.append(e22);
            this.runAfterInit(function () {
                return _this.setLocalValue(e22, "styleDisplay", !(_this.viewModel.windowName) ? '' : 'none');
            });
            var e23 = document.createTextNode("\r\n\t\t\t");
            e22.appendChild(e23);
            var e24 = document.createElement("button");
            e22.appendChild(e24);
            this.setPrimitiveValue(e24, "styleClass", this.controlStyle.saveButton);
            this.runAfterInit(function () {
                return _this.setLocalValue(e24, "eventClick", function () { return (_this.viewModel).save(); });
            });
            var e25 = document.createTextNode("Save");
            e24.appendChild(e25);
            var e26 = document.createTextNode("\r\n\t\t");
            e22.appendChild(e26);
            var e27 = document.createTextNode("\r\n\r\n");
            this.element.appendChild(e27);
        };
        return TaskEditor;
    }(AtomControl_1.AtomControl));
    exports.default = TaskEditor;
});
//# sourceMappingURL=TaskEditor.js.map