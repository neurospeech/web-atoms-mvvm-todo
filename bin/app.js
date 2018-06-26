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
var Atom_1 = require("web-atoms-core/bin/Atom");
var NavigationService_1 = require("web-atoms-core/bin/services/NavigationService");
var WebApp_1 = require("web-atoms-core/bin/WebApp");
var ConfigService_1 = require("./services/ConfigService");
var MockConfigService_1 = require("./services/MockConfigService");
var MockTaskListService_1 = require("./services/MockTaskListService");
var TaskListService_1 = require("./services/TaskListService");
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
        SampleApp.current = this;
        Atom_1.Atom.designMode = true;
        var windowService = this.resolve(NavigationService_1.NavigationService);
        windowService.register("NewTaskWindow", NewTaskWindow_1.NewTaskWindow);
        windowService.register("LoginView", LoginView_1.LoginView);
        windowService.register("TaskListView", TaskListView_1.TaskListView);
        windowService.register("UserSelector", UserSelector_1.UserSelector);
        if (Atom_1.Atom.designMode) {
            this.put(ConfigService_1.ConfigService, new MockConfigService_1.MockConfigService());
            this.put(TaskListService_1.TaskListService, new MockTaskListService_1.MockTaskListService());
        }
        var appFrame = new AppFrame_1.AppFrame(this);
        document.body.appendChild(appFrame.element);
    };
    SampleApp.current = null;
    return SampleApp;
}(WebApp_1.WebApp));
exports.SampleApp = SampleApp;
var app = new SampleApp();
//# sourceMappingURL=app.js.map