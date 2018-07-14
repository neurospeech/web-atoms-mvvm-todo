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
        define(["require", "exports", "web-atoms-core/bin/web/controls/AtomWindow", "../../view-models/TaskEditorViewModel", "./TaskEditor"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AtomWindow_1 = require("web-atoms-core/bin/web/controls/AtomWindow");
    var TaskEditorViewModel_1 = require("../../view-models/TaskEditorViewModel");
    var TaskEditor_1 = require("./TaskEditor");
    var NewTaskWindow = /** @class */ (function (_super) {
        __extends(NewTaskWindow, _super);
        function NewTaskWindow() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        NewTaskWindow.prototype.create = function () {
            var _this = this;
            _super.prototype.create.call(this);
            var __creator = this;
            var e1 = document.createTextNode("\r\n    ");
            this.element.appendChild(e1);
            var e2 = document.createElement("div");
            this.append(e2);
            var e3 = document.createTextNode("\r\n        \r\n        ");
            e2.appendChild(e3);
            var e4 = new TaskEditor_1.default(this.app);
            var e5 = document.createTextNode("\r\n\r\n    ");
            e4.element.appendChild(e5);
            this.append(e4);
            var e6 = document.createTextNode("\r\n    ");
            this.element.appendChild(e6);
            var e7 = document.createElement("div");
            this.append(e7);
            var e8 = document.createTextNode("\r\n        ");
            e7.appendChild(e8);
            var e9 = document.createElement("button");
            e7.appendChild(e9);
            this.runAfterInit(function () {
                return _this.setLocalValue(e9, "eventClick", function () { return (_this.viewModel).save(); });
            });
            var e10 = document.createTextNode("Save");
            e9.appendChild(e10);
            var e11 = document.createTextNode("\r\n        ");
            e7.appendChild(e11);
            var e12 = document.createElement("button");
            e7.appendChild(e12);
            this.runAfterInit(function () {
                return _this.setLocalValue(e12, "eventClick", function () { return (_this.viewModel).cancel(); });
            });
            var e13 = document.createTextNode("Cancel");
            e12.appendChild(e13);
            var e14 = document.createTextNode("\r\n    ");
            e7.appendChild(e14);
            var e15 = document.createTextNode("\r\n");
            this.element.appendChild(e15);
            this.setPrimitiveValue(this.element, "viewModel", this.resolve(TaskEditorViewModel_1.TaskEditorViewModel));
            this.bind(this.element, "title", [["viewModel", "task", "label"], ["viewModel", "task", "label"]], false, function (v1, v2) { return (v1) ? ('Task ' + (v2)) : 'Add New Task'; });
            this.setPrimitiveValue(this.element, "width", "400px");
            this.setPrimitiveValue(this.element, "height", "400px");
        };
        return NewTaskWindow;
    }(AtomWindow_1.AtomWindow));
    exports.default = NewTaskWindow;
});
//# sourceMappingURL=NewTaskWindow.js.map