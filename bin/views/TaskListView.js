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
var AtomListBox_1 = require("web-atoms-core/bin/controls/AtomListBox");
var AtomDockPanel_1 = require("web-atoms-core/bin/controls/AtomDockPanel");
var AtomControl_1 = require("web-atoms-core/bin/controls/AtomControl");
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
        var e3 = document.createTextNode("\r\n        ");
        e2.appendChild(e3);
        var e4 = document.createElement("button");
        this.append(e4);
        this.runAfterInit(function () {
            return _this.setLocalValue(e4, "eventClick", function () { return (_this.viewModel).addTask(); });
        });
        var e5 = document.createTextNode("Add New Task");
        e4.appendChild(e5);
        var e6 = document.createTextNode("\r\n    ");
        e2.appendChild(e6);
        var e7 = document.createTextNode("\r\n\r\n    ");
        this.element.appendChild(e7);
        var e8 = new AtomListBox_1.AtomListBox(document.createElement("div"));
        var e9 = document.createTextNode("\r\n        ");
        e8.element.appendChild(e9);
        var e10 = document.createTextNode("\r\n    ");
        e8.element.appendChild(e10);
        e8.runAfterInit(function () {
            return e8.setLocalValue(e8.element, "dock", "Left");
        });
        e8.runAfterInit(function () {
            return e8.setLocalValue(e8.element, "items", (_this.viewModel.list));
        });
        e8.bind(e8.element, "selectedItem", [["viewModel", "selectedTask"]], true);
        e8.itemTemplate = TaskListView_itemTemplate_1;
        this.append(e8);
        var e11 = document.createTextNode("\r\n\r\n    ");
        this.element.appendChild(e11);
        var e12 = new TaskEditor_1.TaskEditor(document.createElement("section"));
        var e13 = document.createTextNode("\r\n \r\n    ");
        e12.element.appendChild(e13);
        e12.viewModel = this.resolve(TaskEditorViewModel_1.TaskEditorViewModel);
        e12.bind(e12.element, "styleDisplay", [["viewModel", "task"]], false, function (v1) { return (v1) ? '' : 'none'; });
        this.append(e12);
        var e14 = document.createTextNode("\r\n\r\n");
        this.element.appendChild(e14);
        this.runAfterInit(function () {
            return _this.setLocalValue(_this.element, "class", "task-list");
        });
        this.viewModel = this.resolve(TaskListViewModel_1.TaskListViewModel);
    };
    return TaskListView;
}(AtomDockPanel_1.AtomDockPanel));
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
        this.runAfterInit(function () {
            return _this.setLocalValue(_this.element, "class", "item");
        });
    };
    return TaskListView_itemTemplate_1;
}(AtomControl_1.AtomControl));
//# sourceMappingURL=TaskListView.js.map