// tslint:disable
import {AtomControl} from "web-atoms-core/bin/controls/AtomControl";

    export class TaskStatusCombo extends AtomControl {

        public create(): void {
            super.create();

            this.element = document.createElement("select");
            
            
        const e1 = document.createTextNode("\r\n");
        
        this.append(e1);
            
        this.setLocalValue(this.element, "atom-component", "TaskStatusCombo");
        

            this.setLocalValue(this.element, "atom-items", Atom.get(Todo.ConfigService.instance.getStatusList()) );
        }
    }

    

            