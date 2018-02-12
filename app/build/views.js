if(!window['Todo']){
						window['Todo'] = {};
					}

			window.Todo.AppFrame = (function(window,baseType){

			window.Templates.jsonML["Todo.AppFrame.template"] =
				[
  [
    "section",
    {
      "atom-type": "AtomPageView",
      "data-atom-init": "AppFrame_t1"
    }
  ]
];

			(function(window,WebAtoms){
				this.AppFrame_t0 = function(e) {
					this.setLocalValue('localViewModel',new Todo.AppFrameViewModel(),e);
			var oldInit = AtomUI.attr(e,'base-data-atom-init');
					if(oldInit){
						(window.WebAtoms.PageSetup[oldInit]).call(this,e);
					}
				
				};
		this.AppFrame_t1 = function(e) {
					this.bind(e,'url', [["localViewModel","url"]], 0, function(v1) { return (v1); });
				};
			}).call(WebAtoms.PageSetup,window,WebAtoms);

			return classCreatorEx({
				name: "Todo.AppFrame",
				base: baseType,
				start: function(e){
					
					var oldInit = AtomUI.attr(e,'data-atom-init');
					if(oldInit){
						AtomUI.attr(e, 'base-data-atom-init',oldInit);
					};
					AtomUI.attr(e, 'data-atom-init','AppFrame_t0');
				
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
			this.setLocalValue('windowWidth',"400", e)
			this.setLocalValue('windowHeight',"400", e)
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
          "class": "atom-label",
          "data-atom-init": "TaskEditor_t1"
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
          "data-atom-init": "TaskEditor_t2"
        }
      ],
      [
        "div",
        {
          "class": "atom-error",
          "data-atom-init": "TaskEditor_t3"
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
          "class": "atom-label",
          "data-atom-init": "TaskEditor_t4"
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
          "data-atom-init": "TaskEditor_t5"
        }
      ],
      [
        "div",
        {
          "class": "atom-error",
          "data-atom-init": "TaskEditor_t6"
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
          "class": "atom-label",
          "data-atom-init": "TaskEditor_t7"
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
          "data-atom-init": "TaskEditor_t8"
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
        "class": "atom-field"
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
          "span",
          {
            "data-atom-init": "TaskEditor_t9"
          }
        ],
        [
          "button",
          {
            "data-atom-init": "TaskEditor_t10",
            "atom-text": "Assign"
          }
        ]
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
        "data-atom-init": "TaskEditor_t11"
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
            "data-atom-init": "TaskEditor_t12",
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
					this.setLocalValue('text',"Task:", e)
				};
		this.TaskEditor_t2 = function(e) {
					this.bind(e,'value', ["viewModel","task","label"], 1 ,null,"keyup,keydown,keypress,blur,click");
			window.WebAtoms.dispatcher.callLater(
							function() {
								e.focus();
							});
				};
		this.TaskEditor_t3 = function(e) {
					this.bind(e,'text', [["viewModel","errors","label"]], 0, function(v1) { return (v1); });
			this.bind(e,'styleDisplay', [["viewModel","errors","label"]], 0, function(v1) { return (v1) ? '' : 'none'; });
				};
		this.TaskEditor_t4 = function(e) {
					this.setLocalValue('text',"Status:", e)
				};
		this.TaskEditor_t5 = function(e) {
					this.bind(e,'value', ["viewModel","task","status"], 1 );
				};
		this.TaskEditor_t6 = function(e) {
					this.bind(e,'text', [["viewModel","errors","status"]], 0, function(v1) { return (v1); });
			this.bind(e,'styleDisplay', [["viewModel","errors","status"]], 0, function(v1) { return (v1) ? '' : 'none'; });
				};
		this.TaskEditor_t7 = function(e) {
					this.setLocalValue('text',"Description:", e)
				};
		this.TaskEditor_t8 = function(e) {
					this.bind(e,'value', ["viewModel","task","description"], 1 );
				};
		this.TaskEditor_t9 = function(e) {
					this.bind(e,'text', [["viewModel","user","label"]], 0, function(v1) { return (v1); });
				};
		this.TaskEditor_t10 = function(e) {
					this.setLocalValue('eventClick',function(){
				return  (Atom.get(this,"viewModel")).assign();
			},e);
				};
		this.TaskEditor_t11 = function(e) {
					this.setLocalValue('styleDisplay',!(Atom.get(this,"viewModel.windowName"))  ? '' : 'none',e);
				};
		this.TaskEditor_t12 = function(e) {
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

				(function(d){
					var css = ".task-list header {\n  height: 40px;\n}\n.task-list > div {\n  width: 500px;\n}\n.task-list > div .item {\n  width: 400px;\n  height: 35px;\n  margin: 5px;\n  padding: 5px;\n  position: relative;\n}\n.task-list > div .item button {\n  position: absolute;\n  right: 5px;\n  top: 5px;\n  margin: 5px;\n  padding: 2px;\n}\n";
					var head = d.head || d.getElementsByTagName('head')[0];
					var style = d.createElement('style');
					style.type = 'text/css';
					style.id = "component_style_Todo_TaskListView";
					if(style.styleSheet){
						style.styleSheet.cssText = css;
					}else{
						style.appendChild(d.createTextNode(css));
					}
					head.appendChild(style);
				})(document);
			
			window.Todo.TaskListView = (function(window,baseType){

			window.Templates.jsonML["Todo.TaskListView.template"] =
				[
  [
    "header",
    {},
    [
      "button",
      {
        "data-atom-init": "TaskListView_t1",
        "atom-text": "Add New Task"
      }
    ]
  ],
  [
    "div",
    {
      "atom-type": "AtomListBox",
      "data-atom-init": "TaskListView_t2"
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
          "data-atom-init": "TaskListView_t3"
        }
      ],
      [
        "button",
        {
          "atom-type": "AtomDeleteButton",
          "data-atom-init": "TaskListView_t4",
          "atom-text": "Delete"
        }
      ]
    ]
  ],
  [
    "section",
    {
      "atom-type": "Todo.TaskEditor",
      "data-atom-init": "TaskListView_t5"
    }
  ]
];

			(function(window,WebAtoms){
				this.TaskListView_t0 = function(e) {
					this.setLocalValue('viewModel',new Todo.TaskListViewModel(),e, true);
			var oldInit = AtomUI.attr(e,'base-data-atom-init');
					if(oldInit){
						(window.WebAtoms.PageSetup[oldInit]).call(this,e);
					}
				
				};
		this.TaskListView_t1 = function(e) {
					this.setLocalValue('eventClick',function(){
				return  (Atom.get(this,"viewModel")).addTask();
			},e);
				};
		this.TaskListView_t2 = function(e) {
					this.setLocalValue('dock',"Left", e)
			this.setLocalValue('items',(Atom.get(this,"viewModel.list")),e);
			this.bind(e,'selectedItem', ["viewModel","selectedTask"], 1 );
				};
		this.TaskListView_t3 = function(e) {
					this.setLocalValue('text',(Atom.get(this,"data.label")),e);
				};
		this.TaskListView_t4 = function(e) {
					this.setLocalValue('next',function(){
				return  (Atom.get(this,"viewModel")).deleteTask((Atom.get(this,"data")));
			},e);
				};
		this.TaskListView_t5 = function(e) {
					this.setLocalValue('viewModel',new Todo.TaskEditorViewModel(),e, true);
			this.bind(e,'styleDisplay', [["viewModel","task"]], 0, function(v1) { return (v1) ? '' : 'none'; });
				};
			}).call(WebAtoms.PageSetup,window,WebAtoms);

			return classCreatorEx({
				name: "Todo.TaskListView",
				base: baseType,
				start: function(e){
					 if(!AtomUI.attr(e,'atom-class')) AtomUI.attr(e, 'atom-class', 'task-list' );
		
					var oldInit = AtomUI.attr(e,'data-atom-init');
					if(oldInit){
						AtomUI.attr(e, 'base-data-atom-init',oldInit);
					};
					AtomUI.attr(e, 'data-atom-init','TaskListView_t0');
				
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
if(!window['Todo']){
						window['Todo'] = {};
					}

			window.Todo.UserSelector = (function(window,baseType){

			window.Templates.jsonML["Todo.UserSelector.template"] =
				[
  [
    "div",
    {
      "style": "background: white; padding:5px; border: solid lightgray 1px;"
    },
    [
      "input",
      {
        "data-atom-init": "UserSelector_t1"
      }
    ],
    [
      "div",
      {
        "style": "padding:5px",
        "atom-type": "AtomItemsControl",
        "data-atom-init": "UserSelector_t2"
      },
      [
        "div",
        {
          "atom-template": "itemTemplate",
          "data-atom-init": "UserSelector_t3"
        },
        [
          "span",
          {
            "data-atom-init": "UserSelector_t4"
          }
        ]
      ]
    ]
  ]
];

			(function(window,WebAtoms){
				this.UserSelector_t0 = function(e) {
					var oldInit = AtomUI.attr(e,'base-data-atom-init');
					if(oldInit){
						(window.WebAtoms.PageSetup[oldInit]).call(this,e);
					}
				
				};
		this.UserSelector_t1 = function(e) {
					window.WebAtoms.dispatcher.callLater(
							function() {
								e.focus();
							});
			this.bind(e,'value', ["viewModel","searchText"], 1 ,null,"keyup,keydown,keypress,blur,click");
				};
		this.UserSelector_t2 = function(e) {
					this.bind(e,'items', [["viewModel","items"]], 0, function(v1) { return (v1); });
				};
		this.UserSelector_t3 = function(e) {
					this.setLocalValue('eventClick',function(){
				return  (Atom.get(this,"viewModel")).select((Atom.get(this,"data")));
			},e);
				};
		this.UserSelector_t4 = function(e) {
					this.setLocalValue('text',(Atom.get(this,"data.label")),e);
				};
			}).call(WebAtoms.PageSetup,window,WebAtoms);

			return classCreatorEx({
				name: "Todo.UserSelector",
				base: baseType,
				start: function(e){
					
					var oldInit = AtomUI.attr(e,'data-atom-init');
					if(oldInit){
						AtomUI.attr(e, 'base-data-atom-init',oldInit);
					};
					AtomUI.attr(e, 'data-atom-init','UserSelector_t0');
				
				},
				methods:{
					setLocalValue: window.__atomSetLocalValue(baseType)
				},
				properties:{
					
				}
			})
		})(window, WebAtoms.AtomControl.prototype);
