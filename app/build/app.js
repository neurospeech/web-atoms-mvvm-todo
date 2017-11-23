var Todo;
(function (Todo) {
    var Channels = /** @class */ (function () {
        function Channels() {
        }
        Channels.SelectedTaskChanged = "selected-task-changed";
        return Channels;
    }());
    Todo.Channels = Channels;
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
})(Todo || (Todo = {}));
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
var Todo;
(function (Todo) {
    var ConfigService = /** @class */ (function (_super) {
        __extends(ConfigService, _super);
        function ConfigService() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ConfigService_1 = ConfigService;
        Object.defineProperty(ConfigService, "instance", {
            get: function () {
                return WebAtoms.DI.resolve(ConfigService_1);
            },
            enumerable: true,
            configurable: true
        });
        ConfigService.prototype.getStatusList = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, [
                            {
                                label: "Select", value: ""
                            },
                            {
                                label: "Open", value: "open"
                            },
                            {
                                label: "Closed", value: "closed"
                            }
                        ]];
                });
            });
        };
        __decorate([
            Get("/config/status")
        ], ConfigService.prototype, "getStatusList", null);
        ConfigService = ConfigService_1 = __decorate([
            DIGlobal
        ], ConfigService);
        return ConfigService;
        var ConfigService_1;
    }(WebAtoms.Rest.BaseService));
    Todo.ConfigService = ConfigService;
})(Todo || (Todo = {}));
// tslint:disable
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var Todo;
(function (Todo) {
    var TaskListService = /** @class */ (function (_super) {
        __extends(TaskListService, _super);
        function TaskListService() {
            var _this = _super.call(this) || this;
            _this.tasks = [];
            _this.users = [{
                    label: "Akash Kava",
                    value: "ackava",
                }, {
                    label: "John",
                    value: "Hemond"
                }, {
                    label: "Chris",
                    value: "Tucker"
                }];
            var t = new Todo.Task();
            t.label = "Sample task";
            t.status = "open";
            t.id = (new Date()).getTime();
            _this.tasks.push(t);
            return _this;
        }
        TaskListService_1 = TaskListService;
        Object.defineProperty(TaskListService, "instance", {
            get: function () {
                return WebAtoms.DI.resolve(TaskListService_1);
            },
            enumerable: true,
            configurable: true
        });
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
                    t = this.tasks.find(function (x) { return x.id === data.id; });
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
        TaskListService.prototype.getUsers = function (name) {
            return __awaiter(this, void 0, void 0, function () {
                var n;
                return __generator(this, function (_a) {
                    if (!name) {
                        return [2 /*return*/, this.users];
                    }
                    n = name.toLocaleLowerCase();
                    return [2 /*return*/, this.users.filter(function (x) {
                            if (name) {
                                if (x.label.toLocaleLowerCase().indexOf(n) >= 0 ||
                                    x.value.toLocaleLowerCase().indexOf(n) >= 0) {
                                    return true;
                                }
                            }
                            else {
                                return true;
                            }
                        })];
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
        __decorate([
            Get("/users"),
            __param(0, Query("name"))
        ], TaskListService.prototype, "getUsers", null);
        TaskListService = TaskListService_1 = __decorate([
            DIGlobal
        ], TaskListService);
        return TaskListService;
        var TaskListService_1;
    }(WebAtoms.Rest.BaseService));
    Todo.TaskListService = TaskListService;
})(Todo || (Todo = {}));
var Todo;
(function (Todo) {
    var TaskEditorErrors = /** @class */ (function (_super) {
        __extends(TaskEditorErrors, _super);
        function TaskEditorErrors() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            bindableProperty
        ], TaskEditorErrors.prototype, "label", void 0);
        __decorate([
            bindableProperty
        ], TaskEditorErrors.prototype, "status", void 0);
        __decorate([
            bindableProperty
        ], TaskEditorErrors.prototype, "description", void 0);
        return TaskEditorErrors;
    }(WebAtoms.AtomErrors));
    Todo.TaskEditorErrors = TaskEditorErrors;
    var TaskEditorViewModel = /** @class */ (function (_super) {
        __extends(TaskEditorViewModel, _super);
        function TaskEditorViewModel() {
            var _this = _super.call(this) || this;
            // when AtomWindowViewModel starts, channelPrefix is set to windowName
            // this will avoid receiving messages in WindowViewModel
            // in order to receive messages for default, you will have to set
            // channelPrefix = ""
            _this.task = new Todo.Task();
            _this.user = {};
            _this.errors = new TaskEditorErrors(_this);
            _this.addValidation(function () { return _this.errors.label = _this.task.label ? "" : "Task cannot be empty"; }, function () { return _this.errors.status = _this.task.status ? "" : "Status cannot be empty"; });
            return _this;
        }
        TaskEditorViewModel.prototype.save = function () {
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
        TaskEditorViewModel.prototype.assign = function () {
            return __awaiter(this, void 0, void 0, function () {
                var windowService, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            windowService = WebAtoms.DI.resolve(WindowService);
                            _a = this;
                            return [4 /*yield*/, windowService.openPopup(Todo.UserSelector, new Todo.UserSelectorViewModel())];
                        case 1:
                            _a.user = _b.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        __decorate([
            bindableReceive(Todo.Channels.SelectedTaskChanged)
        ], TaskEditorViewModel.prototype, "task", void 0);
        __decorate([
            bindableProperty
        ], TaskEditorViewModel.prototype, "user", void 0);
        return TaskEditorViewModel;
    }(WebAtoms.AtomWindowViewModel));
    Todo.TaskEditorViewModel = TaskEditorViewModel;
})(Todo || (Todo = {}));
var Todo;
(function (Todo) {
    var TaskListViewModel = /** @class */ (function (_super) {
        __extends(TaskListViewModel, _super);
        function TaskListViewModel() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.list = new WebAtoms.AtomList();
            _this.taskService = Todo.TaskListService.instance;
            _this.windowService = WebAtoms.DI.resolve(WebAtoms.WindowService);
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
        // // Use bindableBroadcast unless you need custom watch
        // @watch
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
                            return [4 /*yield*/, this.windowService.openWindow(Todo.NewTaskWindow, new Todo.TaskEditorViewModel())];
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
                            console.error(e_1);
                            this.windowService.alert(e_1);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        __decorate([
            bindableProperty
        ], TaskListViewModel.prototype, "list", void 0);
        __decorate([
            bindableBroadcast(Todo.Channels.SelectedTaskChanged)
        ], TaskListViewModel.prototype, "selectedTask", void 0);
        return TaskListViewModel;
    }(WebAtoms.AtomViewModel));
    Todo.TaskListViewModel = TaskListViewModel;
})(Todo || (Todo = {}));
var Todo;
(function (Todo) {
    var UserSelectorViewModel = /** @class */ (function (_super) {
        __extends(UserSelectorViewModel, _super);
        function UserSelectorViewModel() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        UserSelectorViewModel.prototype.init = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4 /*yield*/, Todo.TaskListService.instance.getUsers(null)];
                        case 1:
                            _a.items = _b.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        UserSelectorViewModel.prototype.searchUser = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4 /*yield*/, Todo.TaskListService.instance.getUsers(this.searchText)];
                        case 1:
                            _a.items = _b.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        UserSelectorViewModel.prototype.select = function (user) {
            this.close(user);
        };
        __decorate([
            bindableProperty
        ], UserSelectorViewModel.prototype, "items", void 0);
        __decorate([
            bindableProperty
        ], UserSelectorViewModel.prototype, "searchText", void 0);
        __decorate([
            watch
        ], UserSelectorViewModel.prototype, "searchUser", null);
        return UserSelectorViewModel;
    }(WebAtoms.AtomWindowViewModel));
    Todo.UserSelectorViewModel = UserSelectorViewModel;
})(Todo || (Todo = {}));
//# sourceMappingURL=app.js.map