import { Injectable } from '@angular/core';

export interface Empleado {
  cedula: number,
  nombre: string,
  edad: number
}

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  empleados: Empleado[] = [
    {cedula: 79938432, nombre: 'Johnn Camargo', edad: 42},
    {cedula: 78925414, nombre: 'Javier Perdomo', edad: 45},
    {cedula: 78412478, nombre: 'Yesid Sanchez', edad: 44},
    {cedula: 1045879527, nombre: 'Fredy Manrique', edad: 35},
    {cedula: 1102458698, nombre: 'Walter Rivera', edad: 32},
  ];

  constructor() { }

  getEmpleados(): Empleado[] {
    return this.empleados

  }
}
