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
    // tslint:disable
    var AtomControl_1 = require("web-atoms-core/bin/controls/AtomControl");
    var TaskEditor = /** @class */ (function (_super) {
        __extends(TaskEditor, _super);
        function TaskEditor() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TaskEditor.prototype.create = function () {
            _super.prototype.create.call(this);
            this.element = document.createElement("div");
            var e1 = document.createTextNode("\r\n\r\n\t");
            this.append(e1);
            var e2 = document.createElement("undefined");
            this.append(e2);
            var e3 = document.createTextNode("\r\n\r\n\t");
            this.append(e3);
            var e4 = document.createElement("undefined");
            this.append(e4);
            var e5 = document.createTextNode("\r\n\r\n\t");
            this.append(e5);
            var e6 = document.createElement("undefined");
            this.append(e6);
            var e7 = document.createTextNode("\r\n\t");
            this.append(e7);
            var e8 = document.createElement("form-layout");
            this.append(e8);
            var e32 = document.createTextNode("\r\n\r\n");
            this.append(e32);
            this.setLocalValue(this.element, "atom-component", "TaskEditor");
        };
        return TaskEditor;
    }(AtomControl_1.AtomControl));
    exports.TaskEditor = TaskEditor;
});
//# sourceMappingURL=TaskEditor.js.map