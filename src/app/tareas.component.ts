import { Component, OnInit } from "@angular/core";
import { WebService } from "./web.service";


@Component({
    selector: 'tareas',
    template: `Listado tareas:
               <mat-card *ngFor="let tarea of tareas">
               <mat-card-title>{{tarea.usuario}}</mat-card-title>
               <mat-card-content>
                <p>{{tarea.trabajo}}</p>
               </mat-card-content>
               </mat-card> `
})

export class TareasComponent{

    constructor(private webservice: WebService){}

    tareas: any = [];

    async ngOnInit(){
        let respuesta = await this.webservice.getTask();
        this.tareas = respuesta;
    }

    
}