import { Injectable } from '@angular/core';
import { EMPLEADOS } from '../mockup/empleados.mockup';
import { Empleado } from '../model/empleados.model';


@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  private empleados: Empleado[] = EMPLEADOS ;

  constructor() { }

  getEmpleados(): Empleado[] {
    return this.empleados

  }
}
