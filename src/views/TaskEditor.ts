// tslint:disable
import {AtomControl} from "web-atoms-core/bin/controls/AtomControl";

	import { TaskStatusCombo } from "./TaskStatusCombo";


    export class TaskEditor extends AtomControl {

        public create(): void {
            super.create();

            this.element = document.createElement("div");
            
            
        const e1 = document.createTextNode("\r\n\r\n\t");
        
        this.append(e1);

        const e2 = document.createElement("undefined");
        
        this.append(e2);
        

        const e3 = document.createTextNode("\r\n\r\n\t");
        
        this.append(e3);

        const e4 = document.createElement("undefined");
        
        this.append(e4);
        

        const e5 = document.createTextNode("\r\n\r\n\t");
        
        this.append(e5);

        const e6 = document.createElement("undefined");
        
        this.append(e6);
        

        const e7 = document.createTextNode("\r\n\t\r\n\r\n\t\t");
        
        this.append(e7);

        const e8 = document.createElement("input");
        
        this.append(e8);
        
        this.setLocalValue(e8, "atom-label", "Task:");
        

        this.setLocalValue(e8, "type", "text");
        

        this.setLocalValue(e8, "atom-value", "^[viewModel.task.label]");
        

        this.setLocalValue(e8, "autofocus", "autofocus");
        

            this.bind(e8, "atom-error",  [["viewModel","errors","label"]], false , (v1) => (v1));

        const e9 = document.createTextNode("\r\n\t\t\r\n\r\n\t\t");
        
        this.append(e9);

        const e10 = document.createElement("undefined");
        
        this.append(e10);
        

        const e11 = document.createTextNode("\r\n\t\t");
        
        this.append(e11);

            const e12 = new TaskStatusCombo(document.createElement("select"));
            
            
            
        e12.setLocalValue(e12.element, "atom-label", "Status:");
        

            e12.bind(e12.element, "atom-value",  [["viewModel","task","status"]], true );

            e12.bind(e12.element, "atom-error",  [["viewModel","errors","status"]], false , (v1) => (v1));
            this.append(e12);


        const e13 = document.createTextNode("\r\n\t\t\r\n\r\n\t\t");
        
        this.append(e13);

        const e14 = document.createElement("textarea");
        
        this.append(e14);
        
        this.setLocalValue(e14, "atom-label", "Description:");
        

        this.setLocalValue(e14, "cols", "30");
        

        this.setLocalValue(e14, "rows", "10");
        

            this.bind(e14, "atom-value",  [["viewModel","task","description"]], true );

        const e15 = document.createTextNode("\r\n\r\n\t\t");
        
        this.append(e15);

        const e16 = document.createElement("div");
        
        this.append(e16);
        

        const e23 = document.createTextNode("\r\n\r\n\t\t");
        
        this.append(e23);

        const e24 = document.createElement("div");
        
        this.append(e24);
        
            this.setLocalValue(e24, "atom-field-visibility", !(this.getValue("viewModel.windowName")));

        const e29 = document.createTextNode("\r\n\r\n");
        
        this.append(e29);
            
        this.setLocalValue(this.element, "atom-component", "TaskEditor");
        
        }
    }

    

            