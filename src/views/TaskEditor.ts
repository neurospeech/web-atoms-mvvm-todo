// tslint:disable
import {AtomControl} from "web-atoms-core/bin/controls/AtomControl";

    export class TaskEditor extends AtomControl {

        public create(): void {
            super.create();

            this.element = document.createElement("div");
            
            
        const e1 = document.createTextNode("\r\n\r\n\t");
        
        this.append(e1);

        const e2 = document.createElement("undefined");
        
        this.append(e2);
        

        const e3 = document.createTextNode("\r\n\r\n\t");
        
        this.append(e3);

        const e4 = document.createElement("undefined");
        
        this.append(e4);
        

        const e5 = document.createTextNode("\r\n\r\n\t");
        
        this.append(e5);

        const e6 = document.createElement("undefined");
        
        this.append(e6);
        

        const e7 = document.createTextNode("\r\n\t");
        
        this.append(e7);

        const e8 = document.createElement("form-layout");
        
        this.append(e8);
        

        const e32 = document.createTextNode("\r\n\r\n");
        
        this.append(e32);
            
        this.setLocalValue(this.element, "atom-component", "TaskEditor");
        
        }
    }

    

            