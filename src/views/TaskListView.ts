// tslint:disable
import {AtomListBox} from "web-atoms-core/bin/controls/AtomListBox";
import {AtomDockPanel} from "web-atoms-core/bin/controls/AtomDockPanel";
import {AtomControl} from "web-atoms-core/bin/controls/AtomControl";

    import { TaskListViewModel } from "../view-models/TaskListViewModel";
    import { TaskEditorViewModel } from "../view-models/TaskEditorViewModel";
    import { TaskEditor } from "./TaskEditor";


    export class TaskListView extends AtomDockPanel {

        public create(): void {
            super.create();

            this.element = document.createElement("div");
            
            
        const e1 = document.createTextNode("\r\n\r\n    ");
        
        this.element.appendChild(e1);

        const e2 = document.createElement("header");
        
        this.append(e2);
        
        
        const e3 = document.createTextNode("\r\n        ");
        
        e2.appendChild(e3);

        const e4 = document.createElement("button");
        
        this.append(e4);
        
            this.runAfterInit( () =>
            this.setLocalValue(e4, "eventClick", ()=> (this.viewModel).addTask()) );
        
        const e5 = document.createTextNode("Add New Task");
        
        e4.appendChild(e5);

        const e6 = document.createTextNode("\r\n    ");
        
        e2.appendChild(e6);

        const e7 = document.createTextNode("\r\n\r\n    ");
        
        this.element.appendChild(e7);

            const e8 = new AtomListBox(document.createElement("div"));
            
            
        const e9 = document.createTextNode("\r\n        ");
        
        e8.element.appendChild(e9);

        const e10 = document.createTextNode("\r\n    ");
        
        e8.element.appendChild(e10);
            
        e8.runAfterInit( () =>
        e8.setLocalValue(e8.element, "dock", "Left" ));
        

            e8.runAfterInit( () =>
            e8.setLocalValue(e8.element, "items", (this.viewModel.list)) );

            e8.bind(e8.element, "selectedItem",  [["viewModel","selectedTask"]], true );

        e8.itemTemplate = TaskListView_itemTemplate_1;
            
            this.append(e8);


        const e11 = document.createTextNode("\r\n\r\n    ");
        
        this.element.appendChild(e11);

            const e12 = new TaskEditor(document.createElement("section"));
            
            
        const e13 = document.createTextNode("\r\n \r\n    ");
        
        e12.element.appendChild(e13);
            
                e12.viewModel = this.resolve(TaskEditorViewModel);

            e12.bind(e12.element, "styleDisplay",  [["viewModel","task"]], false , (v1) => (v1) ? '' : 'none');
            this.append(e12);


        const e14 = document.createTextNode("\r\n\r\n");
        
        this.element.appendChild(e14);
            
        this.runAfterInit( () =>
        this.setLocalValue(this.element, "class", "task-list" ));
        

                this.viewModel = this.resolve(TaskListViewModel);
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
            
        this.runAfterInit( () =>
        this.setLocalValue(this.element, "class", "item" ));
        
        }
    }

    

            

            