// tslint:disable
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
        define(["require", "exports", "web-atoms-core/bin/controls/AtomComboBox", "../services/ConfigService"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AtomComboBox_1 = require("web-atoms-core/bin/controls/AtomComboBox");
    var ConfigService_1 = require("../services/ConfigService");
    var TaskStatusCombo = /** @class */ (function (_super) {
        __extends(TaskStatusCombo, _super);
        function TaskStatusCombo() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TaskStatusCombo.prototype.create = function () {
            _super.prototype.create.call(this);
            this.element = document.createElement("select");
            var e1 = document.createTextNode("\r\n");
            this.append(e1);
            this.setLocalValue(this.element, "atom-component", "TaskStatusCombo");
            this.setLocalValue(this.element, "atom-items", ConfigService_1.ConfigService.instance.getStatusList());
        };
        return TaskStatusCombo;
    }(AtomComboBox_1.AtomComboBox));
    exports.TaskStatusCombo = TaskStatusCombo;
});
//# sourceMappingURL=TaskStatusCombo.js.map