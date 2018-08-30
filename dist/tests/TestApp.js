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
        define(["require", "exports", "web-atoms-core/dist/MockApp", "web-atoms-core/dist/services/JsonService", "../services/mocks/MockTaskListService", "../services/TaskListService"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MockApp_1 = require("web-atoms-core/dist/MockApp");
    var JsonService_1 = require("web-atoms-core/dist/services/JsonService");
    var MockTaskListService_1 = require("../services/mocks/MockTaskListService");
    var TaskListService_1 = require("../services/TaskListService");
    var TestApp = /** @class */ (function (_super) {
        __extends(TestApp, _super);
        function TestApp() {
            var _this = _super.call(this) || this;
            _this.put(TaskListService_1.TaskListService, new MockTaskListService_1.MockTaskListService(_this, _this.resolve(JsonService_1.JsonService)));
            return _this;
        }
        return TestApp;
    }(MockApp_1.MockApp));
    exports.TestApp = TestApp;
});
//# sourceMappingURL=TestApp.js.map