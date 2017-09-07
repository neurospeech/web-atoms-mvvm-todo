

window.TaskList = (function(window,baseType){

                window.Templates.jsonML["TaskList.template"] = 
                    [
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
        "atom-text": "Add"
      }
    ]
  ],
  [
    "div",
    {
      "atom-type": "AtomItemsControl",
      "data-atom-init": "TaskList_t3"
    },
    [
      "div",
      {
        "atom-template": "itemTemplate"
      },
      [
        "span",
        {
          "data-atom-init": "TaskList_t4"
        }
      ]
    ]
  ]
];

                (function(window,WebAtoms){
                    this.TaskList_t0 = function(e) { 
                        this.setLocalValue('viewModel',new TaskListViewModel(),e);
                    };
		this.TaskList_t1 = function(e) { 
                        this.bind(e,'value', ["viewModel","newTask","label"], 1 );
                    };
		this.TaskList_t2 = function(e) { 
                        this.setLocalValue('eventClick',function(){ return  (Atom.get(this,"viewModel")).addTask(); },e);
                    };
		this.TaskList_t3 = function(e) { 
                        this.setLocalValue('items',Atom.get(this,"viewModel.list"),e);
                    };
		this.TaskList_t4 = function(e) { 
                        this.setLocalValue('text',Atom.get(this,"data.label"),e);
                    };
                }).call(WebAtoms.PageSetup,window,WebAtoms);

                return classCreatorEx({
                    name: "TaskList",
                    base: baseType,
                    start: function(e){
                        AtomUI.attr(e, 'data-atom-init', 'TaskList_t0' );
		
                    },
                    methods:{},
                    properties:{}
                })
            })(window, WebAtoms.AtomControl.prototype)