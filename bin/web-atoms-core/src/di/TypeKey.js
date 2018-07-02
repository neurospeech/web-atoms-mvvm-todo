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
var TypeKey = /** @class */ (function () {
    function TypeKey() {
    }
    TypeKey.get = function (c) {
        var e_1, _a;
        try {
            for (var _b = __values(this.keys), _c = _b.next(); !_c.done; _c = _b.next()) {
                var iterator = _c.value;
                if (iterator.c === c) {
                    return iterator.key;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var key = "key" + this.keys.length;
        this.keys.push({ c: c, key: key });
        return key;
    };
    TypeKey.keys = [];
    return TypeKey;
}());
exports.TypeKey = TypeKey;
//# sourceMappingURL=TypeKey.js.map