

(function(window,baseType){

                window.jsonML["WebAtoms.TaskList.template"] = ["div",
{
  "data-atom-init": "TaskList_t0"
},
[
  "div",
  {},
  [
    "input"
  ],
  [
    "button",
    {
      "atom-event-click": "atom-event-click",
      "{": "{",
      "()": "()",
      "-": "-",
      "text": " ($viewModel).addTask() }\"Add"
    }
  ]
],
[
  "div",
  {
    "atom-type": "AtomItemsControl",
    "data-atom-init": "TaskList_t1"
  }
]];

                (function(window,WebAtoms){
                    this.TaskList_t0 = function(e) { 
                        this.setLocalValue('viewModel',new TaskListViewModel,e);
                    };
		this.TaskList_t1 = function(e) { 
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