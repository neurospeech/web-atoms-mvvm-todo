"use strict";
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
        var _this = this;
        _super.prototype.create.call(this);
        this.element = document.createElement("div");
        var e1 = document.createTextNode("\r\n\t");
        this.element.appendChild(e1);
        var e2 = document.createElement("form-layout");
        this.append(e2);
        var e3 = document.createTextNode("\r\n\t\t");
        e2.appendChild(e3);
        var e4 = document.createElement("input");
        this.append(e4);
        this.setLocalValue(e4, "label", "Username:");
        this.bind(e4, "value", [["viewModel", "username"]], true);
        var e5 = document.createTextNode("\r\n\t\t");
        e2.appendChild(e5);
        var e6 = document.createElement("input");
        this.append(e6);
        this.setLocalValue(e6, "label", "Password:");
        this.bind(e6, "value", [["viewModel", "password"]], true);
        this.setLocalValue(e6, "type", "password");
        var e7 = document.createTextNode("\r\n\r\n\t\t");
        e2.appendChild(e7);
        var e8 = document.createElement("button");
        this.append(e8);
        this.runAfterInit(function () {
            return _this.setLocalValue(e8, "eventClick", function () { return (_this.viewModel).login(); });
        });
        var e9 = document.createTextNode("Login");
        e8.appendChild(e9);
        var e10 = document.createTextNode("\r\n\r\n\t");
        e2.appendChild(e10);
        var e11 = document.createTextNode("\r\n");
        this.element.appendChild(e11);
        this.viewModel = this.resolve(LoginViewModel_1.LoginViewModel);
    };
    return LoginView;
}(AtomControl_1.AtomControl));
exports.LoginView = LoginView;
//# sourceMappingURL=LoginView.js.map