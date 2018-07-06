// tslint:disable
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
    var AddIconAsync = /** @class */ (function () {
        function AddIconAsync() {
        }
        AddIconAsync.url = function () {
            return new Promise(function (resolve, reject) {
                SystemJS.import("AddIcon")
                    .then(function (m) {
                    resolve(m["AddIcon"].url());
                }).catch(function (r) {
                    reject(r);
                });
            });
        };
        return AddIconAsync;
    }());
    exports.AddIconAsync = AddIconAsync;
});
//# sourceMappingURL=AddIconAsync.js.map