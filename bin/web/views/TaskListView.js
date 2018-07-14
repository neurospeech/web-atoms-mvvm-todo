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
        define(["require", "exports", "web-atoms-core/bin/web/controls/AtomListBox", "web-atoms-core/bin/web/controls/AtomGridSplitter", "web-atoms-core/bin/web/controls/AtomGridView", "../../view-models/TaskListViewModel", "../../view-models/TaskEditorViewModel", "./TaskEditor"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AtomListBox_1 = require("web-atoms-core/bin/web/controls/AtomListBox");
    var AtomGridSplitter_1 = require("web-atoms-core/bin/web/controls/AtomGridSplitter");
    var AtomGridView_1 = require("web-atoms-core/bin/web/controls/AtomGridView");
    var TaskListViewModel_1 = require("../../view-models/TaskListViewModel");
    var TaskEditorViewModel_1 = require("../../view-models/TaskEditorViewModel");
    var TaskEditor_1 = require("./TaskEditor");
    var TaskListView = /** @class */ (function (_super) {
        __extends(TaskListView, _super);
        function TaskListView() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TaskListView.prototype.create = function () {
            var _this = this;
            _super.prototype.create.call(this);
            var __creator = this;
            var e1 = document.createTextNode("\r\n\r\n    ");
            this.element.appendChild(e1);
            var e2 = document.createElement("header");
            this.append(e2);
            this.setPrimitiveValue(e2, "row", "0");
            this.setPrimitiveValue(e2, "column", "0:3");
            var e3 = document.createTextNode("\r\n        ");
            e2.appendChild(e3);
            var e4 = document.createElement("button");
            e2.appendChild(e4);
            this.bind(e4, "styleClass", [["this", "controlStyle", "addButton"]], false, function (v1) { return (v1); }, __creator);
            this.runAfterInit(function () {
                return _this.setLocalValue(e4, "eventClick", function () { return (_this.viewModel).addTask(); });
            });
            var e5 = document.createTextNode("Add New Task");
            e4.appendChild(e5);
            var e6 = document.createTextNode("\r\n    ");
            e2.appendChild(e6);
            var e7 = document.createTextNode("\r\n\r\n    ");
            this.element.appendChild(e7);
            var e8 = new AtomGridSplitter_1.AtomGridSplitter(this.app);
            var e9 = document.createTextNode("\r\n\r\n    ");
            e8.element.appendChild(e9);
            var e10 = new AtomListBox_1.AtomListBox(this.app, document.createElement("div"));
            var e11 = document.createTextNode("\r\n        ");
            e10.element.appendChild(e11);
            var e12 = document.createElement("div");
            e10.append(e12);
            e10.setPrimitiveValue(e12, "class", "item");
            var e13 = document.createTextNode("\r\n\r\n            ");
            e12.appendChild(e13);
            var e14 = document.createElement("span");
            e12.appendChild(e14);
            e10.runAfterInit(function () {
                return e10.setLocalValue(e14, "text", (_this.data.label));
            });
            var e15 = document.createTextNode("\r\n\r\n            ");
            e12.appendChild(e15);
            var e16 = document.createElement("button");
            e12.appendChild(e16);
            e10.bind(e16, "styleClass", [["this", "controlStyle", "saveButton"]], false, function (v1) { return (v1); }, __creator);
            e10.runAfterInit(function () {
                return e10.setLocalValue(e16, "eventClick", function () { return (_this.viewModel).deleteTask((_this.data)); });
            });
            var e17 = document.createTextNode("Delete");
            e16.appendChild(e17);
            var e18 = document.createTextNode("\r\n        ");
            e12.appendChild(e18);
            var e19 = document.createTextNode("\r\n    ");
            e10.element.appendChild(e19);
            e10.setPrimitiveValue(e10.element, "row", "1");
            e10.setPrimitiveValue(e10.element, "column", "0");
            e10.runAfterInit(function () {
                return e10.setLocalValue(e10.element, "items", (_this.viewModel.list));
            });
            e10.bind(e10.element, "selectedItem", [["viewModel", "selectedTask"]], true);
            e8.append(e10);
            var e20 = document.createTextNode("\r\n\r\n    ");
            e8.element.appendChild(e20);
            var e21 = new TaskEditor_1.default(this.app);
            var e22 = document.createTextNode("\r\n\r\n");
            e21.element.appendChild(e22);
            e21.setPrimitiveValue(e21.element, "column", "2");
            e21.setPrimitiveValue(e21.element, "row", "1");
            e21.setPrimitiveValue(e21.element, "viewModel", this.resolve(TaskEditorViewModel_1.TaskEditorViewModel));
            e21.bind(e21.element, "styleDisplay", [["viewModel", "task"]], false, function (v1) { return (v1) ? '' : 'none'; });
            e8.append(e21);
            e8.setPrimitiveValue(e8.element, "row", "1");
            e8.setPrimitiveValue(e8.element, "column", "1");
            e8.setPrimitiveValue(e8.element, "direction", "vertical");
            this.append(e8);
            this.setPrimitiveValue(this.element, "class", "task-list");
            this.setPrimitiveValue(this.element, "columns", "30%, 5, *");
            this.setPrimitiveValue(this.element, "rows", "50, *");
            this.setPrimitiveValue(this.element, "viewModel", this.resolve(TaskListViewModel_1.TaskListViewModel));
        };
        return TaskListView;
    }(AtomGridView_1.AtomGridView));
    exports.default = TaskListView;
});
//# sourceMappingURL=TaskListView.js.map