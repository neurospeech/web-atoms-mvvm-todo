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
        define(["require", "exports", "web-atoms-core/dist/web/styles/AtomListBoxStyle"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AtomListBoxStyle_1 = require("web-atoms-core/dist/web/styles/AtomListBoxStyle");
    var RedListStyle = /** @class */ (function (_super) {
        __extends(RedListStyle, _super);
        function RedListStyle() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        RedListStyle.prototype.init = function () {
            this.item.hover(function () { return ({
                backgroundColor: "red"
            }); }).hover(" > button", function () { return ({
                backgroundColor: "black",
                color: "red"
            }); });
            this.selectedItem.updateStyle(function () { return ({
                backgroundColor: "red",
                color: "blue"
            }); });
            this.selectedItem.hover(function () { return ({
                backgroundColor: "red",
                color: "white"
            }); }).hover(" > button", function () { return ({
                backgroundColor: "black",
                color: "red"
            }); });
        };
        return RedListStyle;
    }(AtomListBoxStyle_1.AtomListBoxStyle));
    exports.default = RedListStyle;
});
//# sourceMappingURL=RedListStyle.js.map