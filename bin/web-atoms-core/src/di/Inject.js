"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TypeKey_1 = require("./TypeKey");
var InjectedTypes = /** @class */ (function () {
    function InjectedTypes() {
    }
    InjectedTypes.paramList = {};
    return InjectedTypes;
}());
exports.InjectedTypes = InjectedTypes;
function Inject(target, name, index) {
    var key = TypeKey_1.TypeKey.get(target);
    var plist = Reflect.getMetadata("design:paramtypes", target, name);
    var pSavedList = InjectedTypes.paramList[key] || (InjectedTypes.paramList[key] = []);
    pSavedList[index] = plist[index];
}
exports.Inject = Inject;
//# sourceMappingURL=Inject.js.map