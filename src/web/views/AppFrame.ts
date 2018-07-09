// tslint:disable
import {BindableProperty} from "web-atoms-core/bin/core/BindableProperty";
import {AtomPageView} from "web-atoms-core/bin/web/controls/AtomPageView";

    import {AppFrameViewModel} from "../../view-models/AppFrameViewModel";


    export default  class AppFrame extends AtomPageView {

        

        

        public create(): void {
            super.create();

            const __creator = this;

            

            this.element = document.createElement("section");
            
            
        const e1 = document.createTextNode("\r\n");
        
        this.element.appendChild(e1);
            
                this.setPrimitiveValue(this.element, "localViewModel", this.resolve(AppFrameViewModel));

            this.bind(this.element, "url",  [["localViewModel","url"]], false , (v1) => (v1) );
        }
    }

    

            