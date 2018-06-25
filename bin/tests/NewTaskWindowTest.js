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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
require("test-dom");
var App_1 = require("web-atoms-core/bin/App");
var Atom_1 = require("web-atoms-core/bin/Atom");
var MockNavigationService_1 = require("web-atoms-core/bin/services/MockNavigationService");
var base_test_1 = require("web-atoms-core/bin/unit/base-test");
var TaskListService_1 = require("../services/TaskListService");
var TaskEditorViewModel_1 = require("../view-models/TaskEditorViewModel");
var TaskListViewModel_1 = require("../view-models/TaskListViewModel");
var NavigationService_1 = require("web-atoms-core/bin/services/NavigationService");
/**
 * @class WindowTests
 * @extends {TestItem}
 */
var WindowTests = /** @class */ (function (_super) {
    __extends(WindowTests, _super);
    function WindowTests(windowService) {
        if (windowService === void 0) { windowService = new MockNavigationService_1.MockNavigationService(); }
        var _this = _super.call(this) || this;
        _this.windowService = windowService;
        // following line will use mock of REST Services
        Atom_1.Atom.designMode = true;
        return _this;
    }
    WindowTests.prototype.dispose = function () {
        // this is important, we must verify that all
        // expected windows did open correctly
        this.windowService.assert();
        return _super.prototype.dispose.call(this);
    };
    /**
     * This task verifies every possibility of Window
     *
     * @memberof WindowTests
     */
    WindowTests.prototype.newTask = function () {
        return __awaiter(this, void 0, void 0, function () {
            var app, vm;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        app = new App_1.App();
                        app.put(NavigationService_1.NavigationService, this.windowService);
                        vm = new TaskEditorViewModel_1.TaskEditorViewModel(app, this.windowService);
                        return [4 /*yield*/, vm.waitForReady()];
                    case 1:
                        _a.sent();
                        this.windowService.expectAlert("Please complete all required fields.");
                        return [4 /*yield*/, vm.save()];
                    case 2:
                        _a.sent();
                        base_test_1.Assert.equals("Task cannot be empty", vm.errorLabel);
                        base_test_1.Assert.equals("Status cannot be empty", vm.errorStatus);
                        this.windowService.expectAlert("Please complete all required fields.");
                        vm.task.label = "Sample";
                        return [4 /*yield*/, vm.save()];
                    case 3:
                        _a.sent();
                        base_test_1.Assert.equals("Status cannot be empty", vm.errorStatus);
                        vm.task.status = "Open";
                        return [4 /*yield*/, vm.save()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    WindowTests.prototype.taskList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var app, vm, task;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        app = new App_1.App();
                        app.put(NavigationService_1.NavigationService, this.windowService);
                        vm = new TaskListViewModel_1.TaskListViewModel(app, this.windowService, new TaskListService_1.TaskListService());
                        return [4 /*yield*/, vm.waitForReady()];
                    case 1:
                        _a.sent();
                        // we will not execute methods of view model here...
                        // instead we will only return expected return value
                        // unit test of View Model of Window should verify all
                        // individual tasks
                        this.windowService
                            .expectWindow("NewTaskWindow", function (vm2) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                vm2.task.label = "New Task";
                                vm2.task.status = "Open";
                                return [2 /*return*/, vm2.task];
                            });
                        }); });
                        return [4 /*yield*/, vm.addTask()];
                    case 2:
                        _a.sent();
                        task = vm.list[1];
                        base_test_1.Assert.equals("New Task", task.label);
                        base_test_1.Assert.equals("Open", task.status);
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        base_test_1.Test("New Task"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], WindowTests.prototype, "newTask", null);
    __decorate([
        base_test_1.Test("Task List new Window"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], WindowTests.prototype, "taskList", null);
    WindowTests = __decorate([
        base_test_1.Category("Window Tests"),
        __metadata("design:paramtypes", [MockNavigationService_1.MockNavigationService])
    ], WindowTests);
    return WindowTests;
}(base_test_1.TestItem));
//# sourceMappingURL=NewTaskWindowTest.js.map