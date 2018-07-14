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
        define(["require", "exports", "web-atoms-core/bin/web/controls/AtomControl", "../../view-models/LoginViewModel"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AtomControl_1 = require("web-atoms-core/bin/web/controls/AtomControl");
    var LoginViewModel_1 = require("../../view-models/LoginViewModel");
    var LoginView = /** @class */ (function (_super) {
        __extends(LoginView, _super);
        function LoginView() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        LoginView.prototype.create = function () {
            var _this = this;
            _super.prototype.create.call(this);
            var __creator = this;
            this.element = document.createElement("div");
            var e1 = document.createTextNode("\r\n\t");
            this.element.appendChild(e1);
            var e2 = document.createElement("label");
            this.append(e2);
            var e3 = document.createTextNode("Username:");
            e2.appendChild(e3);
            var e4 = document.createTextNode("\r\n\t");
            this.element.appendChild(e4);
            var e5 = document.createElement("input");
            this.append(e5);
            this.bind(e5, "value", [["viewModel", "username"]], true);
            var e6 = document.createTextNode("\r\n\t");
            this.element.appendChild(e6);
            var e7 = document.createElement("label");
            this.append(e7);
            var e8 = document.createTextNode("Password:");
            e7.appendChild(e8);
            var e9 = document.createTextNode("\r\n\t");
            this.element.appendChild(e9);
            var e10 = document.createElement("input");
            this.append(e10);
            this.bind(e10, "value", [["viewModel", "password"]], true);
            this.setPrimitiveValue(e10, "type", "password");
            var e11 = document.createTextNode("\r\n\r\n\t");
            this.element.appendChild(e11);
            var e12 = document.createElement("button");
            this.append(e12);
            this.runAfterInit(function () {
                return _this.setLocalValue(e12, "eventClick", function () { return (_this.viewModel).login(); });
            });
            var e13 = document.createTextNode("Login");
            e12.appendChild(e13);
            var e14 = document.createTextNode("\r\n\r\n");
            this.element.appendChild(e14);
            this.setPrimitiveValue(this.element, "viewModel", this.resolve(LoginViewModel_1.LoginViewModel));
        };
        return LoginView;
    }(AtomControl_1.AtomControl));
    exports.default = LoginView;
});
//# sourceMappingURL=LoginView.js.map