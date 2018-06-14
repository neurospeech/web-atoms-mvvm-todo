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
var App_1 = require("web-atoms-core/bin/App");
var Atom_1 = require("web-atoms-core/bin/Atom");
var di_1 = require("web-atoms-core/bin/di");
var WindowService_1 = require("web-atoms-core/bin/services/WindowService");
var AppFrameViewModel_1 = require("./view-models/AppFrameViewModel");
var AppFrame_1 = require("./views/AppFrame");
var LoginView_1 = require("./views/LoginView");
var NewTaskWindow_1 = require("./views/NewTaskWindow");
var TaskListView_1 = require("./views/TaskListView");
var UserSelector_1 = require("./views/UserSelector");
var SampleApp = /** @class */ (function (_super) {
    __extends(SampleApp, _super);
    function SampleApp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SampleApp.prototype.main = function () {
        Atom_1.Atom.designMode = true;
        var windowService = di_1.ServiceProvider.global.get(WindowService_1.WindowService);
        windowService.register("NewTaskWindow", NewTaskWindow_1.NewTaskWindow);
        windowService.register("LoginView", LoginView_1.LoginView);
        windowService.register("TaskListView", TaskListView_1.TaskListView);
        windowService.register("UserSelector", UserSelector_1.UserSelector);
        var appFrame = di_1.ServiceProvider.global.get(AppFrame_1.AppFrame);
        var vm = di_1.ServiceProvider.global.get(AppFrameViewModel_1.AppFrameViewModel);
        appFrame.viewModel = vm;
        document.body.appendChild(appFrame.element);
    };
    return SampleApp;
}(App_1.App));
exports.SampleApp = SampleApp;
var app = new SampleApp();
//# sourceMappingURL=app.js.map