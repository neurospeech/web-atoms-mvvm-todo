// tslint:disable
import {AtomControl} from "web-atoms-core/bin/controls/AtomControl";

    export class LoginView extends AtomControl {

        public create(): void {
            super.create();

            this.element = document.createElement("div");
            
            
        const e1 = document.createTextNode("\r\n\t");
        
        this.append(e1);

        const e2 = document.createElement("form-layout");
        
        this.append(e2);
        

        const e11 = document.createTextNode("\r\n");
        
        this.append(e11);
            
            this.setLocalValue(this.element, "atom-view-model", Atom.get(new Todo.LoginViewModel()) );
        }
    }

    

            