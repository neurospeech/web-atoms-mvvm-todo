"use strict";
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var AtomDisposable = /** @class */ (function () {
    /**
     *
     */
    // tslint:disable-next-line:ban-types
    function AtomDisposable(f) {
        this.f = f;
    }
    AtomDisposable.prototype.dispose = function () {
        this.f();
    };
    return AtomDisposable;
}());
exports.AtomDisposable = AtomDisposable;
/**
 *
 *
 * @export
 * @class CancelToken
 */
var CancelToken = /** @class */ (function () {
    function CancelToken() {
        this.listeners = [];
    }
    Object.defineProperty(CancelToken.prototype, "cancelled", {
        get: function () {
            return this.mCancelled;
        },
        enumerable: true,
        configurable: true
    });
    CancelToken.prototype.cancel = function () {
        var e_1, _a;
        this.mCancelled = true;
        try {
            for (var _b = __values(this.listeners), _c = _b.next(); !_c.done; _c = _b.next()) {
                var fx = _c.value;
                fx();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    CancelToken.prototype.reset = function () {
        this.mCancelled = false;
        this.listeners.length = 0;
    };
    CancelToken.prototype.registerForCancel = function (f) {
        if (this.mCancelled) {
            f();
            this.cancel();
            return;
        }
        this.listeners.push(f);
    };
    return CancelToken;
}());
exports.CancelToken = CancelToken;
var ArrayHelper = /** @class */ (function () {
    function ArrayHelper() {
    }
    ArrayHelper.remove = function (a, filter) {
        for (var i = 0; i < a.length; i++) {
            var item = a[i];
            if (filter(item)) {
                a.splice(i, 1);
                return true;
            }
        }
        return false;
    };
    return ArrayHelper;
}());
exports.ArrayHelper = ArrayHelper;
//# sourceMappingURL=types.js.map