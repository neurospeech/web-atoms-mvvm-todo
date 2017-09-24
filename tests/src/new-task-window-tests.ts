// tslint:disable

var Category = WebAtoms.Unit.Category;
var Test = WebAtoms.Unit.Test;
var Assert = WebAtoms.Unit.Assert;
var TestItem = WebAtoms.Unit.TestItem;
var MockWindowService = WebAtoms.MockWindowService;

/**
 * 
 * 
 * @class WindowTests
 * @extends {TestItem}
 */
@Category("Window Tests")
class WindowTests extends TestItem{

    constructor(){
        super();

        // following line will use mock of REST Services
        Atom.designMode = true;

        // any tests involving window service must
        // setup a mock window service
        WebAtoms.DI.push(WindowService, new MockWindowService());
    }

    dispose(){

        // this is important, we must verify that all
        // expected windows did open correctly
        MockWindowService.instance.assert();


        // after tests are done, we should remove
        // mock window service
        WebAtoms.DI.pop(WindowService);

        
        return super.dispose();
    }

    /**
     * This task verifies every possibility of Window
     * 
     * @memberof WindowTests
     */
    @Test("New Task")
    async newTask(){

        var vm = new Todo.NewTaskViewWindowViewModel();

        MockWindowService.instance.expectAlert("Please complete all required fields.");

        await vm.save();

        Assert.equals("Task cannot be empty", vm.errors.label);
        Assert.equals("Status cannot be empty", vm.errors.status);

        MockWindowService.instance.expectAlert("Please complete all required fields.");
        vm.task.label = "Sample";
        await vm.save();
        Assert.equals("Status cannot be empty", vm.errors.status);
        
        vm.task.status = "Open";

        await vm.save();


    }

    @Test("Task List new Window")
    async taskList(){

        var vm = new Todo.TaskListViewModel();


        // we will not execute methods of view model here...
        // instead we will only return expected return value
        // unit test of View Model of Window should verify all
        // individual tasks
        MockWindowService.instance
            .expectWindow<Todo.NewTaskViewWindowViewModel>(Todo.NewTaskWindow, async vm => {

                vm.task.label = "New Task";
                vm.task.status = "Open";

                return vm.task;

            } );


        await vm.addTask();

        var task = vm.list[1];

        Assert.equals("New Task", task.label);
        Assert.equals("Open", task.status);
        
        
    }

}