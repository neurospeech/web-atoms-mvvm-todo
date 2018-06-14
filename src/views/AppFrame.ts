// tslint:disable
import {AtomPageView} from "web-atoms-core/bin/controls/AtomPageView";
import {AtomDockPanel} from "web-atoms-core/bin/controls/AtomDockPanel";

    import {AppFrameViewModel} from "../view-models/AppFrameViewModel";


    export class AppFrame extends AtomDockPanel {

        public create(): void {
            super.create();

            this.element = document.createElement("section");
            
            
        const e1 = document.createTextNode("\r\n\r\n    ");
        
        this.element.appendChild(e1);

            const e2 = new AtomPageView(document.createElement("section"));
            
            
        const e3 = document.createTextNode("\r\n    ");
        
        e2.element.appendChild(e3);
            
            e2.bind(e2.element, "url",  [["localViewModel","url"]], false , (v1) => (v1));
            this.append(e2);


        const e4 = document.createTextNode("\r\n\r\n");
        
        this.element.appendChild(e4);
            
                this.localViewModel = this.resolve(AppFrameViewModel);
        }
    }

    

            