"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ServiceCollection_1 = require("./ServiceCollection");
function Register(id, scope) {
    return function (target) {
        if (typeof id === "object") {
            if (scope) {
                id.scope = scope;
            }
            ServiceCollection_1.ServiceCollection.instance.register(id.for || target, id.for ? function (sp) { return sp.create(target); } : null, id.scope || ServiceCollection_1.Scope.Transient, id.id);
            return;
        }
        ServiceCollection_1.ServiceCollection.instance.register(target, null, scope, id);
    };
}
exports.Register = Register;
//# sourceMappingURL=Register.js.map