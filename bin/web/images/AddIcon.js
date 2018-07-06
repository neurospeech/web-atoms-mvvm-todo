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
    var AddIcon = /** @class */ (function () {
        function AddIcon() {
        }
        Object.defineProperty(AddIcon, "contentUrl", {
            get: function () {
                if (AddIcon.mContentUrl) {
                    return AddIcon.mContentUrl;
                }
                return AddIcon.mContentUrl =
                    "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjog" +
                        "QWRvYmUgSWxsdXN0cmF0b3IgMTguMS4xLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjog" +
                        "Ni4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4" +
                        "bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0i" +
                        "Q2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI3Ljk2MyAyNy45NjMiIHN0eWxlPSJl" +
                        "bmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI3Ljk2MyAyNy45NjM7IiB4bWw6c3BhY2U9InByZXNlcnZl" +
                        "IiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8Zz4KCTxnIGlkPSJjMTQwX194MkJfIj4KCQk8" +
                        "cGF0aCBkPSJNMTMuOTgsMEM2LjI1OSwwLDAsNi4yNiwwLDEzLjk4MnM2LjI1OSwxMy45ODEsMTMuOTgs" +
                        "MTMuOTgxYzcuNzI1LDAsMTMuOTgzLTYuMjYsMTMuOTgzLTEzLjk4MSAgICBDMjcuOTYzLDYuMjYsMjEu" +
                        "NzA1LDAsMTMuOTgsMHogTTIxLjEwMiwxNi4wNTloLTQuOTM5djUuMDQyaC00LjI5OXYtNS4wNDJINi44" +
                        "NjJWMTEuNzZoNS4wMDF2LTQuOWg0LjI5OXY0LjloNC45Mzl2NC4yOTlIMjEuMTAyeiAgICAiIGZpbGw9" +
                        "IiNEODAwMjciLz4KCTwvZz4KCTxnIGlkPSJDYXBhXzFfOV8iPgoJPC9nPgo8L2c+Cjwvc3ZnPgo=";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AddIcon, "url", {
            get: function () {
                return "data:image/svg+xml;base64," + AddIcon.contentUrl;
            },
            enumerable: true,
            configurable: true
        });
        AddIcon.mContentUrl = null;
        return AddIcon;
    }());
    exports.AddIcon = AddIcon;
});
//# sourceMappingURL=AddIcon.js.map