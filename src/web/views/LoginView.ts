// tslint:disable
import {BindableProperty} from "web-atoms-core/dist/core/BindableProperty";
import {AtomControl} from "web-atoms-core/dist/web/controls/AtomControl";

    import {LoginViewModel} from "../../view-models/LoginViewModel";

export default  class LoginView extends AtomControl {

                

                public create(): void {
                    super.create();

                    const __creator = this;

                    

                    this.element = document.createElement("div");
                    
                    
                this.viewModel =  this.resolve(LoginViewModel) ;
                    
        const e1 = document.createTextNode("\r\n\t");
        
        this.element.appendChild(e1);

        const e2 = document.createElement("label");
        
        this.append(e2);
        
        
        const e3 = document.createTextNode("Username:");
        
        e2.appendChild(e3);

        const e4 = document.createTextNode("\r\n\t");
        
        this.element.appendChild(e4);

        const e5 = document.createElement("input");
        
        this.append(e5);
        
            this.bind(e5, "value",  [["viewModel","username"]], true  );
        

        const e6 = document.createTextNode("\r\n\t");
        
        this.element.appendChild(e6);

        const e7 = document.createElement("label");
        
        this.append(e7);
        
        
        const e8 = document.createTextNode("Password:");
        
        e7.appendChild(e8);

        const e9 = document.createTextNode("\r\n\t");
        
        this.element.appendChild(e9);

        const e10 = document.createElement("input");
        
        this.append(e10);
        
            this.bind(e10, "value",  [["viewModel","password"]], true  );

        this.setPrimitiveValue(e10, "type", "password" );
        
        

        const e11 = document.createTextNode("\r\n\r\n\t");
        
        this.element.appendChild(e11);

        const e12 = document.createElement("button");
        
        this.append(e12);
        
            this.runAfterInit( () =>
            this.setLocalValue(e12, "eventClick", () => (this.viewModel).login()) );
        
        const e13 = document.createTextNode("Login");
        
        e12.appendChild(e13);

        const e14 = document.createTextNode("\r\n\r\n");
        
        this.element.appendChild(e14);
                }
            }

            

            