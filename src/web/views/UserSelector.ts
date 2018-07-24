// tslint:disable
import {BindableProperty} from "web-atoms-core/dist/core/BindableProperty";
import {AtomItemsControl} from "web-atoms-core/dist/web/controls/AtomItemsControl";
import {AtomControl} from "web-atoms-core/dist/web/controls/AtomControl";

	import {UserSelectorViewModel} from "../../view-models/UserSelectorViewModel";

export default  class UserSelector extends AtomControl {

                

                public create(): void {
                    super.create();

                    const __creator = this;

                    

                    this.element = document.createElement("div");
                    
                    
                this.setPrimitiveValue(this.element, "viewModel",  this.resolve(UserSelectorViewModel) );
                    
        const e1 = document.createTextNode("\r\n\t");
        
        this.element.appendChild(e1);

        const e2 = document.createElement("div");
        
        this.append(e2);
        
        this.setPrimitiveValue(e2, "style", "background: white; padding:5px; border: solid lightgray 1px;" );
        
        
        const e3 = document.createTextNode("\r\n\r\n\t\t");
        
        e2.appendChild(e3);

        const e4 = document.createElement("input");
        
        e2.appendChild(e4);
        
        this.setPrimitiveValue(e4, "autofocus", "autofocus" );
        

            this.bind(e4, "value",  [["viewModel","searchText"]], ["change", "keyup", "keydown", "blur"]  );
        

        const e5 = document.createTextNode("\r\n\r\n\t\t");
        
        e2.appendChild(e5);

            const e6 = new AtomItemsControl(this.app);
            
            
        const e7 = document.createTextNode("\r\n\t\t\t");
        
        e6.element.appendChild(e7);

        const e8 = document.createTextNode("\r\n\t\t");
        
        e6.element.appendChild(e8);
            
        e6.setPrimitiveValue(e6.element, "style", "padding:5px" );
        

            e6.bind(e6.element, "items",  [["viewModel","items"]], false , (v1) => (v1) );

        e6.itemTemplate = UserSelector_itemTemplate_1Creator(this);
            
            this.append(e6);


        const e9 = document.createTextNode("\r\n\t");
        
        e2.appendChild(e9);

        const e10 = document.createTextNode("\r\n");
        
        this.element.appendChild(e10);
                }
            }

            function UserSelector_itemTemplate_1Creator(__creator){
                return  class UserSelector_itemTemplate_1 extends AtomControl {

                

                public create(): void {
                    super.create();

                     ;

                    

                    this.element = document.createElement("div");
                    
                    
            this.runAfterInit( () =>
            this.setLocalValue(this.element, "eventClick", () => (this.viewModel).select((this.data))) );
                    
        const e1 = document.createTextNode("\r\n\t\t\t\t");
        
        this.element.appendChild(e1);

        const e2 = document.createElement("span");
        
        this.append(e2);
        
            this.runAfterInit( () =>
            this.setLocalValue(e2, "text", (this.data.label)) );
        

        const e3 = document.createTextNode("\r\n\t\t\t");
        
        this.element.appendChild(e3);
                }
            }

            

            
            }

            