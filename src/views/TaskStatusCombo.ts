// tslint:disable
<<<<<<< HEAD
import {AtomComboBox} from "web-atoms-core/bin/controls/AtomComboBox";

    import { ConfigService } from "../services/ConfigService";


=======

>>>>>>> 678c27332c6f12bf155a599f6a9ae82649a322d5
    export class TaskStatusCombo extends AtomComboBox {

        public create(): void {
            super.create();

            this.element = document.createElement("select");
            
            
        const e1 = document.createTextNode("\r\n");
        
        this.append(e1);
            
        this.setLocalValue(this.element, "atom-component", "TaskStatusCombo");
        

<<<<<<< HEAD
            this.setLocalValue(this.element, "atom-items", ConfigService.instance.getStatusList());
=======
            this.setLocalValue(this.element, "atom-items", Todo.ConfigService.instance.getStatusList());
>>>>>>> 678c27332c6f12bf155a599f6a9ae82649a322d5
        }
    }

    

            