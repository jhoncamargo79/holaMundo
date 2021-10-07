import { Component, OnInit } from '@angular/core';
import { Empleado, EmpleadosService } from 'src/app/servicios/empleados.service';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {
  contactos : Empleado[] = [];

  constructor(private empleadosService : EmpleadosService) {

   }

  ngOnInit(): void {
    this.contactos = this.empleadosService.getEmpleados();
    }

}
