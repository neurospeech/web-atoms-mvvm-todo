// tslint:disable
import {BindableProperty} from "web-atoms-core/bin/core/BindableProperty";
import {AtomFrame} from "web-atoms-core/bin/web/controls/AtomFrame";

    import {AppFrameViewModel} from "../../view-models/AppFrameViewModel";

export default  class AppFrame extends AtomFrame {

                

                public create(): void {
                    super.create();

                    const __creator = this;

                    

                    
                    
                    
        const e1 = document.createTextNode("\r\n");
        
        this.element.appendChild(e1);
                    
                this.setPrimitiveValue(this.element, "localViewModel", this.resolve(AppFrameViewModel));

            this.bind(this.element, "url",  [["localViewModel","url"]], false , (v1) => (v1) );
                }
            }

            

            