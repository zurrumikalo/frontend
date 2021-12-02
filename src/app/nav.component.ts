import { Component } from "@angular/core";
import { AuthService } from "./auth.service";

@Component({
    selector: 'nav',
    templateUrl: './nav.component.html'
})

export class NavComponent{

    name: string;
    ident: boolean;
    constructor(private auth: AuthService){
      this.name = auth.name;
      this.ident = auth.identificado;
  
    }
    logout(){
      localStorage.clear();
    }
   
}