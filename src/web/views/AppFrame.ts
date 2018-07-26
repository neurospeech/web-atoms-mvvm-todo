// tslint:disable
import {BindableProperty} from "web-atoms-core/dist/core/BindableProperty";
import {AtomFrame} from "web-atoms-core/dist/web/controls/AtomFrame";

    import {AppFrameViewModel} from "../../view-models/AppFrameViewModel";

export default  class AppFrame extends AtomFrame {

                

                public create(): void {
                    super.create();

                    const __creator = this;

                    

                    
                    
                    
                this.localViewModel = this.resolve(AppFrameViewModel);

            this.bind(this.element, "url",  [["localViewModel","url"]], false , (v1) => (v1) );
                    
        const e1 = document.createTextNode("\r\n");
        
        this.element.appendChild(e1);
                }
            }

            

            