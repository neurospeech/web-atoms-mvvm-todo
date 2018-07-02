"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Register_1 = require("./Register");
var ServiceCollection_1 = require("./ServiceCollection");
function RegisterSingleton(target) {
    Register_1.Register({ scope: ServiceCollection_1.Scope.Global })(target);
}
exports.RegisterSingleton = RegisterSingleton;
//# sourceMappingURL=RegisterSingleton.js.map