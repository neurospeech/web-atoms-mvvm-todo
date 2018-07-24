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
    UMD = UMD || { resolvePath: function (v) { return v; } };
    exports.ModuleFiles = {
        "src": {
            "images": {
                "AddIcon_svg": UMD.resolvePath("web-atoms-mvvm-todo/src/images/AddIcon.svg")
            }
        },
        "views": {
            "AppFrame": "web-atoms-mvvm-todo/dist/{platform}/views/AppFrame",
            "LoginView": "web-atoms-mvvm-todo/dist/{platform}/views/LoginView",
            "NewTaskWindow": "web-atoms-mvvm-todo/dist/{platform}/views/NewTaskWindow",
            "TaskEditor": "web-atoms-mvvm-todo/dist/{platform}/views/TaskEditor",
            "TaskListView": "web-atoms-mvvm-todo/dist/{platform}/views/TaskListView",
            "TaskStatusCombo": "web-atoms-mvvm-todo/dist/{platform}/views/TaskStatusCombo",
            "UserSelector": "web-atoms-mvvm-todo/dist/{platform}/views/UserSelector"
        }
    };
});
//# sourceMappingURL=ModuleFiles.js.map