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
        define(["require", "exports", "web-atoms-core/bin/controls/AtomListBox", "web-atoms-core/bin/controls/AtomDockPanel", "web-atoms-core/bin/controls/AtomControl", "../view-models/TaskListViewModel", "../view-models/TaskEditorViewModel", "./TaskEditor"], factory);
    }
})(function (require, exports) {
    "use strict";
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
            _super.prototype.create.call(this);
            this.element = document.createElement("div");
            var e1 = document.createTextNode("\r\n\r\n    ");
            this.append(e1);
            var e2 = document.createElement("header");
            this.append(e2);
            var e7 = document.createTextNode("\r\n\r\n    ");
            this.append(e7);
            var e8 = new AtomListBox_1.AtomListBox(document.createElement("div"));
            var e9 = document.createTextNode("\r\n        ");
            e8.append(e9);
            var e10 = document.createTextNode("\r\n    ");
            e8.append(e10);
            e8.setLocalValue(e8.element, "atom-dock", "Left");
            e8.setLocalValue(e8.element, "atom-items", (this.getValue("viewModel.list")));
            e8.bind(e8.element, "atom-selected-item", [["viewModel", "selectedTask"]], true);
            e8.itemTemplate = TaskListView_itemTemplate_1;
            this.append(e8);
            var e11 = document.createTextNode("\r\n\r\n    ");
            this.append(e11);
            var e12 = new TaskEditor_1.TaskEditor(document.createElement("section"));
            var e13 = document.createTextNode("\r\n \r\n    ");
            e12.append(e13);
            e12.setLocalValue(e12.element, "atom-view-model", this.resolve(TaskEditorViewModel_1.TaskEditorViewModel));
            e12.bind(e12.element, "style-display", [["viewModel", "task"]], false, function (v1) { return (v1) ? '' : 'none'; });
            this.append(e12);
            var e14 = document.createTextNode("\r\n\r\n");
            this.append(e14);
            this.setLocalValue(this.element, "class", "task-list");
            this.setLocalValue(this.element, "atom-view-model", this.resolve(TaskListViewModel_1.TaskListViewModel));
            this.init();
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
            this.append(e1);
            var e2 = document.createElement("span");
            this.append(e2);
            this.setLocalValue(e2, "atom-text", (this.getValue("data.label")));
            var e3 = document.createTextNode("\r\n\r\n            ");
            this.append(e3);
            var e4 = document.createElement("button");
            this.append(e4);
            this.setLocalValue(e4, "event-click", function () { return (_this.getValue("viewModel")).deleteTask((_this.getValue("data"))); });
            var e6 = document.createTextNode("\r\n        ");
            this.append(e6);
            this.setLocalValue(this.element, "class", "item");
            this.init();
        };
        return TaskListView_itemTemplate_1;
    }(AtomControl_1.AtomControl));
});
//# sourceMappingURL=TaskListView.js.map