import { Component, OnInit } from "@angular/core";
import { WebService } from "./web.service";
import { ActivatedRoute } from "@angular/router";


@Component({
    selector: 'tareas',
    templateUrl: './tareas.component.html'
})

export class TareasComponent{

    username: string = '';

    constructor(public webservice: WebService, private rutaActiva: ActivatedRoute){}

    ngOnInit():void{
        this.username = this.rutaActiva.snapshot.params["username"];
        this.webservice.getTask(this.username);
    }

    
}