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
        define(["require", "exports", "web-atoms-core/dist/view-model/AtomViewModel", "../ModuleFiles"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AtomViewModel_1 = require("web-atoms-core/dist/view-model/AtomViewModel");
    var ModuleFiles_1 = require("../ModuleFiles");
    var AppFrameViewModel = /** @class */ (function (_super) {
        __extends(AppFrameViewModel, _super);
        function AppFrameViewModel() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.url = ModuleFiles_1.ModuleFiles.views.LoginView;
            return _this;
        }
        __decorate([
            AtomViewModel_1.BindableReceive("app-url"),
            __metadata("design:type", String)
        ], AppFrameViewModel.prototype, "url", void 0);
        return AppFrameViewModel;
    }(AtomViewModel_1.AtomViewModel));
    exports.AppFrameViewModel = AppFrameViewModel;
});
//# sourceMappingURL=AppFrameViewModel.js.map