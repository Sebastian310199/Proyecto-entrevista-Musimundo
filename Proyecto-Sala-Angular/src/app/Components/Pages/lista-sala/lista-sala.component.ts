import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as moment from 'moment';

import { Sala } from 'src/app/Model/sala';
import { ApiSalaService } from 'src/app/services/api-sala.service';

@Component({
  selector: 'app-lista-sala',
  templateUrl: './lista-sala.component.html',
  styleUrls: ['./lista-sala.component.css'],
})
export class ListaSalaComponent implements OnInit {
  public osala: Sala;

  constructor(private apiSala: ApiSalaService, public router: Router) {}

  ngOnInit(): void {
    this.apiSala.GetSala().subscribe(
      (valor) => {
        valor.forEach((element) => {
          var fechaData = element.Fecha.substr(0, 10);
          element.Fecha = moment(fechaData).format('DD-MM-yyyy');
        });
        this.osala = valor;
      },
      (error) => console.log(error)
    );
  }
  EliminarSala(objeto) {
    if (confirm('Estas seguro que deseas eliminar a: ' + objeto.Nombre)) {
      this.apiSala.DeleteSala(objeto.Id).subscribe(
        () => window.location.reload(),
        () => console.log('Todo ok'),
        () => console.error('Error')
      );
    }
  }
}
