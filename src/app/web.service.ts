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
        this.getTask('');
    }

    getTask(username:string){
        
            username = (username) ? '/'+username:'';
            this.http.get(this.APIURL+'/tareas'+username).subscribe(res =>{
                this.tareas = res;
            }, error => {
            this.manejaError('No se han podido cargar las tareas');
            });

    }

    postTask(_tarea:any){
         
        this.http.post(this.APIURL+'/tarea',_tarea).subscribe(res =>{
            this.tareas.push(this.respuesta);
        }, error =>{
        this.manejaError('No se han podido añadir las tareas');
        });
        
    }

    private manejaError(error:any){
        this.snack.open(error,'Cerrar', {duration:2000,});
    }
}