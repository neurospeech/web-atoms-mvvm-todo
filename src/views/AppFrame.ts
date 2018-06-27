// tslint:disable
import {AtomPageView} from "web-atoms-core/bin/web/controls/AtomPageView";

    import {AppFrameViewModel} from "../view-models/AppFrameViewModel";


    export class AppFrame extends AtomPageView {

        public create(): void {
            super.create();

            this.element = document.createElement("section");
            
            
        const e1 = document.createTextNode("\r\n");
        
        this.element.appendChild(e1);
            
                this.setPrimitiveValue(this.element, "localViewModel", this.resolve(AppFrameViewModel));

            this.bind(this.element, "url",  [["localViewModel","url"]], false , (v1) => (v1));
        }
    }

    

            