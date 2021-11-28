import { Component } from "@angular/core";
import { WebService } from "./web.service";


@Component({
    selector: 'nav',
    template: `  
            <mat-toolbar color="primary">
                <span>Todo List</span>
            </mat-toolbar> `
})

export class NavComponent{

    constructor(public webservice: WebService){}

    tareas: any = [];

    
}