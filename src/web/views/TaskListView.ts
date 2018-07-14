// tslint:disable
import {BindableProperty} from "web-atoms-core/bin/core/BindableProperty";
import {AtomListBox} from "web-atoms-core/bin/web/controls/AtomListBox";
import {AtomGridSplitter} from "web-atoms-core/bin/web/controls/AtomGridSplitter";
import {AtomGridView} from "web-atoms-core/bin/web/controls/AtomGridView";

    import { TaskListViewModel } from "../../view-models/TaskListViewModel";
    import { TaskEditorViewModel } from "../../view-models/TaskEditorViewModel";
    import TaskEditor from "./TaskEditor";

export default  class TaskListView extends AtomGridView {

                

                public create(): void {
                    super.create();

                    const __creator = this;

                    

                    
                    
                    
        const e1 = document.createTextNode("\r\n\r\n    ");
        
        this.element.appendChild(e1);

        const e2 = document.createElement("header");
        
        this.append(e2);
        
        this.setPrimitiveValue(e2, "row", "0" );
        

        this.setPrimitiveValue(e2, "column", "0:3" );
        
        
        const e3 = document.createTextNode("\r\n        ");
        
        e2.appendChild(e3);

        const e4 = document.createElement("button");
        
        e2.appendChild(e4);
        
            this.bind(e4, "styleClass",  [["this","controlStyle","addButton"]], false , (v1) => (v1) , __creator);

            this.runAfterInit( () =>
            this.setLocalValue(e4, "eventClick", ()=> (this.viewModel).addTask()) );
        
        const e5 = document.createTextNode("Add New Task");
        
        e4.appendChild(e5);

        const e6 = document.createTextNode("\r\n    ");
        
        e2.appendChild(e6);

        const e7 = document.createTextNode("\r\n\r\n    ");
        
        this.element.appendChild(e7);

            const e8 = new AtomGridSplitter(this.app);
            
            
        const e9 = document.createTextNode("\r\n\r\n    ");
        
        e8.element.appendChild(e9);

            const e10 = new AtomListBox(this.app, document.createElement("div"));
            
            
        const e11 = document.createTextNode("\r\n        ");
        
        e10.element.appendChild(e11);

        const e12 = document.createElement("div");
        
        e10.append(e12);
        
        e10.setPrimitiveValue(e12, "class", "item" );
        
        
        const e13 = document.createTextNode("\r\n\r\n            ");
        
        e12.appendChild(e13);

        const e14 = document.createElement("span");
        
        e12.appendChild(e14);
        
            e10.runAfterInit( () =>
            e10.setLocalValue(e14, "text", (this.data.label)) );
        

        const e15 = document.createTextNode("\r\n\r\n            ");
        
        e12.appendChild(e15);

        const e16 = document.createElement("button");
        
        e12.appendChild(e16);
        
            e10.bind(e16, "styleClass",  [["this","controlStyle","saveButton"]], false , (v1) => (v1) , __creator);

            e10.runAfterInit( () =>
            e10.setLocalValue(e16, "eventClick", ()=> (this.viewModel).deleteTask((this.data))) );
        
        const e17 = document.createTextNode("Delete");
        
        e16.appendChild(e17);

        const e18 = document.createTextNode("\r\n        ");
        
        e12.appendChild(e18);

        const e19 = document.createTextNode("\r\n    ");
        
        e10.element.appendChild(e19);
            
        e10.setPrimitiveValue(e10.element, "row", "1" );
        

        e10.setPrimitiveValue(e10.element, "column", "0" );
        

            e10.runAfterInit( () =>
            e10.setLocalValue(e10.element, "items", (this.viewModel.list)) );

            e10.bind(e10.element, "selectedItem",  [["viewModel","selectedTask"]], true  );
            e8.append(e10);


        const e20 = document.createTextNode("\r\n\r\n    ");
        
        e8.element.appendChild(e20);

            const e21 = new TaskEditor(this.app);
            
            
        const e22 = document.createTextNode("\r\n\r\n");
        
        e21.element.appendChild(e22);
            
        e21.setPrimitiveValue(e21.element, "column", "2" );
        

        e21.setPrimitiveValue(e21.element, "row", "1" );
        

                e21.setPrimitiveValue(e21.element, "viewModel",  this.resolve(TaskEditorViewModel) );

            e21.bind(e21.element, "styleDisplay",  [["viewModel","task"]], false , (v1) => (v1) ? '' : 'none' );
            e8.append(e21);

            
        e8.setPrimitiveValue(e8.element, "row", "1" );
        

        e8.setPrimitiveValue(e8.element, "column", "1" );
        

        e8.setPrimitiveValue(e8.element, "direction", "vertical" );
        
            this.append(e8);

                    
        this.setPrimitiveValue(this.element, "class", "task-list" );
        

        this.setPrimitiveValue(this.element, "columns", "30%, 5, *" );
        

        this.setPrimitiveValue(this.element, "rows", "50, *" );
        

                this.setPrimitiveValue(this.element, "viewModel",  this.resolve(TaskListViewModel) );
                }
            }

            

            