"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var RegisterSingleton_1 = require("../di/RegisterSingleton");
var reISO = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*))(?:Z|(\+|-)([\d|:]*))?$/;
var reMsAjax = /^\/Date\((d|-|.*)\)[\/|\\]$/;
var JsonService = /** @class */ (function () {
    function JsonService() {
    }
    JsonService.prototype.parse = function (text) {
        return JSON.parse(text, function (key, value) {
            // trannsform date...
            if (typeof value === "string") {
                var a = reISO.exec(value);
                if (a) {
                    return new Date(value);
                }
                a = reMsAjax.exec(value);
                if (a) {
                    var b = a[1].split(/[-+,.]/);
                    return new Date(b[0] ? +b[0] : 0 - +b[1]);
                }
            }
            return value;
        });
    };
    JsonService.prototype.stringify = function (v) {
        return JSON.stringify(v, function (key, value) {
            if (/^\_\$\_/.test(key)) {
                return undefined;
            }
            return value;
        }, 2);
    };
    JsonService = __decorate([
        RegisterSingleton_1.RegisterSingleton
    ], JsonService);
    return JsonService;
}());
exports.JsonService = JsonService;
//# sourceMappingURL=JsonService.js.map