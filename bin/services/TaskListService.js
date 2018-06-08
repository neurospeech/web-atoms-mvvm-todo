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
        define(["require", "exports", "web-atoms-core/bin/services/RestService", "../models/task"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RestService_1 = require("web-atoms-core/bin/services/RestService");
    var task_1 = require("../models/task");
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
            var t = new task_1.Task();
            t.label = "Sample task";
            t.status = "open";
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
            RestService_1.Put("/tasks/task"),
            __param(0, RestService_1.Body),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [task_1.Task]),
            __metadata("design:returntype", Promise)
        ], TaskListService.prototype, "create", null);
        __decorate([
            RestService_1.Get("/tasks"),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", Promise)
        ], TaskListService.prototype, "retrive", null);
        __decorate([
            RestService_1.Patch("/tasks/task"),
            __param(0, RestService_1.Body),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [task_1.Task]),
            __metadata("design:returntype", Promise)
        ], TaskListService.prototype, "update", null);
        __decorate([
            RestService_1.Delete("/tasks/{id}"),
            __param(0, RestService_1.Path("id")),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number]),
            __metadata("design:returntype", Promise)
        ], TaskListService.prototype, "deleteTask", null);
        __decorate([
            RestService_1.Get("/users"),
            __param(0, RestService_1.Query("name")),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", Promise)
        ], TaskListService.prototype, "getUsers", null);
        return TaskListService;
    }(RestService_1.BaseService));
    exports.TaskListService = TaskListService;
});
//# sourceMappingURL=TaskListService.js.map