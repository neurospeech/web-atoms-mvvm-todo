if(!window['Todo']){
                            window['Todo'] = {};
                        }
window.Todo.NewTaskWindow = (function(window,baseType){

                window.Templates.jsonML["Todo.NewTaskWindow.template"] = 
                    [
  [
    "div",
    {
      "atom-template": "windowTemplate"
    },
    [
      "div",
      {
        "atom-text": "Task:"
      }
    ],
    [
      "input",
      {
        "type": "text",
        "data-atom-init": "NewTaskWindow_t1"
      }
    ],
    [
      "span",
      {
        "style": "color:red; font-weight:bold",
        "data-atom-init": "NewTaskWindow_t2"
      }
    ],
    [
      "div",
      {
        "atom-text": "Status"
      }
    ],
    [
      "select",
      {
        "atom-type": "Todo.TaskStatusCombo",
        "data-atom-init": "NewTaskWindow_t3"
      }
    ],
    [
      "span",
      {
        "style": "color:red; font-weight:bold",
        "data-atom-init": "NewTaskWindow_t4"
      }
    ],
    [
      "div",
      {
        "atom-text": "Description:"
      }
    ],
    [
      "textarea",
      {
        "cols": "30",
        "rows": "10",
        "data-atom-init": "NewTaskWindow_t5"
      }
    ]
  ],
  [
    "div",
    {
      "atom-template": "commandTemplate"
    },
    [
      "button",
      {
        "data-atom-init": "NewTaskWindow_t6",
        "atom-text": "Save"
      }
    ],
    [
      "button",
      {
        "data-atom-init": "NewTaskWindow_t7",
        "atom-text": "Cancel"
      }
    ]
  ]
];

                (function(window,WebAtoms){
                    this.NewTaskWindow_t0 = function(e) { 
                        this.bind(e,'title', [["viewModel","task","label"]], 0, function(v1) { return (v1) || 'Add New Task'; });
			var oldInit = AtomUI.attr(e,'base-data-atom-init');
                        if(oldInit){
                            (window.WebAtoms.PageSetup[oldInit]).call(this,e);
                        }
                    
                    };
		this.NewTaskWindow_t1 = function(e) { 
                        this.bind(e,'value', ["viewModel","task","label"], 1 ,null,"keyup,keydown,keypress,blur,click");
			window.WebAtoms.dispatcher.callLater( 
                            function() { 
                                e.focus(); 
                            });
                    };
		this.NewTaskWindow_t2 = function(e) { 
                        this.bind(e,'text', [["viewModel","errors","label"]], 0, function(v1) { return (v1); });
                    };
		this.NewTaskWindow_t3 = function(e) { 
                        this.bind(e,'value', ["viewModel","task","status"], 1 );
                    };
		this.NewTaskWindow_t4 = function(e) { 
                        this.bind(e,'text', [["viewModel","errors","status"]], 0, function(v1) { return (v1); });
                    };
		this.NewTaskWindow_t5 = function(e) { 
                        this.bind(e,'value', ["viewModel","task","description"], 1 );
                    };
		this.NewTaskWindow_t6 = function(e) { 
                        this.setLocalValue('eventClick',function(){ 
                    return  (Atom.get(this,"viewModel")).save(); 
                },e);
                    };
		this.NewTaskWindow_t7 = function(e) { 
                        this.setLocalValue('eventClick',function(){ 
                    return  (Atom.get(this,"viewModel")).cancel(); 
                },e);
                    };
                }).call(WebAtoms.PageSetup,window,WebAtoms);

                return classCreatorEx({
                    name: "Todo.NewTaskWindow",
                    base: baseType,
                    start: function(e){
                         if(!AtomUI.attr(e,'atom-window-width')) AtomUI.attr(e, 'atom-window-width', '400' );
		 if(!AtomUI.attr(e,'atom-window-height')) AtomUI.attr(e, 'atom-window-height', '400' );
		
                        var oldInit = AtomUI.attr(e,'data-atom-init');
                        if(oldInit){
                            AtomUI.attr(e, 'base-data-atom-init',oldInit);
                        };
                        AtomUI.attr(e, 'data-atom-init','NewTaskWindow_t0');
                    
                    },
                    methods:{
                        setLocalValue: window.__atomSetLocalValue(baseType)
                    },
                    properties:{
                        
                    }
                })
            })(window, WebAtoms.AtomWindow.prototype);
