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
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "web-atoms-core/bin/view-model/AtomViewModel", "../../../web-atoms-core/bin/core/bindable-properties"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AtomViewModel_1 = require("web-atoms-core/bin/view-model/AtomViewModel");
    var bindable_properties_1 = require("../../../web-atoms-core/bin/core/bindable-properties");
    var LoginViewModel = /** @class */ (function (_super) {
        __extends(LoginViewModel, _super);
        function LoginViewModel() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.username = "demo";
            _this.password = "demo";
            return _this;
        }
        LoginViewModel.prototype.login = function () {
            this.broadcast("app-url", "Todo.TaskListView");
        };
        __decorate([
            bindable_properties_1.bindableProperty,
            __metadata("design:type", String)
        ], LoginViewModel.prototype, "username", void 0);
        __decorate([
            bindable_properties_1.bindableProperty,
            __metadata("design:type", String)
        ], LoginViewModel.prototype, "password", void 0);
        return LoginViewModel;
    }(AtomViewModel_1.AtomViewModel));
    exports.LoginViewModel = LoginViewModel;
});
//# sourceMappingURL=LoginViewModel.js.map