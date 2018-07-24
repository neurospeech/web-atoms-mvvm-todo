// tslint:disable
			declare var UMD: any;
			UMD = UMD || { resolvePath: (v) => v };
			export const ModuleFiles =
				{
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
}
