
import {AtomControl} from "web-atoms-core/bin/controls/AtomControl"


     class LoginView extends AtomControl {

        public create(): void {
            super.create();

            this.element = document.createElement("div");
            
            
        const e1 = document.createTextNode("\r\n\t");
        
        this.appendChild(e1);

        const e2 = document.createElement("form-layout");
        
        this.appendChild(e2);
        

        const e11 = document.createTextNode("\r\n");
        
        this.appendChild(e11);
            
            this.setLocalValue(this.element, "atom-view-model", Atom.get(new Todo.LoginViewModel()) );
        }
    }

    

            
import {AtomControl} from "web-atoms-core/bin/controls/AtomControl"


     class NewTaskWindow extends AtomControl {

        public create(): void {
            super.create();

            this.element = document.createElement("div");
            
            
        const e1 = document.createTextNode("\r\n    ");
        
        this.appendChild(e1);

        const e2 = document.createTextNode("\r\n    ");
        
        this.appendChild(e2);

        const e3 = document.createTextNode("\r\n");
        
        this.appendChild(e3);
            
        this.setLocalValue(this.element, "atom-component", "NewTaskWindow");
        

            this.bind(this.element, "atom-title",  [["viewModel","task","label"],["viewModel","task","label"]], false , (v1,v2) => (v1) ? ('Task ' + (v2)) : 'Add New Task');

        this.setLocalValue(this.element, "atom-window-width", "400");
        

        this.setLocalValue(this.element, "atom-window-height", "400");
        

        this.windowTemplate = NewTaskWindow_windowTemplate_1;
            

        this.commandTemplate = NewTaskWindow_commandTemplate_2;
            
        }
    }

    
     class NewTaskWindow_windowTemplate_1 extends AtomControl {

        public create(): void {
            super.create();

            this.element = document.createElement("div");
            
            
        const e1 = document.createTextNode("\r\n        \r\n        ");
        
        this.appendChild(e1);

            const e2 = new Todo.TaskEditor(document.createElement("div"));
            
            
            
            this.appendChild(e2);


        const e3 = document.createTextNode("\r\n\r\n    ");
        
        this.appendChild(e3);
            
        }
    }

    

            

     class NewTaskWindow_commandTemplate_2 extends AtomControl {

        public create(): void {
            super.create();

            this.element = document.createElement("div");
            
            
        const e1 = document.createTextNode("\r\n        ");
        
        this.appendChild(e1);

        const e2 = document.createElement("button");
        
        this.appendChild(e2);
        
            this.setLocalValue(e2, "atom-event-click", Atom.get(function(){
    return  (Atom.get(this,"viewModel")).save();
}) );

        const e4 = document.createTextNode("\r\n        ");
        
        this.appendChild(e4);

        const e5 = document.createElement("button");
        
        this.appendChild(e5);
        
            this.setLocalValue(e5, "atom-event-click", Atom.get(function(){
    return  (Atom.get(this,"viewModel")).cancel();
}) );

        const e7 = document.createTextNode("\r\n    ");
        
        this.appendChild(e7);
            
        }
    }

    

            

            
import {AtomControl} from "web-atoms-core/bin/controls/AtomControl"

import {AtomControl} from "web-atoms-core/bin/controls/AtomControl"

import {AtomControl} from "web-atoms-core/bin/controls/AtomControl"


     class TaskListView extends AtomControl {

        public create(): void {
            super.create();

            this.element = document.createElement("div");
            
            
        const e1 = document.createTextNode("\r\n\r\n    ");
        
        this.appendChild(e1);

        const e2 = document.createElement("header");
        
        this.appendChild(e2);
        

        const e7 = document.createTextNode("\r\n\r\n    ");
        
        this.appendChild(e7);

            const e8 = new AtomListBox(document.createElement("div"));
            
            
        const e9 = document.createTextNode("\r\n        ");
        
        e8.appendChild(e9);

        const e10 = document.createTextNode("\r\n    ");
        
        e8.appendChild(e10);
            
        e8.setLocalValue(e8.element, "atom-dock", "Left");
        

            e8.setLocalValue(e8.element, "atom-items", Atom.get((Atom.get(this,"viewModel.list"))) );

            e8.bind(e8.element, "atom-selected-item",  ["viewModel","selectedTask"], 1 );

        e8.itemTemplate = TaskListView_itemTemplate_1;
            
            this.appendChild(e8);


        const e11 = document.createTextNode("\r\n\r\n    ");
        
        this.appendChild(e11);

            const e12 = new Todo.TaskEditor(document.createElement("section"));
            
            
        const e13 = document.createTextNode("\r\n \r\n    ");
        
        e12.appendChild(e13);
            
            e12.setLocalValue(e12.element, "atom-view-model", Atom.get(new Todo.TaskEditorViewModel()) );

            e12.bind(e12.element, "style-display",  [["viewModel","task"]], false , (v1) => (v1) ? '' : 'none');
            this.appendChild(e12);


        const e14 = document.createTextNode("\r\n\r\n");
        
        this.appendChild(e14);
            
        this.setLocalValue(this.element, "class", "task-list");
        

            this.setLocalValue(this.element, "atom-view-model", Atom.get(new Todo.TaskListViewModel()) );
        }
    }

    
     class TaskListView_itemTemplate_1 extends AtomControl {

        public create(): void {
            super.create();

            this.element = document.createElement("div");
            
            
        const e1 = document.createTextNode("\r\n\r\n            ");
        
        this.appendChild(e1);

        const e2 = document.createElement("span");
        
        this.appendChild(e2);
        
            this.setLocalValue(e2, "atom-text", Atom.get((Atom.get(this,"data.label"))) );

        const e3 = document.createTextNode("\r\n\r\n            ");
        
        this.appendChild(e3);

            const e4 = new AtomDeleteButton(document.createElement("button"));
            
            
        const e5 = document.createTextNode("Delete");
        
        e4.appendChild(e5);
            
            e4.setLocalValue(e4.element, "atom-next", Atom.get(function(){
    return  (Atom.get(this,"viewModel")).deleteTask((Atom.get(this,"data")));
}) );
            this.appendChild(e4);


        const e6 = document.createTextNode("\r\n        ");
        
        this.appendChild(e6);
            
        this.setLocalValue(this.element, "class", "item");
        
        }
    }

    

            

            
