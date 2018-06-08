// tslint:disable
import {AtomControl} from "web-atoms-core/bin/controls/AtomControl";

<<<<<<< HEAD
    import {LoginViewModel} from "../view-models/LoginViewModel";


    export class LoginView extends AtomControl {

        public create(): void {
            super.create();

            this.element = document.createElement("div");
            
            
        const e1 = document.createTextNode("\r\n=======\r\n\timport { LoginViewModel }  from \"./../view-models/LoginViewModel\";\r\n\r\n");
        
        this.append(e1);

        const e2 = document.createElement("div");
        
        this.append(e2);
        
            this.setLocalValue(e2, "atom-view-model", new LoginViewModel());
            
            this.setLocalValue(this.element, "atom-view-model", this.resolve(LoginViewModel));
        }
    }

    

            