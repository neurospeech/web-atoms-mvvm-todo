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
        define(["require", "exports", "web-atoms-core/bin/controls/AtomControl", "../view-models/LoginViewModel"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // tslint:disable
    var AtomControl_1 = require("web-atoms-core/bin/controls/AtomControl");
    var LoginViewModel_1 = require("../view-models/LoginViewModel");
    var LoginView = /** @class */ (function (_super) {
        __extends(LoginView, _super);
        function LoginView() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        LoginView.prototype.create = function () {
            _super.prototype.create.call(this);
            this.element = document.createElement("div");
            var e1 = document.createTextNode("\r\n\t");
            this.append(e1);
            var e2 = document.createElement("form-layout");
            this.append(e2);
            var e11 = document.createTextNode("\r\n");
            this.append(e11);
            this.setLocalValue(this.element, "atom-view-model", this.resolve(LoginViewModel_1.LoginViewModel));
        };
        return LoginView;
    }(AtomControl_1.AtomControl));
    exports.LoginView = LoginView;
});
//# sourceMappingURL=LoginView.js.map