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
    // tslint:disable
    exports.ModuleFiles = {
        files: {
            "images": {
                "AddIcon.svg": "web-atoms-mvvm-todo/bin/images/AddIcon.svg"
            },
            "views": {
                "AppFrame": "web-atoms-mvvm-todo/bin/{platform}/views/AppFrame",
                "LoginView": "web-atoms-mvvm-todo/bin/{platform}/views/LoginView",
                "NewTaskWindow": "web-atoms-mvvm-todo/bin/{platform}/views/NewTaskWindow",
                "TaskEditor": "web-atoms-mvvm-todo/bin/{platform}/views/TaskEditor",
                "TaskListView": "web-atoms-mvvm-todo/bin/{platform}/views/TaskListView",
                "TaskStatusCombo": "web-atoms-mvvm-todo/bin/{platform}/views/TaskStatusCombo",
                "UserSelector": "web-atoms-mvvm-todo/bin/{platform}/views/UserSelector"
            }
        }
    };
});
//# sourceMappingURL=ModuleFiles.js.map