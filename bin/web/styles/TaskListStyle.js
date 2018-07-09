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
        define(["require", "exports", "web-atoms-core/bin/web/styles/AtomStyle", "../../ModuleFiles"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AtomStyle_1 = require("web-atoms-core/bin/web/styles/AtomStyle");
    var ModuleFiles_1 = require("../../ModuleFiles");
    var TaskListStyle = /** @class */ (function (_super) {
        __extends(TaskListStyle, _super);
        function TaskListStyle() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.saveButton = _this.createClass("button", {
                fontWeight: "bold",
                color: "green"
            });
            _this.addButton = _this.createClass("add-button", {
                backgroundImage: "url(" + ModuleFiles_1.ModuleFiles.src.images.AddIcon_svg + ")",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                paddingLeft: "20px"
            });
            return _this;
        }
        return TaskListStyle;
    }(AtomStyle_1.AtomStyle));
    exports.TaskListStyle = TaskListStyle;
});
//# sourceMappingURL=TaskListStyle.js.map