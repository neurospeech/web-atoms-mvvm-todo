"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("../core/types");
var Scope;
(function (Scope) {
    Scope[Scope["Global"] = 1] = "Global";
    Scope[Scope["Scoped"] = 2] = "Scoped";
    Scope[Scope["Transient"] = 3] = "Transient";
})(Scope = exports.Scope || (exports.Scope = {}));
var ServiceDescription = /** @class */ (function () {
    function ServiceDescription(id, scope, type, factory) {
        this.id = id;
        this.scope = scope;
        this.type = type;
        this.factory = factory;
        this.factory = this.factory || (function (sp) {
            return sp.create(type);
        });
    }
    return ServiceDescription;
}());
exports.ServiceDescription = ServiceDescription;
var ServiceCollection = /** @class */ (function () {
    function ServiceCollection() {
        this.registrations = [];
        this.ids = 1;
    }
    ServiceCollection.prototype.register = function (type, factory, scope, id) {
        if (scope === void 0) { scope = Scope.Transient; }
        types_1.ArrayHelper.remove(this.registrations, function (r) { return id ? r.id === id : r.type === type; });
        if (!id) {
            id = type.toString() + this.ids;
            this.ids++;
        }
        var sd = new ServiceDescription(id, scope, type, factory);
        this.registrations.push(sd);
        return sd;
    };
    ServiceCollection.prototype.registerScoped = function (type, factory, id) {
        return this.register(type, factory, Scope.Scoped, id);
    };
    ServiceCollection.prototype.registerSingleton = function (type, factory, id) {
        return this.register(type, factory, Scope.Global, id);
    };
    ServiceCollection.prototype.get = function (type) {
        return this.registrations.find(function (s) { return s.id === type || s.type === type; });
    };
    ServiceCollection.instance = new ServiceCollection();
    return ServiceCollection;
}());
exports.ServiceCollection = ServiceCollection;
//# sourceMappingURL=ServiceCollection.js.map