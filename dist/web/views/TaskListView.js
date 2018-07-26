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
        define(["require", "exports", "web-atoms-core/dist/web/controls/AtomGridSplitter", "web-atoms-core/dist/web/controls/AtomListBox", "web-atoms-core/dist/web/controls/AtomGridView", "web-atoms-core/dist/web/controls/AtomControl", "../../view-models/TaskListViewModel", "../../view-models/TaskEditorViewModel", "./TaskEditor", "../styles/TaskListStyle"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AtomGridSplitter_1 = require("web-atoms-core/dist/web/controls/AtomGridSplitter");
    var AtomListBox_1 = require("web-atoms-core/dist/web/controls/AtomListBox");
    var AtomGridView_1 = require("web-atoms-core/dist/web/controls/AtomGridView");
    var AtomControl_1 = require("web-atoms-core/dist/web/controls/AtomControl");
    var TaskListViewModel_1 = require("../../view-models/TaskListViewModel");
    var TaskEditorViewModel_1 = require("../../view-models/TaskEditorViewModel");
    var TaskEditor_1 = require("./TaskEditor");
    var TaskListStyle_1 = require("../styles/TaskListStyle");
    var TaskListView = /** @class */ (function (_super) {
        __extends(TaskListView, _super);
        function TaskListView() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TaskListView.prototype.create = function () {
            var _this = this;
            _super.prototype.create.call(this);
            var __creator = this;
            this.defaultControlStyle = TaskListStyle_1.TaskListStyle;
            this.setPrimitiveValue(this.element, "columns", "30%, 5, *");
            this.setPrimitiveValue(this.element, "rows", "50, *");
            this.setPrimitiveValue(this.element, "viewModel", this.resolve(TaskListViewModel_1.TaskListViewModel));
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
            e8.setPrimitiveValue(e8.element, "row", "1");
            e8.setPrimitiveValue(e8.element, "column", "1");
            e8.setPrimitiveValue(e8.element, "direction", "vertical");
            this.append(e8);
            var e9 = document.createTextNode("\r\n\r\n    ");
            this.element.appendChild(e9);
            var e10 = new AtomListBox_1.AtomListBox(this.app, document.createElement("div"));
            var e11 = document.createTextNode("\r\n        ");
            e10.element.appendChild(e11);
            var e12 = document.createTextNode("\r\n    ");
            e10.element.appendChild(e12);
            e10.setPrimitiveValue(e10.element, "row", "1");
            e10.setPrimitiveValue(e10.element, "column", "0");
            e10.runAfterInit(function () {
                return e10.setLocalValue(e10.element, "items", (_this.viewModel.list));
            });
            e10.bind(e10.element, "selectedItem", [["viewModel", "selectedTask"]], true);
            e10.itemTemplate = TaskListView_itemTemplate_1Creator(this);
            this.append(e10);
            var e13 = document.createTextNode("\r\n\r\n    ");
            this.element.appendChild(e13);
            var e14 = new TaskEditor_1.default(this.app);
            e14.setPrimitiveValue(e14.element, "column", "2");
            e14.setPrimitiveValue(e14.element, "row", "1");
            e14.setPrimitiveValue(e14.element, "viewModel", this.resolve(TaskEditorViewModel_1.TaskEditorViewModel));
            e14.bind(e14.element, "styleDisplay", [["viewModel", "task"]], false, function (v1) { return (v1) ? '' : 'none'; });
            this.append(e14);
            var e15 = document.createTextNode("\r\n\r\n");
            this.element.appendChild(e15);
        };
        return TaskListView;
    }(AtomGridView_1.AtomGridView));
    exports.default = TaskListView;
    function TaskListView_itemTemplate_1Creator(__creator) {
        return /** @class */ (function (_super) {
            __extends(TaskListView_itemTemplate_1, _super);
            function TaskListView_itemTemplate_1() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TaskListView_itemTemplate_1.prototype.create = function () {
                var _this = this;
                _super.prototype.create.call(this);
                ;
                this.element = document.createElement("div");
                this.setPrimitiveValue(this.element, "class", "item");
                var e1 = document.createTextNode("\r\n\r\n            ");
                this.element.appendChild(e1);
                var e2 = document.createElement("span");
                this.append(e2);
                this.runAfterInit(function () {
                    return _this.setLocalValue(e2, "text", (_this.data.label));
                });
                var e3 = document.createTextNode("\r\n\r\n            ");
                this.element.appendChild(e3);
                var e4 = document.createElement("button");
                this.append(e4);
                this.bind(e4, "styleClass", [["this", "controlStyle", "saveButton"]], false, function (v1) { return (v1); }, __creator);
                this.runAfterInit(function () {
                    return _this.setLocalValue(e4, "eventClick", function () { return (_this.viewModel).deleteTask((_this.data)); });
                });
                var e5 = document.createTextNode("Delete");
                e4.appendChild(e5);
                var e6 = document.createTextNode("\r\n        ");
                this.element.appendChild(e6);
            };
            return TaskListView_itemTemplate_1;
        }(AtomControl_1.AtomControl));
    }
});
//# sourceMappingURL=TaskListView.js.map