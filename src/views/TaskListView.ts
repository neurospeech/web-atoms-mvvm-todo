// tslint:disable
import {AtomControl} from "web-atoms-core/bin/controls/AtomControl";

    export class TaskListView extends AtomControl {

        public create(): void {
            super.create();

            this.element = document.createElement("div");
            
            
        const e1 = document.createTextNode("\r\n\r\n    ");
        
        this.append(e1);

        const e2 = document.createElement("header");
        
        this.append(e2);
        

        const e7 = document.createTextNode("\r\n\r\n    ");
        
        this.append(e7);

            const e8 = new AtomListBox(document.createElement("div"));
            
            
        const e9 = document.createTextNode("\r\n        ");
        
        e8.append(e9);

        const e10 = document.createTextNode("\r\n    ");
        
        e8.append(e10);
            
        e8.setLocalValue(e8.element, "atom-dock", "Left");
        

            e8.setLocalValue(e8.element, "atom-items", Atom.get((Atom.get(this,"viewModel.list"))) );

            e8.bind(e8.element, "atom-selected-item",  ["viewModel","selectedTask"], 1 );

        e8.itemTemplate = TaskListView_itemTemplate_1;
            
            this.append(e8);


        const e11 = document.createTextNode("\r\n\r\n    ");
        
        this.append(e11);

            const e12 = new Todo.TaskEditor(document.createElement("section"));
            
            
        const e13 = document.createTextNode("\r\n \r\n    ");
        
        e12.append(e13);
            
            e12.setLocalValue(e12.element, "atom-view-model", Atom.get(new Todo.TaskEditorViewModel()) );

            e12.bind(e12.element, "style-display",  [["viewModel","task"]], false , (v1) => (v1) ? '' : 'none');
            this.append(e12);


        const e14 = document.createTextNode("\r\n\r\n");
        
        this.append(e14);
            
        this.setLocalValue(this.element, "class", "task-list");
        

            this.setLocalValue(this.element, "atom-view-model", Atom.get(new Todo.TaskListViewModel()) );
        }
    }

    
     class TaskListView_itemTemplate_1 extends AtomControl {

        public create(): void {
            super.create();

            this.element = document.createElement("div");
            
            
        const e1 = document.createTextNode("\r\n\r\n            ");
        
        this.append(e1);

        const e2 = document.createElement("span");
        
        this.append(e2);
        
            this.setLocalValue(e2, "atom-text", Atom.get((Atom.get(this,"data.label"))) );

        const e3 = document.createTextNode("\r\n\r\n            ");
        
        this.append(e3);

            const e4 = new AtomDeleteButton(document.createElement("button"));
            
            
        const e5 = document.createTextNode("Delete");
        
        e4.append(e5);
            
            e4.setLocalValue(e4.element, "atom-next", Atom.get(function(){
    return  (Atom.get(this,"viewModel")).deleteTask((Atom.get(this,"data")));
}) );
            this.append(e4);


        const e6 = document.createTextNode("\r\n        ");
        
        this.append(e6);
            
        this.setLocalValue(this.element, "class", "item");
        
        }
    }

    

            

            