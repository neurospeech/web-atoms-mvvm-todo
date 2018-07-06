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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
        define(["require", "exports", "web-atoms-core/bin/App", "web-atoms-core/bin/core/BindableProperty", "web-atoms-core/bin/di/Inject", "web-atoms-core/bin/services/NavigationService", "web-atoms-core/bin/view-model/AtomViewModel", "web-atoms-core/bin/view-model/AtomWindowViewModel", "../channels", "../models/task"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App_1 = require("web-atoms-core/bin/App");
    var BindableProperty_1 = require("web-atoms-core/bin/core/BindableProperty");
    var Inject_1 = require("web-atoms-core/bin/di/Inject");
    var NavigationService_1 = require("web-atoms-core/bin/services/NavigationService");
    var AtomViewModel_1 = require("web-atoms-core/bin/view-model/AtomViewModel");
    var AtomWindowViewModel_1 = require("web-atoms-core/bin/view-model/AtomWindowViewModel");
    var channels_1 = require("../channels");
    var task_1 = require("../models/task");
    var TaskEditorViewModel = /** @class */ (function (_super) {
        __extends(TaskEditorViewModel, _super);
        function TaskEditorViewModel(app, windowService) {
            var _this = _super.call(this, app) || this;
            _this.windowService = windowService;
            // when AtomWindowViewModel starts, channelPrefix is set to windowName
            // this will avoid receiving messages in WindowViewModel
            // in order to receive messages for default, you will have to set
            // channelPrefix = ""
            _this.task = new task_1.Task();
            _this.user = {};
            return _this;
        }
        Object.defineProperty(TaskEditorViewModel.prototype, "errorLabel", {
            get: function () {
                return this.task.label ? "" : "Task cannot be empty";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TaskEditorViewModel.prototype, "errorStatus", {
            get: function () {
                return this.task.status ? "" : "Status cannot be empty";
            },
            enumerable: true,
            configurable: true
        });
        TaskEditorViewModel.prototype.save = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!!this.isValid) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.windowService.alert("Please complete all required fields.")];
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
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4 /*yield*/, this.windowService.openPage("UserSelector")];
                        case 1:
                            _a.user = _b.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        __decorate([
            AtomViewModel_1.BindableReceive(channels_1.Channels.SelectedTaskChanged),
            __metadata("design:type", task_1.Task)
        ], TaskEditorViewModel.prototype, "task", void 0);
        __decorate([
            BindableProperty_1.BindableProperty,
            __metadata("design:type", Object)
        ], TaskEditorViewModel.prototype, "user", void 0);
        __decorate([
            AtomViewModel_1.Validate,
            __metadata("design:type", String),
            __metadata("design:paramtypes", [])
        ], TaskEditorViewModel.prototype, "errorLabel", null);
        __decorate([
            AtomViewModel_1.Validate,
            __metadata("design:type", String),
            __metadata("design:paramtypes", [])
        ], TaskEditorViewModel.prototype, "errorStatus", null);
        TaskEditorViewModel = __decorate([
            __param(0, Inject_1.Inject),
            __param(1, Inject_1.Inject),
            __metadata("design:paramtypes", [App_1.App,
                NavigationService_1.NavigationService])
        ], TaskEditorViewModel);
        return TaskEditorViewModel;
    }(AtomWindowViewModel_1.AtomWindowViewModel));
    exports.TaskEditorViewModel = TaskEditorViewModel;
});
//# sourceMappingURL=TaskEditorViewModel.js.map