if(!window['Todo']){
                            window['Todo'] = {};
                        }
window.Todo.TaskList = (function(window,baseType){

                window.Templates.jsonML["Todo.TaskList.template"] = 
                    [
  [
    "div",
    {},
    [
      "button",
      {
        "data-atom-init": "TaskList_t1",
        "atom-text": "Add New Task"
      }
    ]
  ],
  [
    "div",
    {
      "atom-type": "AtomItemsControl",
      "data-atom-init": "TaskList_t2"
    },
    [
      "div",
      {
        "atom-template": "itemTemplate",
        "style": "width:400px; margin:5px; padding:5px; position:relative"
      },
      [
        "span",
        {
          "data-atom-init": "TaskList_t3"
        }
      ],
      [
        "button",
        {
          "style": "position:absolute; right:5px; top:5px; margin:0; padding:2px;",
          "atom-type": "AtomDeleteButton",
          "data-atom-init": "TaskList_t4",
          "atom-text": "Delete"
        }
      ]
    ]
  ]
];

                (function(window,WebAtoms){
                    this.TaskList_t0 = function(e) { 
                        this.setLocalValue('viewModel',new Todo.TaskListViewModel(),e);
			var oldInit = AtomUI.attr(e,'base-data-atom-init');
                        if(oldInit){
                            (window.WebAtoms.PageSetup[oldInit]).call(this,e);
                        }
                    
                    };
		this.TaskList_t1 = function(e) { 
                        this.setLocalValue('eventClick',function(){ 
                    return  (Atom.get(this,"viewModel")).addTask(); 
                },e);
                    };
		this.TaskList_t2 = function(e) { 
                        this.setLocalValue('items',(Atom.get(this,"viewModel.list")),e);
                    };
		this.TaskList_t3 = function(e) { 
                        this.setLocalValue('text',(Atom.get(this,"data.label")),e);
                    };
		this.TaskList_t4 = function(e) { 
                        this.setLocalValue('next',function(){ 
                    return  (Atom.get(this,"viewModel")).deleteTask((Atom.get(this,"data"))); 
                },e);
                    };
                }).call(WebAtoms.PageSetup,window,WebAtoms);

                return classCreatorEx({
                    name: "Todo.TaskList",
                    base: baseType,
                    start: function(e){
                        
                        var oldInit = AtomUI.attr(e,'data-atom-init');
                        if(oldInit){
                            AtomUI.attr(e, 'base-data-atom-init',oldInit);
                        };
                        AtomUI.attr(e, 'data-atom-init','TaskList_t0');
                    
                    },
                    methods:{
                        setLocalValue: window.__atomSetLocalValue(baseType)
                    },
                    properties:{
                        
                    }
                })
            })(window, WebAtoms.AtomControl.prototype);
if(!window['Todo']){
                            window['Todo'] = {};
                        }
window.Todo.TaskStatusCombo = (function(window,baseType){

                window.Templates.jsonML["Todo.TaskStatusCombo.template"] = 
                    [];

                (function(window,WebAtoms){
                    this.TaskStatusCombo_t0 = function(e) { 
                        this.setLocalValue('items',Todo.ConfigService.instance.getStatusList(),e);
			var oldInit = AtomUI.attr(e,'base-data-atom-init');
                        if(oldInit){
                            (window.WebAtoms.PageSetup[oldInit]).call(this,e);
                        }
                    
                    };
                }).call(WebAtoms.PageSetup,window,WebAtoms);

                return classCreatorEx({
                    name: "Todo.TaskStatusCombo",
                    base: baseType,
                    start: function(e){
                        
                        var oldInit = AtomUI.attr(e,'data-atom-init');
                        if(oldInit){
                            AtomUI.attr(e, 'base-data-atom-init',oldInit);
                        };
                        AtomUI.attr(e, 'data-atom-init','TaskStatusCombo_t0');
                    
                    },
                    methods:{
                        setLocalValue: window.__atomSetLocalValue(baseType)
                    },
                    properties:{
                        
                    }
                })
            })(window, WebAtoms.AtomComboBox.prototype);
