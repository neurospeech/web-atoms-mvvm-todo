// tslint:disable
import {AtomControl} from "web-atoms-core/bin/controls/AtomControl";

	import { TaskStatusCombo } from "./TaskStatusCombo";


    export class TaskEditor extends AtomControl {

        public create(): void {
            super.create();

            this.element = document.createElement("div");
            
            
        const e1 = document.createTextNode("\r\n\t\t");
        
        this.element.appendChild(e1);

        const e2 = document.createElement("input");
        
        this.append(e2);
        
        this.runAfterInit( () =>
        this.setLocalValue(e2, "label", "Task:" ));
        

        this.runAfterInit( () =>
        this.setLocalValue(e2, "type", "text" ));
        

            this.bind(e2, "value",  [["viewModel","task","label"]], true );

        this.runAfterInit( () =>
        this.setLocalValue(e2, "autofocus", "autofocus" ));
        
        

        const e3 = document.createTextNode("\r\n\t\t");
        
        this.element.appendChild(e3);

        const e4 = document.createElement("span");
        
        this.append(e4);
        
            this.bind(e4, "text",  [["viewModel","errorLabel"]], false , (v1) => (v1));
        

        const e5 = document.createTextNode("\r\n\t\t\r\n\r\n\t\t");
        
        this.element.appendChild(e5);

        const e6 = document.createElement("undefined");
        
        this.append(e6);
        
        

        const e7 = document.createTextNode("\r\n\t\t");
        
        this.element.appendChild(e7);

            const e8 = new TaskStatusCombo(document.createElement("select"));
            
            
            
        e8.runAfterInit( () =>
        e8.setLocalValue(e8.element, "label", "Status:" ));
        

            e8.bind(e8.element, "value",  [["viewModel","task","status"]], true );
            this.append(e8);


        const e9 = document.createTextNode("\r\n\t\t");
        
        this.element.appendChild(e9);

        const e10 = document.createElement("span");
        
        this.append(e10);
        
            this.bind(e10, "text",  [["viewModel","errorStatus"]], false , (v1) => (v1));
        

        const e11 = document.createTextNode("\r\n\t\t\r\n\r\n\t\t");
        
        this.element.appendChild(e11);

        const e12 = document.createElement("textarea");
        
        this.append(e12);
        
        this.runAfterInit( () =>
        this.setLocalValue(e12, "label", "Description:" ));
        

        this.runAfterInit( () =>
        this.setLocalValue(e12, "cols", "30" ));
        

        this.runAfterInit( () =>
        this.setLocalValue(e12, "rows", "10" ));
        

            this.bind(e12, "value",  [["viewModel","task","description"]], true );
        

        const e13 = document.createTextNode("\r\n\r\n\t\t");
        
        this.element.appendChild(e13);

        const e14 = document.createElement("div");
        
        this.append(e14);
        
        
        const e15 = document.createTextNode("\r\n\t\t\t");
        
        e14.appendChild(e15);

        const e16 = document.createElement("span");
        
        this.append(e16);
        
            this.bind(e16, "text",  [["viewModel","user","label"]], false , (v1) => (v1));
        

        const e17 = document.createTextNode("\r\n\t\t\t");
        
        e14.appendChild(e17);

        const e18 = document.createElement("button");
        
        this.append(e18);
        
            this.runAfterInit( () =>
            this.setLocalValue(e18, "eventClick", () => (this.viewModel).assign()) );
        
        const e19 = document.createTextNode("Assign");
        
        e18.appendChild(e19);

        const e20 = document.createTextNode("\r\n\t\t");
        
        e14.appendChild(e20);

        const e21 = document.createTextNode("\r\n\r\n\t\t");
        
        this.element.appendChild(e21);

        const e22 = document.createElement("div");
        
        this.append(e22);
        
            this.runAfterInit( () =>
            this.setLocalValue(e22, "fieldVisibility", !(this.viewModel.windowName)) );
        
        const e23 = document.createTextNode("\r\n\t\t\t");
        
        e22.appendChild(e23);

        const e24 = document.createElement("button");
        
        this.append(e24);
        
            this.runAfterInit( () =>
            this.setLocalValue(e24, "eventClick", () => (this.viewModel).save()) );
        
        const e25 = document.createTextNode("Save");
        
        e24.appendChild(e25);

        const e26 = document.createTextNode("\r\n\t\t");
        
        e22.appendChild(e26);

        const e27 = document.createTextNode("\r\n\r\n");
        
        this.element.appendChild(e27);
            
        }
    }

    

            