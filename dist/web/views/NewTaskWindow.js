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
        define(["require", "exports", "web-atoms-core/dist/web/controls/AtomWindow", "web-atoms-core/dist/web/controls/AtomControl", "../../view-models/TaskEditorViewModel", "./TaskEditor"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AtomWindow_1 = require("web-atoms-core/dist/web/controls/AtomWindow");
    var AtomControl_1 = require("web-atoms-core/dist/web/controls/AtomControl");
    var TaskEditorViewModel_1 = require("../../view-models/TaskEditorViewModel");
    var TaskEditor_1 = require("./TaskEditor");
    var NewTaskWindow = /** @class */ (function (_super) {
        __extends(NewTaskWindow, _super);
        function NewTaskWindow() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        NewTaskWindow.prototype.create = function () {
            _super.prototype.create.call(this);
            var __creator = this;
            this.viewModel = this.resolve(TaskEditorViewModel_1.TaskEditorViewModel);
            this.bind(this.element, "title", [["viewModel", "task", "label"], ["viewModel", "task", "label"]], false, function (v1, v2) { return (v1) ? ('Task ' + (v2)) : 'Add New Task'; });
            this.setPrimitiveValue(this.element, "width", "400px");
            this.setPrimitiveValue(this.element, "height", "400px");
            this.windowTemplate = NewTaskWindow_windowTemplate_1Creator(this);
            this.commandTemplate = NewTaskWindow_commandTemplate_2Creator(this);
            var e1 = document.createTextNode("\r\n    ");
            this.element.appendChild(e1);
            var e2 = document.createTextNode("\r\n    ");
            this.element.appendChild(e2);
            var e3 = document.createTextNode("\r\n");
            this.element.appendChild(e3);
        };
        return NewTaskWindow;
    }(AtomWindow_1.AtomWindow));
    exports.default = NewTaskWindow;
    function NewTaskWindow_windowTemplate_1Creator(__creator) {
        return /** @class */ (function (_super) {
            __extends(NewTaskWindow_windowTemplate_1, _super);
            function NewTaskWindow_windowTemplate_1() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            NewTaskWindow_windowTemplate_1.prototype.create = function () {
                _super.prototype.create.call(this);
                ;
                this.element = document.createElement("div");
                var e1 = document.createTextNode("\r\n        \r\n        ");
                this.element.appendChild(e1);
                var e2 = new TaskEditor_1.default(this.app);
                this.append(e2);
                var e3 = document.createTextNode("\r\n\r\n    ");
                this.element.appendChild(e3);
            };
            return NewTaskWindow_windowTemplate_1;
        }(AtomControl_1.AtomControl));
    }
    function NewTaskWindow_commandTemplate_2Creator(__creator) {
        return /** @class */ (function (_super) {
            __extends(NewTaskWindow_commandTemplate_2, _super);
            function NewTaskWindow_commandTemplate_2() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            NewTaskWindow_commandTemplate_2.prototype.create = function () {
                var _this = this;
                _super.prototype.create.call(this);
                ;
                this.element = document.createElement("div");
                var e1 = document.createTextNode("\r\n        ");
                this.element.appendChild(e1);
                var e2 = document.createElement("button");
                this.append(e2);
                this.runAfterInit(function () {
                    return _this.setLocalValue(e2, "eventClick", function () { return (_this.viewModel).save(); });
                });
                var e3 = document.createTextNode("Save");
                e2.appendChild(e3);
                var e4 = document.createTextNode("\r\n        ");
                this.element.appendChild(e4);
                var e5 = document.createElement("button");
                this.append(e5);
                this.runAfterInit(function () {
                    return _this.setLocalValue(e5, "eventClick", function () { return (_this.viewModel).cancel(); });
                });
                var e6 = document.createTextNode("Cancel");
                e5.appendChild(e6);
                var e7 = document.createTextNode("\r\n    ");
                this.element.appendChild(e7);
            };
            return NewTaskWindow_commandTemplate_2;
        }(AtomControl_1.AtomControl));
    }
});
//# sourceMappingURL=NewTaskWindow.js.map