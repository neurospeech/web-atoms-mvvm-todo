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
        define(["require", "exports", "web-atoms-core/dist/web/controls/AtomFrame", "../../view-models/AppFrameViewModel"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AtomFrame_1 = require("web-atoms-core/dist/web/controls/AtomFrame");
    var AppFrameViewModel_1 = require("../../view-models/AppFrameViewModel");
    var AppFrame = /** @class */ (function (_super) {
        __extends(AppFrame, _super);
        function AppFrame() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AppFrame.prototype.create = function () {
            _super.prototype.create.call(this);
            var __creator = this;
            this.localViewModel = this.resolve(AppFrameViewModel_1.AppFrameViewModel);
            this.bind(this.element, "url", [["localViewModel", "url"]], false, function (v1) { return (v1); });
            var e1 = document.createTextNode("\r\n");
            this.element.appendChild(e1);
        };
        return AppFrame;
    }(AtomFrame_1.AtomFrame));
    exports.default = AppFrame;
});
//# sourceMappingURL=AppFrame.js.map