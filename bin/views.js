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
        define(["require", "exports", "web-atoms-core/bin/controls/AtomControl"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AtomControl_1 = require("web-atoms-core/bin/controls/AtomControl");
    var LoginView = /** @class */ (function (_super) {
        __extends(LoginView, _super);
        function LoginView() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        LoginView.prototype.create = function () {
            _super.prototype.create.call(this);
            this.element = document.createElement("div");
            var e1 = document.createTextNode("\r\n\t");
            this.appendChild(e1);
            var e2 = document.createElement("form-layout");
            this.appendChild(e2);
            var e11 = document.createTextNode("\r\n");
            this.appendChild(e11);
            this.setLocalValue(this.element, "atom-view-model", Atom.get(new Todo.LoginViewModel()));
        };
        return LoginView;
    }(AtomControl_1.AtomControl));
    var NewTaskWindow = /** @class */ (function (_super) {
        __extends(NewTaskWindow, _super);
        function NewTaskWindow() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        NewTaskWindow.prototype.create = function () {
            _super.prototype.create.call(this);
            this.element = document.createElement("div");
            var e1 = document.createTextNode("\r\n    ");
            this.appendChild(e1);
            var e2 = document.createTextNode("\r\n    ");
            this.appendChild(e2);
            var e3 = document.createTextNode("\r\n");
            this.appendChild(e3);
            this.setLocalValue(this.element, "atom-component", "NewTaskWindow");
            this.bind(this.element, "atom-title", [["viewModel", "task", "label"], ["viewModel", "task", "label"]], false, function (v1, v2) { return (v1) ? ('Task ' + (v2)) : 'Add New Task'; });
            this.setLocalValue(this.element, "atom-window-width", "400");
            this.setLocalValue(this.element, "atom-window-height", "400");
            this.windowTemplate = NewTaskWindow_windowTemplate_1;
            this.commandTemplate = NewTaskWindow_commandTemplate_2;
        };
        return NewTaskWindow;
    }(AtomControl_1.AtomControl));
    var NewTaskWindow_windowTemplate_1 = /** @class */ (function (_super) {
        __extends(NewTaskWindow_windowTemplate_1, _super);
        function NewTaskWindow_windowTemplate_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        NewTaskWindow_windowTemplate_1.prototype.create = function () {
            _super.prototype.create.call(this);
            this.element = document.createElement("div");
            var e1 = document.createTextNode("\r\n        \r\n        ");
            this.appendChild(e1);
            var e2 = new Todo.TaskEditor(document.createElement("div"));
            this.appendChild(e2);
            var e3 = document.createTextNode("\r\n\r\n    ");
            this.appendChild(e3);
        };
        return NewTaskWindow_windowTemplate_1;
    }(AtomControl_1.AtomControl));
    var NewTaskWindow_commandTemplate_2 = /** @class */ (function (_super) {
        __extends(NewTaskWindow_commandTemplate_2, _super);
        function NewTaskWindow_commandTemplate_2() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        NewTaskWindow_commandTemplate_2.prototype.create = function () {
            _super.prototype.create.call(this);
            this.element = document.createElement("div");
            var e1 = document.createTextNode("\r\n        ");
            this.appendChild(e1);
            var e2 = document.createElement("button");
            this.appendChild(e2);
            this.setLocalValue(e2, "atom-event-click", Atom.get(function () {
                return (Atom.get(this, "viewModel")).save();
            }));
            var e4 = document.createTextNode("\r\n        ");
            this.appendChild(e4);
            var e5 = document.createElement("button");
            this.appendChild(e5);
            this.setLocalValue(e5, "atom-event-click", Atom.get(function () {
                return (Atom.get(this, "viewModel")).cancel();
            }));
            var e7 = document.createTextNode("\r\n    ");
            this.appendChild(e7);
        };
        return NewTaskWindow_commandTemplate_2;
    }(AtomControl_1.AtomControl));
    var TaskListView = /** @class */ (function (_super) {
        __extends(TaskListView, _super);
        function TaskListView() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TaskListView.prototype.create = function () {
            _super.prototype.create.call(this);
            this.element = document.createElement("div");
            var e1 = document.createTextNode("\r\n\r\n    ");
            this.appendChild(e1);
            var e2 = document.createElement("header");
            this.appendChild(e2);
            var e7 = document.createTextNode("\r\n\r\n    ");
            this.appendChild(e7);
            var e8 = new AtomListBox(document.createElement("div"));
            var e9 = document.createTextNode("\r\n        ");
            e8.appendChild(e9);
            var e10 = document.createTextNode("\r\n    ");
            e8.appendChild(e10);
            e8.setLocalValue(e8.element, "atom-dock", "Left");
            e8.setLocalValue(e8.element, "atom-items", Atom.get((Atom.get(this, "viewModel.list"))));
            e8.bind(e8.element, "atom-selected-item", ["viewModel", "selectedTask"], 1);
            e8.itemTemplate = TaskListView_itemTemplate_1;
            this.appendChild(e8);
            var e11 = document.createTextNode("\r\n\r\n    ");
            this.appendChild(e11);
            var e12 = new Todo.TaskEditor(document.createElement("section"));
            var e13 = document.createTextNode("\r\n \r\n    ");
            e12.appendChild(e13);
            e12.setLocalValue(e12.element, "atom-view-model", Atom.get(new Todo.TaskEditorViewModel()));
            e12.bind(e12.element, "style-display", [["viewModel", "task"]], false, function (v1) { return (v1) ? '' : 'none'; });
            this.appendChild(e12);
            var e14 = document.createTextNode("\r\n\r\n");
            this.appendChild(e14);
            this.setLocalValue(this.element, "class", "task-list");
            this.setLocalValue(this.element, "atom-view-model", Atom.get(new Todo.TaskListViewModel()));
        };
        return TaskListView;
    }(AtomControl_1.AtomControl));
    var TaskListView_itemTemplate_1 = /** @class */ (function (_super) {
        __extends(TaskListView_itemTemplate_1, _super);
        function TaskListView_itemTemplate_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TaskListView_itemTemplate_1.prototype.create = function () {
            _super.prototype.create.call(this);
            this.element = document.createElement("div");
            var e1 = document.createTextNode("\r\n\r\n            ");
            this.appendChild(e1);
            var e2 = document.createElement("span");
            this.appendChild(e2);
            this.setLocalValue(e2, "atom-text", Atom.get((Atom.get(this, "data.label"))));
            var e3 = document.createTextNode("\r\n\r\n            ");
            this.appendChild(e3);
            var e4 = new AtomDeleteButton(document.createElement("button"));
            var e5 = document.createTextNode("Delete");
            e4.appendChild(e5);
            e4.setLocalValue(e4.element, "atom-next", Atom.get(function () {
                return (Atom.get(this, "viewModel")).deleteTask((Atom.get(this, "data")));
            }));
            this.appendChild(e4);
            var e6 = document.createTextNode("\r\n        ");
            this.appendChild(e6);
            this.setLocalValue(this.element, "class", "item");
        };
        return TaskListView_itemTemplate_1;
    }(AtomControl_1.AtomControl));
    var TaskStatusCombo = /** @class */ (function (_super) {
        __extends(TaskStatusCombo, _super);
        function TaskStatusCombo() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TaskStatusCombo.prototype.create = function () {
            _super.prototype.create.call(this);
            this.element = document.createElement("select");
            var e1 = document.createTextNode("\r\n");
            this.appendChild(e1);
            this.setLocalValue(this.element, "atom-component", "TaskStatusCombo");
            this.setLocalValue(this.element, "atom-items", Atom.get(Todo.ConfigService.instance.getStatusList()));
        };
        return TaskStatusCombo;
    }(AtomControl_1.AtomControl));
    var AppFrame = /** @class */ (function (_super) {
        __extends(AppFrame, _super);
        function AppFrame() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AppFrame.prototype.create = function () {
            _super.prototype.create.call(this);
            this.element = document.createElement("section");
            var e1 = document.createTextNode("\r\n\r\n    ");
            this.appendChild(e1);
            var e2 = new AtomPageView(document.createElement("section"));
            var e3 = document.createTextNode("\r\n    ");
            e2.appendChild(e3);
            e2.bind(e2.element, "atom-url", [["localViewModel", "url"]], false, function (v1) { return (v1); });
            this.appendChild(e2);
            var e4 = document.createTextNode("\r\n\r\n");
            this.appendChild(e4);
            this.setLocalValue(this.element, "atom-local-view-model", Atom.get(new Todo.AppFrameViewModel()));
        };
        return AppFrame;
    }(AtomControl_1.AtomControl));
    var UserSelector = /** @class */ (function (_super) {
        __extends(UserSelector, _super);
        function UserSelector() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        UserSelector.prototype.create = function () {
            _super.prototype.create.call(this);
            this.element = document.createElement("div");
            var e1 = document.createTextNode("\r\n\t");
            this.appendChild(e1);
            var e2 = document.createElement("div");
            this.appendChild(e2);
            this.setLocalValue(e2, "style", "background: white; padding:5px; border: solid lightgray 1px;");
            var e10 = document.createTextNode("\r\n");
            this.appendChild(e10);
        };
        return UserSelector;
    }(AtomControl_1.AtomControl));
    var UserSelector_itemTemplate_1 = /** @class */ (function (_super) {
        __extends(UserSelector_itemTemplate_1, _super);
        function UserSelector_itemTemplate_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        UserSelector_itemTemplate_1.prototype.create = function () {
            _super.prototype.create.call(this);
            this.element = document.createElement("div");
            var e1 = document.createTextNode("\r\n\t\t\t\t");
            this.appendChild(e1);
            var e2 = document.createElement("span");
            this.appendChild(e2);
            this.setLocalValue(e2, "atom-text", Atom.get((Atom.get(this, "data.label"))));
            var e3 = document.createTextNode("\r\n\t\t\t");
            this.appendChild(e3);
            this.setLocalValue(this.element, "atom-event-click", Atom.get(function () {
                return (Atom.get(this, "viewModel")).select((Atom.get(this, "data")));
            }));
        };
        return UserSelector_itemTemplate_1;
    }(AtomControl_1.AtomControl));
    var TaskEditor = /** @class */ (function (_super) {
        __extends(TaskEditor, _super);
        function TaskEditor() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TaskEditor.prototype.create = function () {
            _super.prototype.create.call(this);
            this.element = document.createElement("div");
            var e1 = document.createTextNode("\r\n\r\n\t");
            this.appendChild(e1);
            var e2 = document.createElement("undefined");
            this.appendChild(e2);
            var e3 = document.createTextNode("\r\n\r\n\t");
            this.appendChild(e3);
            var e4 = document.createElement("undefined");
            this.appendChild(e4);
            var e5 = document.createTextNode("\r\n\r\n\t");
            this.appendChild(e5);
            var e6 = document.createElement("undefined");
            this.appendChild(e6);
            var e7 = document.createTextNode("\r\n\t");
            this.appendChild(e7);
            var e8 = document.createElement("form-layout");
            this.appendChild(e8);
            var e32 = document.createTextNode("\r\n\r\n");
            this.appendChild(e32);
            this.setLocalValue(this.element, "atom-component", "TaskEditor");
        };
        return TaskEditor;
    }(AtomControl_1.AtomControl));
});
//# sourceMappingURL=views.js.map