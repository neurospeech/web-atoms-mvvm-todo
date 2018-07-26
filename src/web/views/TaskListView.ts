// tslint:disable
import {BindableProperty} from "web-atoms-core/dist/core/BindableProperty";
import {AtomGridSplitter} from "web-atoms-core/dist/web/controls/AtomGridSplitter";
import {AtomListBox} from "web-atoms-core/dist/web/controls/AtomListBox";
import {AtomGridView} from "web-atoms-core/dist/web/controls/AtomGridView";
import {AtomControl} from "web-atoms-core/dist/web/controls/AtomControl";

    import { TaskListViewModel } from "../../view-models/TaskListViewModel";
    import { TaskEditorViewModel } from "../../view-models/TaskEditorViewModel";
    import TaskEditor from "./TaskEditor";
    import { TaskListStyle } from "../styles/TaskListStyle";
    import RedListStyle from "../styles/RedListStyle";

export default  class TaskListView extends AtomGridView {

                

                public create(): void {
                    super.create();

                    const __creator = this;

                    

                    
                    
                    
            this.defaultControlStyle =  TaskListStyle ;
            

        this.setPrimitiveValue(this.element, "columns", "30%, 5, *" );
        

        this.setPrimitiveValue(this.element, "rows", "50, *" );
        

                this.viewModel =  this.resolve(TaskListViewModel) ;
                    
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
            
            
            
        e8.setPrimitiveValue(e8.element, "row", "1" );
        

        e8.setPrimitiveValue(e8.element, "column", "1" );
        

        e8.setPrimitiveValue(e8.element, "direction", "vertical" );
        
            this.append(e8);


        const e9 = document.createTextNode("\r\n\r\n    ");
        
        this.element.appendChild(e9);

            const e10 = new AtomListBox(this.app, document.createElement("div"));
            
            
        const e11 = document.createTextNode("\r\n        ");
        
        e10.element.appendChild(e11);

        const e12 = document.createTextNode("\r\n    ");
        
        e10.element.appendChild(e12);
            
                e10.controlStyle =  RedListStyle ;

        e10.setPrimitiveValue(e10.element, "row", "1" );
        

        e10.setPrimitiveValue(e10.element, "column", "0" );
        

            e10.runAfterInit( () =>
            e10.setLocalValue(e10.element, "items", (this.viewModel.list)) );

            e10.bind(e10.element, "selectedItem",  [["viewModel","selectedTask"]], true  );

        e10.itemTemplate = TaskListView_itemTemplate_1Creator(this);
            
            this.append(e10);


        const e13 = document.createTextNode("\r\n\r\n    ");
        
        this.element.appendChild(e13);

            const e14 = new TaskEditor(this.app);
            
            
            
        e14.setPrimitiveValue(e14.element, "column", "2" );
        

        e14.setPrimitiveValue(e14.element, "row", "1" );
        

                e14.viewModel =  this.resolve(TaskEditorViewModel) ;

            e14.bind(e14.element, "styleDisplay",  [["viewModel","task"]], false , (v1) => (v1) ? '' : 'none' );
            this.append(e14);


        const e15 = document.createTextNode("\r\n\r\n");
        
        this.element.appendChild(e15);
                }
            }

            function TaskListView_itemTemplate_1Creator(__creator){
                return  class TaskListView_itemTemplate_1 extends AtomControl {

                

                public create(): void {
                    super.create();

                     ;

                    

                    this.element = document.createElement("div");
                    
                    
        this.setPrimitiveValue(this.element, "class", "item" );
        
                    
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
        
            this.bind(e4, "styleClass",  [["this","controlStyle","saveButton"]], false , (v1) => (v1) , __creator);

            this.runAfterInit( () =>
            this.setLocalValue(e4, "eventClick", ()=> (this.viewModel).deleteTask((this.data))) );
        
        const e5 = document.createTextNode("Delete");
        
        e4.appendChild(e5);

        const e6 = document.createTextNode("\r\n        ");
        
        this.element.appendChild(e6);
                }
            }

            

            
            }

            