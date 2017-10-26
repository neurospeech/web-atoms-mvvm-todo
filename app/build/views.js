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
        "atom-type": "Todo.TaskEditor"
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
        "data-atom-init": "NewTaskWindow_t1",
        "atom-text": "Save"
      }
    ],
    [
      "button",
      {
        "data-atom-init": "NewTaskWindow_t2",
        "atom-text": "Cancel"
      }
    ]
  ]
];

                (function(window,WebAtoms){
                    this.NewTaskWindow_t0 = function(e) {
                        this.bind(e,'title', [["viewModel","task","label"],["viewModel","task","label"]], 0, function(v1,v2) { return (v1) ? ('Task ' + (v2)) : 'Add New Task'; });
			var oldInit = AtomUI.attr(e,'base-data-atom-init');
                        if(oldInit){
                            (window.WebAtoms.PageSetup[oldInit]).call(this,e);
                        }
                    
                    };
		this.NewTaskWindow_t1 = function(e) {
                        this.setLocalValue('eventClick',function(){ 
                    return  (Atom.get(this,"viewModel")).save(); 
                },e);
                    };
		this.NewTaskWindow_t2 = function(e) {
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

                    (function(d){
                        var css = ".atom-form .atom-field label.atom-label {\n  display: block;\n}\n.atom-form .atom-field input {\n  margin: 5px;\n}\n.atom-form .atom-field input {\n  width: 80%;\n}\n.atom-form .atom-field textarea {\n  width: 80%;\n}\n.atom-form .atom-field .atom-error {\n  font-size: smaller;\n  color: red;\n}\n";
                        var head = d.head || d.getElementsByTagName('head')[0];
                        var style = d.createElement('style');
                        style.type = 'text/css';
                        style.id = "component_style_Todo_TaskEditor";
                        if(style.styleSheet){
                            style.styleSheet.cssText = css;
                        }else{
                            style.appendChild(d.createTextNode(css));
                        }
                        head.appendChild(style);
                    })(document);
                
                window.Todo.TaskEditor = (function(window,baseType){

                window.Templates.jsonML["Todo.TaskEditor.template"] = 
                    [
  [
    "div",
    {
      "class": "atom-form"
    },
    [
      "div",
      {
        "class": "atom-field"
      },
      [
        "label",
        {
          "atom-text": "Task:",
          "class": "atom-label"
        }
      ],
      [
        "span",
        {
          "class": "atom-required"
        }
      ],
      [
        "input",
        {
          "type": "text",
          "data-atom-init": "TaskEditor_t1"
        }
      ],
      [
        "div",
        {
          "class": "atom-error",
          "data-atom-init": "TaskEditor_t2"
        }
      ]
    ],
    [
      "div",
      {
        "class": "atom-field"
      },
      [
        "label",
        {
          "atom-text": "Status:",
          "class": "atom-label"
        }
      ],
      [
        "span",
        {
          "class": "atom-required"
        }
      ],
      [
        "select",
        {
          "atom-type": "Todo.TaskStatusCombo",
          "data-atom-init": "TaskEditor_t3"
        }
      ],
      [
        "div",
        {
          "class": "atom-error",
          "data-atom-init": "TaskEditor_t4"
        }
      ]
    ],
    [
      "div",
      {
        "class": "atom-field"
      },
      [
        "label",
        {
          "atom-text": "Description:",
          "class": "atom-label"
        }
      ],
      [
        "span",
        {
          "class": "atom-required"
        }
      ],
      [
        "textarea",
        {
          "cols": "30",
          "rows": "10",
          "data-atom-init": "TaskEditor_t5"
        }
      ],
      [
        "div",
        {
          "class": "atom-error"
        }
      ]
    ],
    [
      "div",
      {
        "class": "atom-field",
        "data-atom-init": "TaskEditor_t6"
      },
      [
        "label",
        {
          "class": "atom-label"
        }
      ],
      [
        "span",
        {
          "class": "atom-required"
        }
      ],
      [
        "div",
        {},
        [
          "button",
          {
            "data-atom-init": "TaskEditor_t7",
            "atom-text": "Save"
          }
        ]
      ],
      [
        "div",
        {
          "class": "atom-error"
        }
      ]
    ]
  ]
];

                (function(window,WebAtoms){
                    this.TaskEditor_t0 = function(e) {
                        var oldInit = AtomUI.attr(e,'base-data-atom-init');
                        if(oldInit){
                            (window.WebAtoms.PageSetup[oldInit]).call(this,e);
                        }
                    
                    };
		this.TaskEditor_t1 = function(e) {
                        this.bind(e,'value', ["viewModel","task","label"], 1 ,null,"keyup,keydown,keypress,blur,click");
			window.WebAtoms.dispatcher.callLater( 
                                function() { 
                                    e.focus(); 
                                });
                    };
		this.TaskEditor_t2 = function(e) {
                        this.bind(e,'text', [["viewModel","errors","label"]], 0, function(v1) { return (v1); });
			this.bind(e,'styleDisplay', [["viewModel","errors","label"]], 0, function(v1) { return (v1) ? '' : 'none'; });
                    };
		this.TaskEditor_t3 = function(e) {
                        this.bind(e,'value', ["viewModel","task","status"], 1 );
                    };
		this.TaskEditor_t4 = function(e) {
                        this.bind(e,'text', [["viewModel","errors","status"]], 0, function(v1) { return (v1); });
			this.bind(e,'styleDisplay', [["viewModel","errors","status"]], 0, function(v1) { return (v1) ? '' : 'none'; });
                    };
		this.TaskEditor_t5 = function(e) {
                        this.bind(e,'value', ["viewModel","task","description"], 1 );
                    };
		this.TaskEditor_t6 = function(e) {
                        this.setLocalValue('styleDisplay',!(Atom.get(this,"viewModel.windowName"))  ? '' : 'none',e);
                    };
		this.TaskEditor_t7 = function(e) {
                        this.setLocalValue('eventClick',function(){ 
                    return  (Atom.get(this,"viewModel")).save(); 
                },e);
                    };
                }).call(WebAtoms.PageSetup,window,WebAtoms);

                return classCreatorEx({
                    name: "Todo.TaskEditor",
                    base: baseType,
                    start: function(e){
                        
                        var oldInit = AtomUI.attr(e,'data-atom-init');
                        if(oldInit){
                            AtomUI.attr(e, 'base-data-atom-init',oldInit);
                        };
                        AtomUI.attr(e, 'data-atom-init','TaskEditor_t0');
                    
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

                window.Todo.TaskList = (function(window,baseType){

                window.Templates.jsonML["Todo.TaskList.template"] = 
                    [
  [
    "header",
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
      "atom-dock": "Left",
      "atom-type": "AtomListBox",
      "data-atom-init": "TaskList_t2"
    },
    [
      "div",
      {
        "atom-template": "itemTemplate",
        "class": "item"
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
          "atom-type": "AtomDeleteButton",
          "data-atom-init": "TaskList_t4",
          "atom-text": "Delete"
        }
      ]
    ]
  ],
  [
    "section",
    {
      "atom-type": "Todo.TaskEditor",
      "data-atom-init": "TaskList_t5"
    }
  ]
];

                (function(window,WebAtoms){
                    this.TaskList_t0 = function(e) {
                        this.setLocalValue('viewModel',new Todo.TaskListViewModel(),e, true);
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
			this.bind(e,'selectedItem', ["viewModel","selectedTask"], 1 );
                    };
		this.TaskList_t3 = function(e) {
                        this.setLocalValue('text',(Atom.get(this,"data.label")),e);
                    };
		this.TaskList_t4 = function(e) {
                        this.setLocalValue('next',function(){ 
                    return  (Atom.get(this,"viewModel")).deleteTask((Atom.get(this,"data"))); 
                },e);
                    };
		this.TaskList_t5 = function(e) {
                        this.setLocalValue('viewModel',new Todo.TaskEditorViewModel(),e, true);
			this.bind(e,'styleDisplay', [["viewModel","task"]], 0, function(v1) { return (v1) ? '' : 'none'; });
                    };
                }).call(WebAtoms.PageSetup,window,WebAtoms);

                return classCreatorEx({
                    name: "Todo.TaskList",
                    base: baseType,
                    start: function(e){
                         if(!AtomUI.attr(e,'atom-class')) AtomUI.attr(e, 'atom-class', 'task-list' );
		
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
            })(window, WebAtoms.AtomDockPanel.prototype);
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
