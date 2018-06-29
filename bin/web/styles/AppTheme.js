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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var RegisterSingleton_1 = require("web-atoms-core/bin/di/RegisterSingleton");
var AtomTheme_1 = require("web-atoms-core/bin/web/styles/AtomTheme");
var TaskEditor_1 = require("../views/TaskEditor");
var TaskEditorStyle_1 = require("./TaskEditorStyle");
var AppTheme = /** @class */ (function (_super) {
    __extends(AppTheme, _super);
    function AppTheme() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.taskEditor = _this.createStyle(TaskEditor_1.TaskEditor, TaskEditorStyle_1.TaskEditorStyle, "editor");
        return _this;
    }
    AppTheme = __decorate([
        RegisterSingleton_1.RegisterSingleton
    ], AppTheme);
    return AppTheme;
}(AtomTheme_1.AtomTheme));
exports.AppTheme = AppTheme;
//# sourceMappingURL=AppTheme.js.map