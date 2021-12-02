import { Component, OnInit } from "@angular/core";
import { WebService } from "./web.service";


@Component({
    selector: 'profile',
    template: `
               
                <mat-card> 
                <mat-card-title>Editar perfil</mat-card-title>

                <mat-form-field class="example-full-width" appearance="fill">
                    <mat-label>Nombre:</mat-label>
                    <input [(ngModel)]="modelo.nombre" matInput placeholder="Nombre" value="">
                </mat-form-field>

                <mat-form-field class="example-full-width" appearance="fill">
                    <mat-label>Email:</mat-label>
                    <textarea [(ngModel)]="modelo.email" matInput placeholder="Introduzca su email"></textarea>
                </mat-form-field>                
                <button (click)="post()" mat-raised-button color="primary">Enviar</button>

               </mat-card> `
})

export class ProfileComponent implements OnInit{


    constructor(private webservice: WebService){}

    modelo = {nombre: '', email: ''};

    ngOnInit(){
        this.webservice.getUser().subscribe((res: { nombre: string; email: string; }) =>{
            this.modelo.nombre = res.nombre;
            this.modelo.email = res.email;
        });
    }

    post(){
        this.webservice.saveUser(this.modelo).subscribe();
    }
    
}