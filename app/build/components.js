

(function(window,baseType){

                window.jsonML["WebAtoms.TaskList.template"] = ["div",
{
  "data-atom-init": "TaskList_t0"
},
[
  "div",
  {},
  [
    "input",
    {
      "placeholder": "Task...",
      "data-atom-init": "TaskList_t1"
    }
  ],
  [
    "button",
    {
      "data-atom-init": "TaskList_t2",
      "text": "Add"
    }
  ]
],
[
  "div",
  {
    "atom-type": "AtomItemsControl",
    "data-atom-init": "TaskList_t3"
  }
]];

                (function(window,WebAtoms){
                    this.TaskList_t0 = function(e) { 
                        this.setLocalValue('viewModel',new TaskListViewModel,e);
                    };
		this.TaskList_t1 = function(e) { 
                        this.bind(e,'value', ["viewModel","newTask"], 1 );
                    };
		this.TaskList_t2 = function(e) { 
                        this.setLocalValue('eventClick',function(){ return  (Atom.get(this,"viewModel")).addTask(); },e);
                    };
		this.TaskList_t3 = function(e) { 
                        this.setLocalValue('items',Atom.get(this,"viewModel.items"),e);
                    };
                }).call(WebAtoms.PageSetup,window,WebAtoms);

                return classCreatorEx({
                    name: "TaskList",
                    base: baseType,
                    start: function(){

                    }
                })
            })(window, WebAtoms.AtomControl.prototype)