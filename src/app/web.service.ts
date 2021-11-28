import { HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable() 

export class WebService{

    APIURL = 'http://localhost:7070/api';

    tareas: any;
    respuesta: any;

    constructor(private http: HttpClient, private snack:MatSnackBar){
        this.tareas = [];
        this.getTask();
    }

    async getTask(){
        try {
            this.respuesta = await this.http.get(this.APIURL+'/tareas').toPromise();
            this.tareas = this.respuesta;
        } catch (error) {
            this.manejaError('No se han podido cargar las tareas');
        }

    }

    async postTask(_tarea:any){
        try {
            this.respuesta = await this.http.post(this.APIURL+'/tarea',_tarea).toPromise();
        this.tareas.push(this.respuesta);
        } catch (error) {
            this.manejaError('No se han podido añadir las tareas');
        }
        
    }

    private manejaError(error:any){
        this.snack.open(error,'Cerrar', {duration:2000,});
    }
}