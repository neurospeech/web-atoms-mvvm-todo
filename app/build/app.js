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
var Todo;
(function (Todo) {
    var TaskListService = /** @class */ (function (_super) {
        __extends(TaskListService, _super);
        function TaskListService() {
            var _this = _super.call(this) || this;
            _this.tasks = [];
            var t = new Todo.Task();
            t.label = "Sample task";
            t.status = "Open";
            t.id = (new Date()).getTime();
            _this.tasks.push(t);
            return _this;
        }
        TaskListService.prototype.create = function (task) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    task.id = (new Date()).getTime();
                    this.tasks.push(task);
                    return [2 /*return*/, task];
                });
            });
        };
        TaskListService.prototype.retrive = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.tasks];
                });
            });
        };
        TaskListService.prototype.update = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                var t;
                return __generator(this, function (_a) {
                    t = this.tasks.find(function (x) { return x.id == data.id; });
                    t.label = data.label;
                    t.description = data.description;
                    t.status = data.status;
                    return [2 /*return*/, data];
                });
            });
        };
        TaskListService.prototype.deleteTask = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.tasks = this.tasks.filter(function (x) { return x.id !== id; });
                    return [2 /*return*/];
                });
            });
        };
        __decorate([
            Put("/tasks/task"),
            __param(0, Body)
        ], TaskListService.prototype, "create", null);
        __decorate([
            Get("/tasks")
        ], TaskListService.prototype, "retrive", null);
        __decorate([
            Patch("/tasks/task"),
            __param(0, Body)
        ], TaskListService.prototype, "update", null);
        __decorate([
            Delete("/tasks/{id}"),
            __param(0, Path("id"))
        ], TaskListService.prototype, "deleteTask", null);
        TaskListService = __decorate([
            DIGlobal
        ], TaskListService);
        return TaskListService;
    }(WebAtoms.Rest.BaseService));
    Todo.TaskListService = TaskListService;
})(Todo || (Todo = {}));
var Todo;
(function (Todo) {
    var NewTaskWindowErrors = /** @class */ (function (_super) {
        __extends(NewTaskWindowErrors, _super);
        function NewTaskWindowErrors() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            bindableProperty
        ], NewTaskWindowErrors.prototype, "label", void 0);
        __decorate([
            bindableProperty
        ], NewTaskWindowErrors.prototype, "status", void 0);
        __decorate([
            bindableProperty
        ], NewTaskWindowErrors.prototype, "description", void 0);
        return NewTaskWindowErrors;
    }(WebAtoms.AtomErrors));
    Todo.NewTaskWindowErrors = NewTaskWindowErrors;
    var NewTaskViewWindowViewModel = /** @class */ (function (_super) {
        __extends(NewTaskViewWindowViewModel, _super);
        function NewTaskViewWindowViewModel() {
            var _this = _super.call(this) || this;
            _this.task = new Todo.Task();
            _this.errors = new NewTaskWindowErrors(_this);
            _this.addValidation(_this, function (x) {
                x.errors.label = x.task.label ? "" : "Task cannot be empty";
            });
            _this.addValidation(_this, function (x) {
                x.errors.status = x.task.status ? "" : "Status cannot be empty";
            });
            return _this;
            // this.addValidation(this, x=> {
            //     x.errors.description = x.task.description ? "" : "Description cannot be empty";
            // });
        }
        NewTaskViewWindowViewModel.prototype.save = function () {
            return __awaiter(this, void 0, void 0, function () {
                var windowService;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            windowService = WebAtoms.DI.resolve(WindowService);
                            if (!this.errors.hasErrors()) return [3 /*break*/, 2];
                            return [4 /*yield*/, windowService.alert("Please complete all required fields.")];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                        case 2:
                            this.close(this.task);
                            return [2 /*return*/];
                    }
                });
            });
        };
        __decorate([
            bindableProperty
        ], NewTaskViewWindowViewModel.prototype, "task", void 0);
        return NewTaskViewWindowViewModel;
    }(WebAtoms.AtomWindowViewModel));
    Todo.NewTaskViewWindowViewModel = NewTaskViewWindowViewModel;
})(Todo || (Todo = {}));
var Todo;
(function (Todo) {
    var Task = /** @class */ (function () {
        function Task() {
            this.id = 0;
            this.label = "";
            this.status = "";
        }
        return Task;
    }());
    Todo.Task = Task;
    var TaskListViewModel = /** @class */ (function (_super) {
        __extends(TaskListViewModel, _super);
        function TaskListViewModel() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.list = new WebAtoms.AtomList();
            _this.taskService = WebAtoms.DI.resolve(Todo.TaskListService);
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
                            return [2 /*return*/];
                    }
                });
            });
        };
        TaskListViewModel.prototype.deleteTask = function (task) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.taskService.deleteTask(task.id)];
                        case 1:
                            _a.sent();
                            this.list.remove(task);
                            return [2 /*return*/];
                    }
                });
            });
        };
        TaskListViewModel.prototype.addTask = function () {
            return __awaiter(this, void 0, void 0, function () {
                var windowService, task, e_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            windowService = WebAtoms.DI.resolve(WindowService);
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 4, , 5]);
                            return [4 /*yield*/, windowService.openWindow(Todo.NewTaskWindow, new Todo.NewTaskViewWindowViewModel())];
                        case 2:
                            task = _a.sent();
                            return [4 /*yield*/, this.taskService.create(task)];
                        case 3:
                            task = _a.sent();
                            this.list.add(task);
                            return [3 /*break*/, 5];
                        case 4:
                            e_1 = _a.sent();
                            console.error(e_1);
                            windowService.alert(e_1);
                            return [3 /*break*/, 5];
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        __decorate([
            bindableProperty
        ], TaskListViewModel.prototype, "list", void 0);
        return TaskListViewModel;
    }(WebAtoms.AtomViewModel));
    Todo.TaskListViewModel = TaskListViewModel;
})(Todo || (Todo = {}));
//# sourceMappingURL=app.js.map