// tslint:disable
import {AtomItemsControl} from "web-atoms-core/bin/controls/AtomItemsControl";
import {AtomControl} from "web-atoms-core/bin/controls/AtomControl";

    export class UserSelector extends AtomControl {

        public create(): void {
            super.create();

            this.element = document.createElement("div");
            
            
        const e1 = document.createTextNode("\r\n\t");
        
        this.append(e1);

        const e2 = document.createElement("div");
        
        this.append(e2);
        
        this.setLocalValue(e2, "style", "background: white; padding:5px; border: solid lightgray 1px;");
        

        const e10 = document.createTextNode("\r\n");
        
        this.append(e10);
            
        }
    }

    
     class UserSelector_itemTemplate_1 extends AtomControl {

        public create(): void {
            super.create();

            this.element = document.createElement("div");
            
            
        const e1 = document.createTextNode("\r\n\t\t\t\t");
        
        this.append(e1);

        const e2 = document.createElement("span");
        
        this.append(e2);
        
            this.setLocalValue(e2, "atom-text", (this.getValue("data.label")));

        const e3 = document.createTextNode("\r\n\t\t\t");
        
        this.append(e3);
            
            this.setLocalValue(this.element, "atom-event-click", () => (this.getValue("viewModel")).select((this.getValue("data"))));
        }
    }

    

            

            