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
var AtomPageView_1 = require("web-atoms-core/bin/web/controls/AtomPageView");
var AppFrameViewModel_1 = require("../../view-models/AppFrameViewModel");
var AppFrame = /** @class */ (function (_super) {
    __extends(AppFrame, _super);
    function AppFrame() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppFrame.prototype.create = function () {
        _super.prototype.create.call(this);
        this.element = document.createElement("section");
        var e1 = document.createTextNode("\r\n");
        this.element.appendChild(e1);
        this.setPrimitiveValue(this.element, "localViewModel", this.resolve(AppFrameViewModel_1.AppFrameViewModel));
        this.bind(this.element, "url", [["localViewModel", "url"]], false, function (v1) { return (v1); });
    };
    return AppFrame;
}(AtomPageView_1.AtomPageView));
exports.AppFrame = AppFrame;
//# sourceMappingURL=AppFrame.js.map