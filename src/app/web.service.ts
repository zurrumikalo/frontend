import { HttpClient, HttpHeaders} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { map, Subject } from 'rxjs';

@Injectable() 

export class WebService{

    APIURL = 'http://localhost:7070/api';

    tareas: any;
    respuesta: any;
    tareasSujeto = new Subject();
    headers  = new HttpHeaders({
        'Authorization':'Bearer '+localStorage.getItem('token')
        });

    constructor(private http: HttpClient, private snack:MatSnackBar){
        this.tareas = [];
        this.getTask('');
    }

    getTask(username:string){
        
            username = (username) ? '/'+username:'';
            this.http.get(this.APIURL+'/tareas'+username).subscribe(res =>{
                this.tareas = res;
                this.tareasSujeto.next(this.tareas);
            }, error => {
            this.manejaError('No se han podido cargar las tareas');
            });

    }

    getUser(): any{

        return this.http.get(this.APIURL + '/users/yop',{headers: this.headers}).pipe(map(res => res));

    }

    saveUser(userModel:any):any{

        return this.http.post(this.APIURL + '/users/yop',userModel,{headers: this.headers}).pipe(map(res => res));
    }


    postTask(_tarea:any){
         
        this.http.post(this.APIURL+'/tarea',_tarea).subscribe(res =>{
            this.tareas.push(this.respuesta);
            this.tareasSujeto.next(this.tareas);
        }, error =>{
        this.manejaError('No se han podido añadir las tareas');
        });
        
    }

    private manejaError(error:any){
        this.snack.open(error,'Cerrar', {duration:2000,});
    }
}