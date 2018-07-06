// tslint:disable
import {BindableProperty} from "web-atoms-core/bin/core/BindableProperty";
import {AtomControl} from "web-atoms-core/bin/web/controls/AtomControl";

	import { TaskStatusCombo } from "./TaskStatusCombo";


    export class TaskEditor extends AtomControl {

        

        

        public create(): void {
            super.create();

            const __creator = this;

            

            this.element = document.createElement("div");
            
            
        const e1 = document.createTextNode("\r\n\t\t");
        
        this.element.appendChild(e1);

        const e2 = document.createElement("input");
        
        this.append(e2);
        
        this.setPrimitiveValue(e2, "type", "text" );
        

            this.bind(e2, "value",  [["viewModel","task","label"]], ["change", "keyup", "keydown", "blur"]  );

        this.setPrimitiveValue(e2, "autofocus", "autofocus" );
        
        

        const e3 = document.createTextNode("\r\n\t\t");
        
        this.element.appendChild(e3);

        const e4 = document.createElement("span");
        
        this.append(e4);
        
            this.bind(e4, "text",  [["viewModel","errorLabel"]], false , (v1) => (v1), __creator);
        

        const e5 = document.createTextNode("\r\n\t\t\r\n\r\n\t\t");
        
        this.element.appendChild(e5);

        const e6 = document.createElement("undefined");
        
        this.append(e6);
        
        

        const e7 = document.createTextNode("\r\n\t\t");
        
        this.element.appendChild(e7);

            const e8 = new TaskStatusCombo(this.app, document.createElement("select"));
            
            
            
            e8.bind(e8.element, "value",  [["viewModel","task","status"]], true  );
            this.append(e8);


        const e9 = document.createTextNode("\r\n\t\t");
        
        this.element.appendChild(e9);

        const e10 = document.createElement("span");
        
        this.append(e10);
        
            this.bind(e10, "text",  [["viewModel","errorStatus"]], false , (v1) => (v1), __creator);
        

        const e11 = document.createTextNode("\r\n\t\t\r\n\r\n\t\t");
        
        this.element.appendChild(e11);

        const e12 = document.createElement("textarea");
        
        this.append(e12);
        
        this.setPrimitiveValue(e12, "cols", "30" );
        

        this.setPrimitiveValue(e12, "rows", "10" );
        

            this.bind(e12, "value",  [["viewModel","task","description"]], true  );
        

        const e13 = document.createTextNode("\r\n\r\n\t\t");
        
        this.element.appendChild(e13);

        const e14 = document.createElement("div");
        
        this.append(e14);
        
        
        const e15 = document.createTextNode("\r\n\t\t\t");
        
        e14.appendChild(e15);

        const e16 = document.createElement("span");
        
        e14.appendChild(e16);
        
            this.bind(e16, "text",  [["viewModel","user","label"]], false , (v1) => (v1), __creator);
        

        const e17 = document.createTextNode("\r\n\t\t\t");
        
        e14.appendChild(e17);

        const e18 = document.createElement("button");
        
        e14.appendChild(e18);
        
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
            this.setLocalValue(e22, "styleDisplay", !(this.viewModel.windowName) ? '' : 'none') );
        
        const e23 = document.createTextNode("\r\n\t\t\t");
        
        e22.appendChild(e23);

        const e24 = document.createElement("button");
        
        e22.appendChild(e24);
        
                this.setPrimitiveValue(e24, "styleClass",  this.controlStyle.saveButton );

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

    

            