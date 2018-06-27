"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable
var AtomGridSplitter_1 = require("web-atoms-core/bin/web/controls/AtomGridSplitter");
var AtomListBox_1 = require("web-atoms-core/bin/web/controls/AtomListBox");
var AtomGridView_1 = require("web-atoms-core/bin/web/controls/AtomGridView");
var AtomControl_1 = require("web-atoms-core/bin/web/controls/AtomControl");
var TaskListViewModel_1 = require("../view-models/TaskListViewModel");
var TaskEditorViewModel_1 = require("../view-models/TaskEditorViewModel");
var TaskEditor_1 = require("./TaskEditor");
var TaskListView = /** @class */ (function (_super) {
    __extends(TaskListView, _super);
    function TaskListView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TaskListView.prototype.create = function () {
        var _this = this;
        _super.prototype.create.call(this);
        this.element = document.createElement("div");
        var e1 = document.createTextNode("\r\n\r\n    ");
        this.element.appendChild(e1);
        var e2 = document.createElement("header");
        this.append(e2);
        this.setPrimitiveValue(e2, "cell", "0:3,0");
        var e3 = document.createTextNode("\r\n        ");
        e2.appendChild(e3);
        var e4 = document.createElement("button");
        e2.appendChild(e4);
        this.runAfterInit(function () {
            return _this.setLocalValue(e4, "eventClick", function () { return (_this.viewModel).addTask(); });
        });
        var e5 = document.createTextNode("Add New Task");
        e4.appendChild(e5);
        var e6 = document.createTextNode("\r\n    ");
        e2.appendChild(e6);
        var e7 = document.createTextNode("\r\n\r\n    ");
        this.element.appendChild(e7);
        var e8 = new AtomGridSplitter_1.AtomGridSplitter(this.app, document.createElement("div"));
        e8.setPrimitiveValue(e8.element, "cell", "1,1");
        e8.setPrimitiveValue(e8.element, "direction", "vertical");
        this.append(e8);
        var e9 = document.createTextNode("\r\n\r\n    ");
        this.element.appendChild(e9);
        var e10 = new AtomListBox_1.AtomListBox(this.app, document.createElement("div"));
        var e11 = document.createTextNode("\r\n        ");
        e10.element.appendChild(e11);
        var e12 = document.createTextNode("\r\n    ");
        e10.element.appendChild(e12);
        e10.setPrimitiveValue(e10.element, "cell", "0,1");
        e10.setPrimitiveValue(e10.element, "dock", "Left");
        e10.runAfterInit(function () {
            return e10.setLocalValue(e10.element, "items", (_this.viewModel.list));
        });
        e10.bind(e10.element, "selectedItem", [["viewModel", "selectedTask"]], true);
        e10.itemTemplate = TaskListView_itemTemplate_1;
        this.append(e10);
        var e13 = document.createTextNode("\r\n\r\n    ");
        this.element.appendChild(e13);
        var e14 = new TaskEditor_1.TaskEditor(this.app, document.createElement("section"));
        var e15 = document.createTextNode("\r\n \r\n    ");
        e14.element.appendChild(e15);
        e14.setPrimitiveValue(e14.element, "cell", "2,1");
        e14.setPrimitiveValue(e14.element, "viewModel", this.resolve(TaskEditorViewModel_1.TaskEditorViewModel));
        e14.bind(e14.element, "styleDisplay", [["viewModel", "task"]], false, function (v1) { return (v1) ? '' : 'none'; });
        this.append(e14);
        var e16 = document.createTextNode("\r\n\r\n");
        this.element.appendChild(e16);
        this.setPrimitiveValue(this.element, "class", "task-list");
        this.setPrimitiveValue(this.element, "columns", "30%, 5, *");
        this.setPrimitiveValue(this.element, "rows", "50, *");
        this.setPrimitiveValue(this.element, "viewModel", this.resolve(TaskListViewModel_1.TaskListViewModel));
    };
    return TaskListView;
}(AtomGridView_1.AtomGridView));
exports.TaskListView = TaskListView;
var TaskListView_itemTemplate_1 = /** @class */ (function (_super) {
    __extends(TaskListView_itemTemplate_1, _super);
    function TaskListView_itemTemplate_1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TaskListView_itemTemplate_1.prototype.create = function () {
        var _this = this;
        _super.prototype.create.call(this);
        this.element = document.createElement("div");
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
        this.runAfterInit(function () {
            return _this.setLocalValue(e4, "eventClick", function () { return (_this.viewModel).deleteTask((_this.data)); });
        });
        var e5 = document.createTextNode("Delete");
        e4.appendChild(e5);
        var e6 = document.createTextNode("\r\n        ");
        this.element.appendChild(e6);
        this.setPrimitiveValue(this.element, "class", "item");
    };
    return TaskListView_itemTemplate_1;
}(AtomControl_1.AtomControl));
//# sourceMappingURL=TaskListView.js.map