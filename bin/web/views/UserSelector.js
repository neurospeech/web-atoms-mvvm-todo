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
        define(["require", "exports", "web-atoms-core/bin/web/controls/AtomItemsControl", "web-atoms-core/bin/web/controls/AtomControl", "../../view-models/UserSelectorViewModel"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // tslint:disable
    var AtomItemsControl_1 = require("web-atoms-core/bin/web/controls/AtomItemsControl");
    var AtomControl_1 = require("web-atoms-core/bin/web/controls/AtomControl");
    var UserSelectorViewModel_1 = require("../../view-models/UserSelectorViewModel");
    var UserSelector = /** @class */ (function (_super) {
        __extends(UserSelector, _super);
        function UserSelector() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        UserSelector.prototype.create = function () {
            _super.prototype.create.call(this);
            this.element = document.createElement("div");
            var e1 = document.createTextNode("\r\n\t");
            this.element.appendChild(e1);
            var e2 = document.createElement("div");
            this.append(e2);
            this.setPrimitiveValue(e2, "style", "background: white; padding:5px; border: solid lightgray 1px;");
            var e3 = document.createTextNode("\r\n\t\t");
            e2.appendChild(e3);
            var e4 = document.createElement("input");
            e2.appendChild(e4);
            this.setPrimitiveValue(e4, "autofocus", "autofocus");
            this.bind(e4, "value", [["viewModel", "searchText"]], true);
            var e5 = document.createTextNode("\r\n\r\n\t\t");
            e2.appendChild(e5);
            var e6 = new AtomItemsControl_1.AtomItemsControl(this.app, document.createElement("div"));
            var e7 = document.createTextNode("\r\n\t\t\t");
            e6.element.appendChild(e7);
            var e8 = document.createTextNode("\r\n\t\t");
            e6.element.appendChild(e8);
            e6.setPrimitiveValue(e6.element, "style", "padding:5px");
            e6.bind(e6.element, "items", [["viewModel", "items"]], false, function (v1) { return (v1); });
            e6.itemTemplate = UserSelector_itemTemplate_1;
            this.append(e6);
            var e9 = document.createTextNode("\r\n\t");
            e2.appendChild(e9);
            var e10 = document.createTextNode("\r\n");
            this.element.appendChild(e10);
            this.setPrimitiveValue(this.element, "viewModel", this.resolve(UserSelectorViewModel_1.UserSelectorViewModel));
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
            this.element.appendChild(e1);
            var e2 = document.createElement("span");
            this.append(e2);
            this.runAfterInit(function () {
                return _this.setLocalValue(e2, "text", (_this.data.label));
            });
            var e3 = document.createTextNode("\r\n\t\t\t");
            this.element.appendChild(e3);
            this.runAfterInit(function () {
                return _this.setLocalValue(_this.element, "eventClick", function () { return (_this.viewModel).select((_this.data)); });
            });
        };
        return UserSelector_itemTemplate_1;
    }(AtomControl_1.AtomControl));
});
//# sourceMappingURL=UserSelector.js.map