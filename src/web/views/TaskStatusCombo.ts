// tslint:disable
import {BindableProperty} from "web-atoms-core/bin/core/BindableProperty";
import {AtomComboBox} from "web-atoms-core/bin/web/controls/AtomComboBox";

    import { ConfigService } from "../../services/ConfigService";


    export default  class TaskStatusCombo extends AtomComboBox {

        

        

        public create(): void {
            super.create();

            const __creator = this;

            

            this.element = document.createElement("select");
            
            
        const e1 = document.createTextNode("\r\n");
        
        this.element.appendChild(e1);
            
                this.setPrimitiveValue(this.element, "items",  this.resolve(ConfigService).getStatusList() );
        }
    }

    

            