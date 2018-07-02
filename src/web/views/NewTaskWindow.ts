// tslint:disable
import {AtomWindow} from "web-atoms-core/bin/web/controls/AtomWindow";
import {AtomControl} from "web-atoms-core/bin/web/controls/AtomControl";

    import {TaskEditorViewModel} from "../../view-models/TaskEditorViewModel";
    import {TaskEditor} from "./TaskEditor";


    export class NewTaskWindow extends AtomWindow {

        public create(): void {
            super.create();

            this.element = document.createElement("div");
            
            
        const e1 = document.createTextNode("\r\n    ");
        
        this.element.appendChild(e1);

        const e2 = document.createTextNode("\r\n    ");
        
        this.element.appendChild(e2);

        const e3 = document.createTextNode("\r\n");
        
        this.element.appendChild(e3);
            
                this.setPrimitiveValue(this.element, "viewModel",  this.resolve(TaskEditorViewModel) );

            this.bind(this.element, "title",  [["viewModel","task","label"],["viewModel","task","label"]], false , (v1,v2) => (v1) ? ('Task ' + (v2)) : 'Add New Task');

        this.setPrimitiveValue(this.element, "width", "400px" );
        

        this.setPrimitiveValue(this.element, "height", "400px" );
        

        this.windowTemplate = NewTaskWindow_windowTemplate_1;
            

        this.commandTemplate = NewTaskWindow_commandTemplate_2;
            
        }
    }

    
     class NewTaskWindow_windowTemplate_1 extends AtomControl {

        public create(): void {
            super.create();

            this.element = document.createElement("div");
            
            
        const e1 = document.createTextNode("\r\n        \r\n        ");
        
        this.element.appendChild(e1);

            const e2 = new TaskEditor(this.app, document.createElement("div"));
            
            
            
            this.append(e2);


        const e3 = document.createTextNode("\r\n\r\n    ");
        
        this.element.appendChild(e3);
            
        }
    }

    

            

     class NewTaskWindow_commandTemplate_2 extends AtomControl {

        public create(): void {
            super.create();

            this.element = document.createElement("div");
            
            
        const e1 = document.createTextNode("\r\n        ");
        
        this.element.appendChild(e1);

        const e2 = document.createElement("button");
        
        this.append(e2);
        
            this.runAfterInit( () =>
            this.setLocalValue(e2, "eventClick", () => (this.viewModel).save()) );
        
        const e3 = document.createTextNode("Save");
        
        e2.appendChild(e3);

        const e4 = document.createTextNode("\r\n        ");
        
        this.element.appendChild(e4);

        const e5 = document.createElement("button");
        
        this.append(e5);
        
            this.runAfterInit( () =>
            this.setLocalValue(e5, "eventClick", () => (this.viewModel).cancel()) );
        
        const e6 = document.createTextNode("Cancel");
        
        e5.appendChild(e6);

        const e7 = document.createTextNode("\r\n    ");
        
        this.element.appendChild(e7);
            
        }
    }

    

            

            