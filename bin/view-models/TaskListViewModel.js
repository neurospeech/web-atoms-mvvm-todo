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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "web-atoms-core/bin/App", "web-atoms-core/bin/core/AtomList", "web-atoms-core/bin/core/BindableProperty", "web-atoms-core/bin/di/Inject", "web-atoms-core/bin/services/NavigationService", "web-atoms-core/bin/view-model/AtomViewModel", "../channels", "../models/task", "../ModuleFiles", "../services/TaskListService"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App_1 = require("web-atoms-core/bin/App");
    var AtomList_1 = require("web-atoms-core/bin/core/AtomList");
    var BindableProperty_1 = require("web-atoms-core/bin/core/BindableProperty");
    var Inject_1 = require("web-atoms-core/bin/di/Inject");
    var NavigationService_1 = require("web-atoms-core/bin/services/NavigationService");
    var AtomViewModel_1 = require("web-atoms-core/bin/view-model/AtomViewModel");
    var channels_1 = require("../channels");
    var task_1 = require("../models/task");
    var ModuleFiles_1 = require("../ModuleFiles");
    var TaskListService_1 = require("../services/TaskListService");
    var TaskListViewModel = /** @class */ (function (_super) {
        __extends(TaskListViewModel, _super);
        function TaskListViewModel(app, windowService, taskService) {
            var _this = _super.call(this, app) || this;
            _this.windowService = windowService;
            _this.taskService = taskService;
            _this.list = new AtomList_1.AtomList();
            return _this;
        }
        TaskListViewModel.prototype.init = function () {
            return __awaiter(this, void 0, void 0, function () {
                var r;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.taskService.retrive()];
                        case 1:
                            r = _a.sent();
                            this.list.addAll(r);
                            this.selectedTask = this.list[0];
                            return [2 /*return*/];
                    }
                });
            });
        };
        // // Use BindableBroadcast unless you need custom Watch
        // @Watch
        // onSelectedTaskChanged(): void {
        //     this.broadcast(Channels.SelectedTaskChanged,this.selectedTask);
        // }
        TaskListViewModel.prototype.deleteTask = function (task) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.taskService.deleteTask(task.id)];
                        case 1:
                            _a.sent();
                            this.list.remove(task);
                            this.selectedTask = this.list[0];
                            return [2 /*return*/];
                    }
                });
            });
        };
        TaskListViewModel.prototype.addTask = function () {
            return __awaiter(this, void 0, void 0, function () {
                var task, e_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 3, , 4]);
                            return [4 /*yield*/, this.windowService.openPage(ModuleFiles_1.ModuleFiles.views.NewTaskWindow)];
                        case 1:
                            task = _a.sent();
                            return [4 /*yield*/, this.taskService.create(task)];
                        case 2:
                            task = _a.sent();
                            this.list.add(task);
                            this.selectedTask = task;
                            return [3 /*break*/, 4];
                        case 3:
                            e_1 = _a.sent();
                            // tslint:disable-next-line:no-console
                            console.error(e_1);
                            this.windowService.alert(e_1);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        __decorate([
            BindableProperty_1.BindableProperty,
            __metadata("design:type", AtomList_1.AtomList)
        ], TaskListViewModel.prototype, "list", void 0);
        __decorate([
            AtomViewModel_1.BindableBroadcast(channels_1.Channels.SelectedTaskChanged),
            __metadata("design:type", task_1.Task)
        ], TaskListViewModel.prototype, "selectedTask", void 0);
        TaskListViewModel = __decorate([
            __param(0, Inject_1.Inject),
            __param(1, Inject_1.Inject),
            __param(2, Inject_1.Inject),
            __metadata("design:paramtypes", [App_1.App,
                NavigationService_1.NavigationService,
                TaskListService_1.TaskListService])
        ], TaskListViewModel);
        return TaskListViewModel;
    }(AtomViewModel_1.AtomViewModel));
    exports.TaskListViewModel = TaskListViewModel;
});
//# sourceMappingURL=TaskListViewModel.js.map