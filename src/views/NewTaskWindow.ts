// tslint:disable
import {AtomWindow} from "web-atoms-core/bin/controls/AtomWindow";
import {AtomControl} from "web-atoms-core/bin/controls/AtomControl";

    import {TaskEditor} from "./TaskEditor";


    export class NewTaskWindow extends AtomWindow {

        public create(): void {
            super.create();

            this.element = document.createElement("div");
            
            
        const e1 = document.createTextNode("\r\n    ");
        
        this.append(e1);

        const e2 = document.createTextNode("\r\n    ");
        
        this.append(e2);

        const e3 = document.createTextNode("\r\n");
        
        this.append(e3);
            
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
        
        this.append(e1);

            const e2 = new TaskEditor(document.createElement("div"));
            
            
            
            this.append(e2);


        const e3 = document.createTextNode("\r\n\r\n    ");
        
        this.append(e3);
            
        }
    }

    

            

     class NewTaskWindow_commandTemplate_2 extends AtomControl {

        public create(): void {
            super.create();

            this.element = document.createElement("div");
            
            
        const e1 = document.createTextNode("\r\n        ");
        
        this.append(e1);

        const e2 = document.createElement("button");
        
        this.append(e2);
        
            this.setLocalValue(e2, "atom-event-click", () => (this.getValue("viewModel")).save());

        const e4 = document.createTextNode("\r\n        ");
        
        this.append(e4);

        const e5 = document.createElement("button");
        
        this.append(e5);
        
            this.setLocalValue(e5, "atom-event-click", () => (this.getValue("viewModel")).cancel());

        const e7 = document.createTextNode("\r\n    ");
        
        this.append(e7);
            
        }
    }

    

            

            