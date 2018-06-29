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
var AtomStyle_1 = require("web-atoms-core/bin/web/styles/AtomStyle");
var TaskEditorStyle = /** @class */ (function (_super) {
    __extends(TaskEditorStyle, _super);
    function TaskEditorStyle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.saveButton = _this.createClass("button", {
            fontFamily: "bold"
        });
        return _this;
    }
    return TaskEditorStyle;
}(AtomStyle_1.AtomStyle));
exports.TaskEditorStyle = TaskEditorStyle;
//# sourceMappingURL=TaskEditorStyle.js.map