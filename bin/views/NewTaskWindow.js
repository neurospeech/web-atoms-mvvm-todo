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
        define(["require", "exports", "web-atoms-core/bin/controls/AtomWindow", "web-atoms-core/bin/controls/AtomControl", "./TaskEditor"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // tslint:disable
    var AtomWindow_1 = require("web-atoms-core/bin/controls/AtomWindow");
    var AtomControl_1 = require("web-atoms-core/bin/controls/AtomControl");
    var TaskEditor_1 = require("./TaskEditor");
    var NewTaskWindow = /** @class */ (function (_super) {
        __extends(NewTaskWindow, _super);
        function NewTaskWindow() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        NewTaskWindow.prototype.create = function () {
            _super.prototype.create.call(this);
            this.element = document.createElement("div");
            var e1 = document.createTextNode("\r\n    ");
            this.append(e1);
            var e2 = document.createTextNode("\r\n    ");
            this.append(e2);
            var e3 = document.createTextNode("\r\n");
            this.append(e3);
            this.setLocalValue(this.element, "atom-component", "NewTaskWindow");
            this.bind(this.element, "atom-title", [["viewModel", "task", "label"], ["viewModel", "task", "label"]], false, function (v1, v2) { return (v1) ? ('Task ' + (v2)) : 'Add New Task'; });
            this.setLocalValue(this.element, "atom-window-width", "400");
            this.setLocalValue(this.element, "atom-window-height", "400");
            this.windowTemplate = NewTaskWindow_windowTemplate_1;
            this.commandTemplate = NewTaskWindow_commandTemplate_2;
        };
        return NewTaskWindow;
    }(AtomWindow_1.AtomWindow));
    exports.NewTaskWindow = NewTaskWindow;
    var NewTaskWindow_windowTemplate_1 = /** @class */ (function (_super) {
        __extends(NewTaskWindow_windowTemplate_1, _super);
        function NewTaskWindow_windowTemplate_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        NewTaskWindow_windowTemplate_1.prototype.create = function () {
            _super.prototype.create.call(this);
            this.element = document.createElement("div");
            var e1 = document.createTextNode("\r\n        \r\n        ");
            this.append(e1);
            var e2 = new TaskEditor_1.TaskEditor(document.createElement("div"));
            this.append(e2);
            var e3 = document.createTextNode("\r\n\r\n    ");
            this.append(e3);
        };
        return NewTaskWindow_windowTemplate_1;
    }(AtomControl_1.AtomControl));
    var NewTaskWindow_commandTemplate_2 = /** @class */ (function (_super) {
        __extends(NewTaskWindow_commandTemplate_2, _super);
        function NewTaskWindow_commandTemplate_2() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        NewTaskWindow_commandTemplate_2.prototype.create = function () {
            var _this = this;
            _super.prototype.create.call(this);
            this.element = document.createElement("div");
            var e1 = document.createTextNode("\r\n        ");
            this.append(e1);
            var e2 = document.createElement("button");
            this.append(e2);
            this.setLocalValue(e2, "atom-event-click", function () { return (_this.getValue("viewModel")).save(); });
            var e4 = document.createTextNode("\r\n        ");
            this.append(e4);
            var e5 = document.createElement("button");
            this.append(e5);
            this.setLocalValue(e5, "atom-event-click", function () { return (_this.getValue("viewModel")).cancel(); });
            var e7 = document.createTextNode("\r\n    ");
            this.append(e7);
        };
        return NewTaskWindow_commandTemplate_2;
    }(AtomControl_1.AtomControl));
});
//# sourceMappingURL=NewTaskWindow.js.map