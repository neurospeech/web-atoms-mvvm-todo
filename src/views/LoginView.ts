// tslint:disable
import {AtomControl} from "web-atoms-core/bin/controls/AtomControl";

    import {LoginViewModel} from "../view-models/LoginViewModel";


    export class LoginView extends AtomControl {

        public create(): void {
            super.create();

            this.element = document.createElement("div");
            
            
        const e1 = document.createTextNode("\r\n\t");
        
        this.element.appendChild(e1);

        const e2 = document.createElement("form-layout");
        
        this.append(e2);
        
        
        const e3 = document.createTextNode("\r\n\t\t");
        
        e2.appendChild(e3);

        const e4 = document.createElement("input");
        
        this.append(e4);
        
        this.runAfterInit( () =>
        this.setLocalValue(e4, "label", "Username:" ));
        

            this.bind(e4, "value",  [["viewModel","username"]], true );
        

        const e5 = document.createTextNode("\r\n\t\t");
        
        e2.appendChild(e5);

        const e6 = document.createElement("input");
        
        this.append(e6);
        
        this.runAfterInit( () =>
        this.setLocalValue(e6, "label", "Password:" ));
        

            this.bind(e6, "value",  [["viewModel","password"]], true );

        this.runAfterInit( () =>
        this.setLocalValue(e6, "type", "password" ));
        
        

        const e7 = document.createTextNode("\r\n\r\n\t\t");
        
        e2.appendChild(e7);

        const e8 = document.createElement("button");
        
        this.append(e8);
        
            this.runAfterInit( () =>
            this.setLocalValue(e8, "eventClick", () => (this.viewModel).login()) );
        
        const e9 = document.createTextNode("Login");
        
        e8.appendChild(e9);

        const e10 = document.createTextNode("\r\n\r\n\t");
        
        e2.appendChild(e10);

        const e11 = document.createTextNode("\r\n");
        
        this.element.appendChild(e11);
            
                this.viewModel = this.resolve(LoginViewModel);
        }
    }

    

            