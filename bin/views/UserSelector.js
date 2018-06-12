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
        define(["require", "exports", "web-atoms-core/bin/controls/AtomControl"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AtomControl_1 = require("web-atoms-core/bin/controls/AtomControl");
    var UserSelector = /** @class */ (function (_super) {
        __extends(UserSelector, _super);
        function UserSelector() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        UserSelector.prototype.create = function () {
            _super.prototype.create.call(this);
            this.element = document.createElement("div");
            var e1 = document.createTextNode("\r\n\t");
            this.append(e1);
            var e2 = document.createElement("div");
            this.append(e2);
            this.setLocalValue(e2, "style", "background: white; padding:5px; border: solid lightgray 1px;");
            var e10 = document.createTextNode("\r\n");
            this.append(e10);
            this.init();
        };
        return UserSelector;
    }(AtomControl_1.AtomControl));
    exports.UserSelector = UserSelector;
    var UserSelector_itemTemplate_1 = /** @class */ (function (_super) {
        __extends(UserSelector_itemTemplate_1, _super);
        function UserSelector_itemTemplate_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        UserSelector_itemTemplate_1.prototype.create = function () {
            var _this = this;
            _super.prototype.create.call(this);
            this.element = document.createElement("div");
            var e1 = document.createTextNode("\r\n\t\t\t\t");
            this.append(e1);
            var e2 = document.createElement("span");
            this.append(e2);
            this.setLocalValue(e2, "atom-text", (this.getValue("data.label")));
            var e3 = document.createTextNode("\r\n\t\t\t");
            this.append(e3);
            this.setLocalValue(this.element, "atom-event-click", function () { return (_this.getValue("viewModel")).select((_this.getValue("data"))); });
            this.init();
        };
        return UserSelector_itemTemplate_1;
    }(AtomControl_1.AtomControl));
});
//# sourceMappingURL=UserSelector.js.map