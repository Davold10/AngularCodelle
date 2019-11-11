import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public Nombre: string = "David Alejandro Romero Hernández";
  public arreglo: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  public pi: number = Math.PI;
  public porcentaje: number = .245
  public salario: number = 1234.5;
  public fecha = new Date();

  public persona = {
    nombre: 'jc',
    edad: 23,
    direccion: {
      calle: 'la calle',
      casa: 'debajo del puente'
    }
  }

  public nombre2:string='jOsE CARlos GonzAleZ SoRiaNo'
}
