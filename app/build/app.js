var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Task = /** @class */ (function () {
    function Task() {
        this.label = "";
    }
    return Task;
}());
var TaskListViewModel = /** @class */ (function (_super) {
    __extends(TaskListViewModel, _super);
    function TaskListViewModel() {
        var _this = _super.call(this) || this;
        _this.list = new WebAtoms.AtomList();
        _this.newTask = new Task();
        return _this;
    }
    TaskListViewModel.prototype.addTask = function () {
        this.list.add(this.newTask);
        this.newTask = new Task();
    };
    TaskListViewModel.prototype.deleteTask = function (task) {
        this.list.remove(task);
    };
    __decorate([
        bindableProperty
    ], TaskListViewModel.prototype, "list", void 0);
    __decorate([
        bindableProperty
    ], TaskListViewModel.prototype, "newTask", void 0);
    return TaskListViewModel;
}(WebAtoms.AtomViewModel));
//# sourceMappingURL=app.js.map