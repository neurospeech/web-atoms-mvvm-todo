// tslint:disable
import {BindableProperty} from "web-atoms-core/bin/core/BindableProperty";
import {AtomWindow} from "web-atoms-core/bin/web/controls/AtomWindow";

    import {TaskEditorViewModel} from "../../view-models/TaskEditorViewModel";
    import TaskEditor from "./TaskEditor";

export default  class NewTaskWindow extends AtomWindow {

                

                public create(): void {
                    super.create();

                    const __creator = this;

                    

                    
                    
                    
        const e1 = document.createTextNode("\r\n    ");
        
        this.element.appendChild(e1);

        const e2 = document.createElement("div");
        
        this.append(e2);
        
        
        const e3 = document.createTextNode("\r\n        \r\n        ");
        
        e2.appendChild(e3);

            const e4 = new TaskEditor(this.app);
            
            
        const e5 = document.createTextNode("\r\n\r\n    ");
        
        e4.element.appendChild(e5);
            
            this.append(e4);


        const e6 = document.createTextNode("\r\n    ");
        
        this.element.appendChild(e6);

        const e7 = document.createElement("div");
        
        this.append(e7);
        
        
        const e8 = document.createTextNode("\r\n        ");
        
        e7.appendChild(e8);

        const e9 = document.createElement("button");
        
        e7.appendChild(e9);
        
            this.runAfterInit( () =>
            this.setLocalValue(e9, "eventClick", () => (this.viewModel).save()) );
        
        const e10 = document.createTextNode("Save");
        
        e9.appendChild(e10);

        const e11 = document.createTextNode("\r\n        ");
        
        e7.appendChild(e11);

        const e12 = document.createElement("button");
        
        e7.appendChild(e12);
        
            this.runAfterInit( () =>
            this.setLocalValue(e12, "eventClick", () => (this.viewModel).cancel()) );
        
        const e13 = document.createTextNode("Cancel");
        
        e12.appendChild(e13);

        const e14 = document.createTextNode("\r\n    ");
        
        e7.appendChild(e14);

        const e15 = document.createTextNode("\r\n");
        
        this.element.appendChild(e15);
                    
                this.setPrimitiveValue(this.element, "viewModel",  this.resolve(TaskEditorViewModel) );

            this.bind(this.element, "title",  [["viewModel","task","label"],["viewModel","task","label"]], false , (v1,v2) => (v1) ? ('Task ' + (v2)) : 'Add New Task' );

        this.setPrimitiveValue(this.element, "width", "400px" );
        

        this.setPrimitiveValue(this.element, "height", "400px" );
        
                }
            }

            

            