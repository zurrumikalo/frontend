import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Injectable()

export class AuthService {

  APIURL = 'http://localhost:7070/auth';
  userinfo: any;


  constructor(private http: HttpClient, private _snackBar: MatSnackBar, private router: Router) {}

  get name(): any {
    return localStorage.getItem('nombre');
  }

  get identificado(): boolean {
    return !!localStorage.getItem('token');
  }

  login(userdata:any){
    this.http.post(this.APIURL + '/login', userdata).subscribe(res => {
      this.identificacion(res);
    })
  }

  register(user:any) {
        delete user.cpassword;
        this.http.post(this.APIURL + '/register', user).subscribe(res => {
          this.identificacion(res);
         }, error => {
        this.manejadorErrores('No se ha podido registrar al usuario');
    });

  }

  identificacion(res:any){
    this.userinfo = res;
    localStorage.setItem('token', this.userinfo.token);
    localStorage.setItem('nombre', this.userinfo.nombre);
    this.router.navigate(['/']);
  }

  private manejadorErrores(error: any) {
    this._snackBar.open(error, 'Cerrar', {
      duration: 2000,
    });
  }
}
