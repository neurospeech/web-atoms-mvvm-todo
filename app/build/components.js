

window.SettingsWindow = (function(window,baseType){

                window.Templates.jsonML["SettingsWindow.template"] = 
                    [
  [
    "div",
    {
      "atom-template": "windowTemplate",
      "atom-text": "Some Settings displayed here..."
    }
  ],
  [
    "div",
    {
      "atom-template": "commandTemplate"
    },
    [
      "button",
      {
        "data-atom-init": "SettingsWindow_t0",
        "atom-text": "Save"
      }
    ],
    [
      "button",
      {
        "data-atom-init": "SettingsWindow_t1",
        "atom-text": "Cancel"
      }
    ]
  ]
];

                (function(window,WebAtoms){
                    this.SettingsWindow_t0 = function(e) { 
                        this.setLocalValue('eventClick',function(){ return  (Atom.get(this,"viewModel")).save(); },e);
                    };
		this.SettingsWindow_t1 = function(e) { 
                        this.setLocalValue('eventClick',function(){ return  (Atom.get(this,"viewModel")).cancel(); },e);
                    };
                }).call(WebAtoms.PageSetup,window,WebAtoms);

                return classCreatorEx({
                    name: "SettingsWindow",
                    base: baseType,
                    start: function(e){
                         if(!AtomUI.attr(e,'atom-title')) AtomUI.attr(e, 'atom-title', 'Confirm' );
		 if(!AtomUI.attr(e,'atom-window-width')) AtomUI.attr(e, 'atom-window-width', '300' );
		 if(!AtomUI.attr(e,'atom-window-height')) AtomUI.attr(e, 'atom-window-height', '200' );
		
                    },
                    methods:{},
                    properties:{}
                })
            })(window, WebAtoms.AtomWindow.prototype)



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
      ],
      [
        "button",
        {
          "atom-type": "AtomDeleteButton",
          "data-atom-init": "TaskList_t5",
          "atom-text": "Delete"
        }
      ]
    ]
  ],
  [
    "button",
    {
      "data-atom-init": "TaskList_t6",
      "atom-text": "Settings"
    }
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
                        this.setLocalValue('items',(Atom.get(this,"viewModel.list")),e);
                    };
		this.TaskList_t4 = function(e) { 
                        this.setLocalValue('text',(Atom.get(this,"data.label")),e);
                    };
		this.TaskList_t5 = function(e) { 
                        this.setLocalValue('next',function(){ return  (Atom.get(this,"viewModel")).deleteTask((Atom.get(this,"data"))); },e);
                    };
		this.TaskList_t6 = function(e) { 
                        this.setLocalValue('eventClick',function(){ return  (Atom.get(this,"viewModel")).openSettings(); },e);
                    };
                }).call(WebAtoms.PageSetup,window,WebAtoms);

                return classCreatorEx({
                    name: "TaskList",
                    base: baseType,
                    start: function(e){
                         if(!AtomUI.attr(e,'data-atom-init')) AtomUI.attr(e, 'data-atom-init', 'TaskList_t0' );
		
                    },
                    methods:{},
                    properties:{}
                })
            })(window, WebAtoms.AtomControl.prototype)