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
    var AddButtonAsync = /** @class */ (function () {
        function AddButtonAsync() {
        }
        AddButtonAsync.url = function () {
            return new Promise(function (resolve, reject) {
                SystemJS.import("AddButton")
                    .then(function (m) {
                    resolve(m["AddButton"].url());
                }).catch(function (r) {
                    reject(r);
                });
            });
        };
        return AddButtonAsync;
    }());
    exports.AddButtonAsync = AddButtonAsync;
});
//# sourceMappingURL=AddButtonAsync.js.map