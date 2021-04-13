import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  idioma: string = 'es';
  videoUrl: string = 'https://www.youtube.com/embed/zRK1T0AfHwA';
  nombre: string = 'Capitán América';
  nombre2: string = "AnDrES FeLIPe TaPIaS"
  arreglo = [1,2,3,4,5,6,7,8,9,10];
  PI: number = Math.PI;
  porcentaje: number = 0.234;
  salario: number = 1234.5;
  activar: boolean = false;

  fecha: Date = new Date();

  valorPromesa = new Promise<string>( (resolve) => {
    setTimeout(() => {
      resolve('Llego la data!!!');
    }, 4500);
  });

  heroe = {
    nombre: 'Felipe',
    clave: 'Aengus',
    edad: 412,
    direccion:{
      calle: 'Primera',
      casa: 3
    }
  }
}
