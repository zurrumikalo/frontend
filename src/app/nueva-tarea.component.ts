import { Component, OnInit } from "@angular/core";
import { WebService } from "./web.service";


@Component({
    selector: 'nueva-tarea',
    template: `
               
                <mat-card> 
                <mat-card-title>Añadir tarea</mat-card-title>

                <mat-form-field class="example-full-width" appearance="fill">
                    <mat-label>Nombre usuario:</mat-label>
                    <input [(ngModel)]="tarea.usuario" matInput placeholder="Federico..." value="">
                </mat-form-field>

                <mat-form-field class="example-full-width" appearance="fill">
                    <mat-label>Tarea</mat-label>
                    <textarea [(ngModel)]="tarea.trabajo" matInput placeholder="Hacer la comida.."></textarea>
                </mat-form-field>                
                <button (click)="post()" mat-raised-button color="primary">Enviar</button>

               </mat-card> `
})

export class NuevaTareaComponent{


    constructor(private webservice: WebService){}

    tarea = {trabajo: '', usuario: ''};

    post(){
        this.webservice.postTask(this.tarea);
    }
    
}