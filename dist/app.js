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
        define(["require", "exports", "web-atoms-core/dist/Atom", "web-atoms-core/dist/services/JsonService", "web-atoms-core/dist/web/WebApp", "./services/ConfigService", "./services/mocks/MockConfigService", "./services/mocks/MockTaskListService", "./services/TaskListService", "./web/styles/AppTheme", "./web/views/AppFrame"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Atom_1 = require("web-atoms-core/dist/Atom");
    var JsonService_1 = require("web-atoms-core/dist/services/JsonService");
    var WebApp_1 = require("web-atoms-core/dist/web/WebApp");
    var ConfigService_1 = require("./services/ConfigService");
    var MockConfigService_1 = require("./services/mocks/MockConfigService");
    var MockTaskListService_1 = require("./services/mocks/MockTaskListService");
    var TaskListService_1 = require("./services/TaskListService");
    var AppTheme_1 = require("./web/styles/AppTheme");
    var AppFrame_1 = require("./web/views/AppFrame");
    var SampleApp = /** @class */ (function (_super) {
        __extends(SampleApp, _super);
        function SampleApp() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SampleApp.prototype.main = function () {
            Atom_1.Atom.designMode = true;
            if (Atom_1.Atom.designMode) {
                this.put(ConfigService_1.ConfigService, new MockConfigService_1.MockConfigService(this.resolve(JsonService_1.JsonService)));
                this.put(TaskListService_1.TaskListService, new MockTaskListService_1.MockTaskListService(this.resolve(JsonService_1.JsonService)));
            }
            this.theme = this.resolve(AppTheme_1.AppTheme);
            var appFrame = new AppFrame_1.default(this);
            document.body.appendChild(appFrame.element);
        };
        return SampleApp;
    }(WebApp_1.default));
    exports.SampleApp = SampleApp;
    var app = new SampleApp();
});
//# sourceMappingURL=app.js.map