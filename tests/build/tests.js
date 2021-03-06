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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
var Category = WebAtoms.Unit.Category;
var Test = WebAtoms.Unit.Test;
var Assert = WebAtoms.Unit.Assert;
var TestItem = WebAtoms.Unit.TestItem;
var MockWindowService = WebAtoms.MockWindowService;
/**
 *
 *
 * @class WindowTests
 * @extends {TestItem}
 */
var WindowTests = /** @class */ (function (_super) {
    __extends(WindowTests, _super);
    function WindowTests() {
        var _this = _super.call(this) || this;
        // following line will use mock of REST Services
        Atom.designMode = true;
        // any tests involving window service must
        // setup a mock window service
        WebAtoms.DI.push(WindowService, new MockWindowService());
        return _this;
    }
    WindowTests.prototype.dispose = function () {
        // this is important, we must verify that all
        // expected windows did open correctly
        MockWindowService.instance.assert();
        // after tests are done, we should remove
        // mock window service
        WebAtoms.DI.pop(WindowService);
        return _super.prototype.dispose.call(this);
    };
    /**
     * This task verifies every possibility of Window
     *
     * @memberof WindowTests
     */
    WindowTests.prototype.newTask = function () {
        return __awaiter(this, void 0, void 0, function () {
            var vm;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        vm = new Todo.TaskEditorViewModel();
                        MockWindowService.instance.expectAlert("Please complete all required fields.");
                        return [4 /*yield*/, vm.save()];
                    case 1:
                        _a.sent();
                        Assert.equals("Task cannot be empty", vm.errors.label);
                        Assert.equals("Status cannot be empty", vm.errors.status);
                        MockWindowService.instance.expectAlert("Please complete all required fields.");
                        vm.task.label = "Sample";
                        return [4 /*yield*/, vm.save()];
                    case 2:
                        _a.sent();
                        Assert.equals("Status cannot be empty", vm.errors.status);
                        vm.task.status = "Open";
                        return [4 /*yield*/, vm.save()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    WindowTests.prototype.taskList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var vm, task;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        vm = new Todo.TaskListViewModel();
                        // we will not execute methods of view model here...
                        // instead we will only return expected return value
                        // unit test of View Model of Window should verify all
                        // individual tasks
                        MockWindowService.instance
                            .expectWindow(Todo.NewTaskWindow, function (vm) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                vm.task.label = "New Task";
                                vm.task.status = "Open";
                                return [2 /*return*/, vm.task];
                            });
                        }); });
                        return [4 /*yield*/, vm.addTask()];
                    case 1:
                        _a.sent();
                        task = vm.list[1];
                        Assert.equals("New Task", task.label);
                        Assert.equals("Open", task.status);
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Test("New Task")
    ], WindowTests.prototype, "newTask", null);
    __decorate([
        Test("Task List new Window")
    ], WindowTests.prototype, "taskList", null);
    WindowTests = __decorate([
        Category("Window Tests")
    ], WindowTests);
    return WindowTests;
}(TestItem));
//# sourceMappingURL=tests.js.map