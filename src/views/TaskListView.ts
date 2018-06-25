// tslint:disable
import {AtomGridSplitter} from "web-atoms-core/bin/controls/AtomGridSplitter";
import {AtomListBox} from "web-atoms-core/bin/controls/AtomListBox";
import {AtomGridView} from "web-atoms-core/bin/controls/AtomGridView";
import {AtomControl} from "web-atoms-core/bin/controls/AtomControl";

    import { TaskListViewModel } from "../view-models/TaskListViewModel";
    import { TaskEditorViewModel } from "../view-models/TaskEditorViewModel";
    import { TaskEditor } from "./TaskEditor";


    export class TaskListView extends AtomGridView {

        public create(): void {
            super.create();

            this.element = document.createElement("div");
            
            
        const e1 = document.createTextNode("\r\n\r\n    ");
        
        this.element.appendChild(e1);

        const e2 = document.createElement("header");
        
        this.append(e2);
        
        this.setPrimitiveValue(e2, "cell", "0:3,0" );
        
        
        const e3 = document.createTextNode("\r\n        ");
        
        e2.appendChild(e3);

        const e4 = document.createElement("button");
        
        e2.appendChild(e4);
        
            this.runAfterInit( () =>
            this.setLocalValue(e4, "eventClick", ()=> (this.viewModel).addTask()) );
        
        const e5 = document.createTextNode("Add New Task");
        
        e4.appendChild(e5);

        const e6 = document.createTextNode("\r\n    ");
        
        e2.appendChild(e6);

        const e7 = document.createTextNode("\r\n\r\n    ");
        
        this.element.appendChild(e7);

            const e8 = new AtomGridSplitter(document.createElement("div"));
            
            
            
        e8.setPrimitiveValue(e8.element, "cell", "1,1" );
        

        e8.setPrimitiveValue(e8.element, "direction", "vertical" );
        
            this.append(e8);


        const e9 = document.createTextNode("\r\n\r\n    ");
        
        this.element.appendChild(e9);

            const e10 = new AtomListBox(document.createElement("div"));
            
            
        const e11 = document.createTextNode("\r\n        ");
        
        e10.element.appendChild(e11);

        const e12 = document.createTextNode("\r\n    ");
        
        e10.element.appendChild(e12);
            
        e10.setPrimitiveValue(e10.element, "cell", "0,1" );
        

        e10.setPrimitiveValue(e10.element, "dock", "Left" );
        

            e10.runAfterInit( () =>
            e10.setLocalValue(e10.element, "items", (this.viewModel.list)) );

            e10.bind(e10.element, "selectedItem",  [["viewModel","selectedTask"]], true );

        e10.itemTemplate = TaskListView_itemTemplate_1;
            
            this.append(e10);


        const e13 = document.createTextNode("\r\n\r\n    ");
        
        this.element.appendChild(e13);

            const e14 = new TaskEditor(document.createElement("section"));
            
            
        const e15 = document.createTextNode("\r\n \r\n    ");
        
        e14.element.appendChild(e15);
            
        e14.setPrimitiveValue(e14.element, "cell", "2,1" );
        

                e14.setPrimitiveValue(e14.element, "viewModel",  this.resolve(TaskEditorViewModel) );

            e14.bind(e14.element, "styleDisplay",  [["viewModel","task"]], false , (v1) => (v1) ? '' : 'none');
            this.append(e14);


        const e16 = document.createTextNode("\r\n\r\n");
        
        this.element.appendChild(e16);
            
        this.setPrimitiveValue(this.element, "class", "task-list" );
        

        this.setPrimitiveValue(this.element, "columns", "30%, 5, *" );
        

        this.setPrimitiveValue(this.element, "rows", "50, *" );
        

                this.setPrimitiveValue(this.element, "viewModel",  this.resolve(TaskListViewModel) );
        }
    }

    
     class TaskListView_itemTemplate_1 extends AtomControl {

        public create(): void {
            super.create();

            this.element = document.createElement("div");
            
            
        const e1 = document.createTextNode("\r\n\r\n            ");
        
        this.element.appendChild(e1);

        const e2 = document.createElement("span");
        
        this.append(e2);
        
            this.runAfterInit( () =>
            this.setLocalValue(e2, "text", (this.data.label)) );
        

        const e3 = document.createTextNode("\r\n\r\n            ");
        
        this.element.appendChild(e3);

        const e4 = document.createElement("button");
        
        this.append(e4);
        
            this.runAfterInit( () =>
            this.setLocalValue(e4, "eventClick", ()=> (this.viewModel).deleteTask((this.data))) );
        
        const e5 = document.createTextNode("Delete");
        
        e4.appendChild(e5);

        const e6 = document.createTextNode("\r\n        ");
        
        this.element.appendChild(e6);
            
        this.setPrimitiveValue(this.element, "class", "item" );
        
        }
    }

    

            

            