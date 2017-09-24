# Web Atoms MVVM Sample
Sample Todo Application using Web Atoms MVVM contains following features.

* REST Service and Mock
* Small and Minimal Dependency Injection 
* View Model and Reusable Components
* Unit Tests

## Components

Components are organized in `app/views` folder. Component generator uses 
`waconfig.json` to convert HTML components into `views.js`, it also contains
`views.js.d.ts` so you can statically reference them in your typescript files.

1. `TaskStatusCombo` dropdown is reusable dropdown that loads values from `ConfigService`
2. `TaskListView` is a main view that hosts list of tasks and button to add/remove tasks.
3. `NewTaskWindow` is window components that will allow you to validate/edit and save task.

## Services

REST Services are kept in `app/services` folder. They are decorated with HTTP methods and
parameter bindings.

1. `TaskService` provides CRUD operations on tasks.
2. `ConfigSerice` provides configuration lists such as status list etc.

## Models

In this folder, `Task` and `ConfigItem` models are stored, Task is a class where else ConfigItem is 
just a type.

## View Models

Components have corresponding View Model in `app/view-models` folder. Not every component needs ViewModel.

### TaskListViewModel

1. `TaskListViewModel` provides list of tasks, which are loaded asynchronously from `TaskService` in `init` method.
2. It provides `add/remove` method for task.
3. In `add` method it opens new task window and awaits for result asynchronously.

### NewTaskWindowViewModel

1. `NewTaskWindowViewModel` provides task model and validation for the model.
2. Validations are added as inline lambda expressions. Validation expression is evaluated automatically when any referenced property is modified.
3. When you call `this.close(task)` method, parameter `task` is resolved in promise that was created when the task list opened a window.

# Unit Tests

We have created two unit tests.

## Test for Task List View Model

1. We will call `expectWindow` on `MockWindowService.instance` to register what window should open when we call a method. We will also provide result that we will expect to resolve in promise.
2. We will verify that second task in the list is the new task we were expecting from the window.

## NewTaskWindow Test

1. We will call `expectAlert` to notify test manager that we will expect
an alert when we will try to save empty task.
2. We will call `expectAlert` again after setting label.
3. In end of test we will call `MockWindowService.instance.assert()`, that will throw an error if any of expected alert/window was never called
from the target methods.


