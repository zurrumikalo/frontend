import { Component, OnInit } from "@angular/core";
import { WebService } from "./web.service";
import { ActivatedRoute } from "@angular/router";
import { ThrowStmt } from "@angular/compiler";


@Component({
    selector: 'tareas',
    templateUrl: './tareas.component.html'
})

export class TareasComponent{

    username: string = '';
    tareasLista: any;

    constructor(private webservice: WebService, private rutaActiva: ActivatedRoute){}

    ngOnInit():void{
        this.username = this.rutaActiva.snapshot.params["username"];
        this.webservice.getTask(this.username);
        this.webservice.tareasSujeto.subscribe(tareas =>{
            this.tareasLista = tareas;
            console.log(tareas);
        });
        this.webservice.getUser();
    }

    
}