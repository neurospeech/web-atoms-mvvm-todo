// tslint:disable
import {AtomPageView} from "web-atoms-core/bin/controls/AtomPageView";
import {AtomDockPanel} from "web-atoms-core/bin/controls/AtomDockPanel";

<<<<<<< HEAD
    import {AppFrameViewModel} from "../view-models/AppFrameViewModel";


    export class AppFrame extends AtomDockPanel {

        public create(): void {
            super.create();

            this.element = document.createElement("section");
            
            
        const e1 = document.createTextNode("\r\n=======\r\n    import { AppFrameViewModel }  from \"./../view-models/AppFrameViewModel\";\r\n\r\n");
        
        this.append(e1);

            const e2 = new AtomDockPanel(document.createElement("section"));
            
            
        const e3 = document.createTextNode("\r\n>>>>>>> 678c27332c6f12bf155a599f6a9ae82649a322d5\r\n\r\n    ");
        
        e2.append(e3);

            const e4 = new AtomPageView(document.createElement("section"));
            
            
        const e5 = document.createTextNode("\r\n    ");
        
        e4.append(e5);
            
            e4.bind(e4.element, "atom-url",  [["localViewModel","url"]], false , (v1) => (v1));
            e2.append(e4);


        const e6 = document.createTextNode("\r\n\r\n");
        
        e2.append(e6);
            
            e2.setLocalValue(e2.element, "atom-local-view-model", new AppFrameViewModel());
            this.append(e2);

            
            this.setLocalValue(this.element, "atom-local-view-model", this.resolve(AppFrameViewModel));
        }
    }

    

            