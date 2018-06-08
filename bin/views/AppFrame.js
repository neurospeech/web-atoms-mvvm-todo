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
        define(["require", "exports", "web-atoms-core/bin/controls/AtomPageView", "web-atoms-core/bin/controls/AtomDockPanel", "../view-models/AppFrameViewModel"], factory);
    }
})(function (require, exports) {
    "use strict";
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
            var e1 = document.createTextNode("\r\n=======\r\n    import { AppFrameViewModel }  from \"./../view-models/AppFrameViewModel\";\r\n\r\n");
            this.append(e1);
            var e2 = new AtomDockPanel_1.AtomDockPanel(document.createElement("section"));
            var e3 = document.createTextNode("\r\n>>>>>>> 678c27332c6f12bf155a599f6a9ae82649a322d5\r\n\r\n    ");
            e2.append(e3);
            var e4 = new AtomPageView_1.AtomPageView(document.createElement("section"));
            var e5 = document.createTextNode("\r\n    ");
            e4.append(e5);
            e4.bind(e4.element, "atom-url", [["localViewModel", "url"]], false, function (v1) { return (v1); });
            e2.append(e4);
            var e6 = document.createTextNode("\r\n\r\n");
            e2.append(e6);
            e2.setLocalValue(e2.element, "atom-local-view-model", new AppFrameViewModel_1.AppFrameViewModel());
            this.append(e2);
            this.setLocalValue(this.element, "atom-local-view-model", this.resolve(AppFrameViewModel_1.AppFrameViewModel));
        };
        return AppFrame;
    }(AtomDockPanel_1.AtomDockPanel));
    exports.AppFrame = AppFrame;
});
//# sourceMappingURL=AppFrame.js.map