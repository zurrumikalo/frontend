import { Component, ViewChild } from '@angular/core';
import { TareasComponent } from './tareas.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild(TareasComponent)
  tareas!: TareasComponent;

  nTarea(tarea:any){
    this.tareas.tareas.push(tarea);

  }
}
