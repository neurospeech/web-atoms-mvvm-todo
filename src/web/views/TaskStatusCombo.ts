// tslint:disable
import {BindableProperty} from "web-atoms-core/dist/core/BindableProperty";
import {AtomComboBox} from "web-atoms-core/dist/web/controls/AtomComboBox";

    import { ConfigService } from "../../services/ConfigService";

export default  class TaskStatusCombo extends AtomComboBox {

                

                public create(): void {
                    super.create();

                    const __creator = this;

                    

                    
                    
                    
                this.setPrimitiveValue(this.element, "items",  this.resolve(ConfigService).getStatusList() );
                    
        const e1 = document.createTextNode("\r\n");
        
        this.element.appendChild(e1);
                }
            }

            

            