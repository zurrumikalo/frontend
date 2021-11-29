import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { TareasComponent } from './tareas.component';

const routes: Routes = [{
  path:'',component:HomeComponent
},{
  path:'tareas',component:TareasComponent
},{
  path:'tareas/:username',component:TareasComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