import {AtomControl} from "web-atoms-core/bin/controls/AtomControl"


     class TaskStatusCombo extends AtomControl {

        public create(): void {
            super.create();

            this.element = document.createElement("select");
            
            
        const e1 = document.createTextNode("\r\n");
        
        this.appendChild(e1);
            
        this.setLocalValue(this.element, "atom-component", "TaskStatusCombo");
        

            this.setLocalValue(this.element, "atom-items", Atom.get(Todo.ConfigService.instance.getStatusList()) );
        }
    }

    

            
import {AtomControl} from "web-atoms-core/bin/controls/AtomControl"


     class AppFrame extends AtomControl {

        public create(): void {
            super.create();

            this.element = document.createElement("section");
            
            
        const e1 = document.createTextNode("\r\n\r\n    ");
        
        this.appendChild(e1);

            const e2 = new AtomPageView(document.createElement("section"));
            
            
        const e3 = document.createTextNode("\r\n    ");
        
        e2.appendChild(e3);
            
            e2.bind(e2.element, "atom-url",  [["localViewModel","url"]], false , (v1) => (v1));
            this.appendChild(e2);


        const e4 = document.createTextNode("\r\n\r\n");
        
        this.appendChild(e4);
            
            this.setLocalValue(this.element, "atom-local-view-model", Atom.get(new Todo.AppFrameViewModel()) );
        }
    }

    

            

     class UserSelector extends AtomControl {

        public create(): void {
            super.create();

            this.element = document.createElement("div");
            
            
        const e1 = document.createTextNode("\r\n\t");
        
        this.appendChild(e1);

        const e2 = document.createElement("div");
        
        this.appendChild(e2);
        
        this.setLocalValue(e2, "style", "background: white; padding:5px; border: solid lightgray 1px;");
        

        const e10 = document.createTextNode("\r\n");
        
        this.appendChild(e10);
            
        }
    }

    
     class UserSelector_itemTemplate_1 extends AtomControl {

        public create(): void {
            super.create();

            this.element = document.createElement("div");
            
            
        const e1 = document.createTextNode("\r\n\t\t\t\t");
        
        this.appendChild(e1);

        const e2 = document.createElement("span");
        
        this.appendChild(e2);
        
            this.setLocalValue(e2, "atom-text", Atom.get((Atom.get(this,"data.label"))) );

        const e3 = document.createTextNode("\r\n\t\t\t");
        
        this.appendChild(e3);
            
            this.setLocalValue(this.element, "atom-event-click", Atom.get(function(){
    return  (Atom.get(this,"viewModel")).select((Atom.get(this,"data")));
}) );
        }
    }

    

            

            

     class TaskEditor extends AtomControl {

        public create(): void {
            super.create();

            this.element = document.createElement("div");
            
            
        const e1 = document.createTextNode("\r\n\r\n\t");
        
        this.appendChild(e1);

        const e2 = document.createElement("undefined");
        
        this.appendChild(e2);
        

        const e3 = document.createTextNode("\r\n\r\n\t");
        
        this.appendChild(e3);

        const e4 = document.createElement("undefined");
        
        this.appendChild(e4);
        

        const e5 = document.createTextNode("\r\n\r\n\t");
        
        this.appendChild(e5);

        const e6 = document.createElement("undefined");
        
        this.appendChild(e6);
        

        const e7 = document.createTextNode("\r\n\t");
        
        this.appendChild(e7);

        const e8 = document.createElement("form-layout");
        
        this.appendChild(e8);
        

        const e32 = document.createTextNode("\r\n\r\n");
        
        this.appendChild(e32);
            
        this.setLocalValue(this.element, "atom-component", "TaskEditor");
        
        }
    }

    

            