// tslint:disable
import {AtomControl} from "web-atoms-core/bin/controls/AtomControl";

    export class AppFrame extends AtomControl {

        public create(): void {
            super.create();

            this.element = document.createElement("section");
            
            
        const e1 = document.createTextNode("\r\n\r\n    ");
        
        this.append(e1);

            const e2 = new AtomPageView(document.createElement("section"));
            
            
        const e3 = document.createTextNode("\r\n    ");
        
        e2.append(e3);
            
            e2.bind(e2.element, "atom-url",  [["localViewModel","url"]], false , (v1) => (v1));
            this.append(e2);


        const e4 = document.createTextNode("\r\n\r\n");
        
        this.append(e4);
            
            this.setLocalValue(this.element, "atom-local-view-model", Atom.get(new Todo.AppFrameViewModel()) );
        }
    }

    

            