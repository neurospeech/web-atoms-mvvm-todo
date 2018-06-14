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
var AtomPageView_1 = require("web-atoms-core/bin/controls/AtomPageView");
var AtomDockPanel_1 = require("web-atoms-core/bin/controls/AtomDockPanel");
var AppFrameViewModel_1 = require("../view-models/AppFrameViewModel");
var AppFrame = /** @class */ (function (_super) {
    __extends(AppFrame, _super);
    function AppFrame() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppFrame.prototype.create = function () {
        _super.prototype.create.call(this);
        this.element = document.createElement("section");
        var e1 = document.createTextNode("\r\n\r\n    ");
        this.element.appendChild(e1);
        var e2 = new AtomPageView_1.AtomPageView(document.createElement("section"));
        var e3 = document.createTextNode("\r\n    ");
        e2.element.appendChild(e3);
        e2.bind(e2.element, "url", [["localViewModel", "url"]], false, function (v1) { return (v1); });
        this.append(e2);
        var e4 = document.createTextNode("\r\n\r\n");
        this.element.appendChild(e4);
        this.localViewModel = this.resolve(AppFrameViewModel_1.AppFrameViewModel);
    };
    return AppFrame;
}(AtomDockPanel_1.AtomDockPanel));
exports.AppFrame = AppFrame;
//# sourceMappingURL=AppFrame.js.map