(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Channels = /** @class */ (function () {
        function Channels() {
        }
        Channels.SelectedTaskChanged = "selected-task-changed";
        return Channels;
    }());
    exports.Channels = Channels;
});
//# sourceMappingURL=_channels.js.map