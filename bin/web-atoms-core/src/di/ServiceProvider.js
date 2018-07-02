"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Inject_1 = require("./Inject");
var ServiceCollection_1 = require("./ServiceCollection");
var TypeKey_1 = require("./TypeKey");
var ServiceProvider = /** @class */ (function () {
    function ServiceProvider(parent) {
        this.parent = parent;
        this.instances = {};
        if (parent === null) {
            ServiceCollection_1.ServiceCollection.instance.registerScoped(ServiceProvider);
        }
        var sd = ServiceCollection_1.ServiceCollection.instance.get(ServiceProvider);
        this.instances[sd.id] = this;
    }
    Object.defineProperty(ServiceProvider.prototype, "global", {
        get: function () {
            return this.parent === null ? this : this.parent.global;
        },
        enumerable: true,
        configurable: true
    });
    ServiceProvider.prototype.get = function (key) {
        return this.resolve(key, true);
    };
    ServiceProvider.prototype.put = function (key, value) {
        var sd = ServiceCollection_1.ServiceCollection.instance.get(key);
        if (!sd) {
            sd = ServiceCollection_1.ServiceCollection.instance.register(key, function () { return value; }, ServiceCollection_1.Scope.Global);
        }
        this.instances[sd.id] = value;
    };
    ServiceProvider.prototype.resolve = function (key, create, defValue) {
        if (create === void 0) { create = false; }
        var sd = ServiceCollection_1.ServiceCollection.instance.get(key);
        if (!sd) {
            if (!create) {
                if (defValue !== undefined) {
                    return defValue;
                }
                throw new Error("No service registered for type " + key);
            }
            return this.create(key);
        }
        if (sd.type === ServiceProvider) {
            return this;
        }
        if (sd.scope === ServiceCollection_1.Scope.Global) {
            return this.global.getValue(sd);
        }
        if (sd.scope === ServiceCollection_1.Scope.Scoped) {
            if (this.parent === null) {
                throw new Error("Scoped dependency cannot be created on global");
            }
        }
        return this.getValue(sd);
    };
    ServiceProvider.prototype.getValue = function (sd) {
        if (sd.scope === ServiceCollection_1.Scope.Transient) {
            return sd.factory(this);
        }
        var v = this.instances[sd.id];
        if (!v) {
            this.instances[sd.id] = v = sd.factory(this);
        }
        return v;
    };
    ServiceProvider.prototype.newScope = function () {
        return new ServiceProvider(this);
    };
    ServiceProvider.prototype.dispose = function () {
        for (var key in this.instances) {
            if (this.instances.hasOwnProperty(key)) {
                var element = this.instances[key];
                if (element === this) {
                    continue;
                }
                var d = element;
                if (d.dispose) {
                    d.dispose();
                }
            }
        }
    };
    ServiceProvider.prototype.create = function (key) {
        var _this = this;
        var plist = Inject_1.InjectedTypes.paramList[TypeKey_1.TypeKey.get(key)];
        // We need to find @Inject for base types if
        // current type does not define any constructor
        var type = key;
        while (plist === undefined) {
            type = Object.getPrototypeOf(type);
            if (!type) {
                break;
            }
            var typeKey = TypeKey_1.TypeKey.get(type);
            plist = Inject_1.InjectedTypes.paramList[typeKey];
            if (!plist) {
                Inject_1.InjectedTypes.paramList[typeKey] = plist;
            }
        }
        if (plist) {
            var pv = plist.map(function (x) { return x ? _this.resolve(x) : (void 0); });
            pv.unshift(null);
            return new (key.bind.apply(key, pv))();
        }
        var v = new (key)();
        return v;
    };
    return ServiceProvider;
}());
exports.ServiceProvider = ServiceProvider;
//# sourceMappingURL=ServiceProvider.js.map