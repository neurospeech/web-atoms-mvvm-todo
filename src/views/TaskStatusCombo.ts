// tslint:disable
import {AtomComboBox} from "web-atoms-core/bin/controls/AtomComboBox";

    import { ConfigService } from "../services/ConfigService";


    export class TaskStatusCombo extends AtomComboBox {

        public create(): void {
            super.create();

            this.element = document.createElement("select");
            
            
        const e1 = document.createTextNode("\r\n");
        
        this.append(e1);
            
        this.setLocalValue(this.element, "atom-component", "TaskStatusCombo");
        

            this.setLocalValue(this.element, "atom-items", ConfigService.instance.getStatusList());
        }
    }

    

            