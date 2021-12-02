import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';


@Component({
  selector: 'register',
  templateUrl: 'register.component.html',
  styles: [`
   .error{
     background-color: #ff4081;
   }
  `]
})
export class RegisterComponent {

  form: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService){
    this.form = fb.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      email: ['', [Validators.required, validEmail()]],
      password: ['', Validators.required],
      cpassword: ['', Validators.required]
    }, {validator: isntSame('password','cpassword')});
  }

  onSubmit(){
    console.log(this.form.errors);
    this.auth.register(this.form.value);
  }

  isValid(control: string | number){
    return this.form.controls[control].invalid && this.form.controls[control].touched;
  }




}

function   isntSame(field1: string, field2: string){    
  return (form:any) => {
    if (form.controls[field1] && form.controls[field2]){
      if (form.controls[field1].value !==  form.controls[field2].value){
        return {isntSame: true};
      }else{
        return {isntSame: false};
      }
    }else{
        return {isntSame: false};
    }
  }
}

function validEmail(){
  return (control: any) =>{
    // tslint:disable-next-line:max-line-length
    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return regex.test(control.value) ? null : {invalidEmail: true}
  }
}

