import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as moment from 'moment';

import { ApiSalaService } from 'src/app/services/api-sala.service';
import { Sala } from 'src/app/Model/Sala';

@Component({
  selector: 'app-modificar-sala',
  templateUrl: './modificar-sala.component.html',
  styleUrls: ['./modificar-sala.component.css'],
})
export class ModificarSalaComponent implements OnInit {
  public salas: Sala[];
  public salaCampo: Sala = new Sala();
  constructor(private apiSala: ApiSalaService, public route: Router) {}

  ngOnInit(): void {
    this.apiSala.GetSala().subscribe(
      (valor) => {
        valor.forEach((element) => {
          var fechaData = element.Fecha.substr(0, 10);
          element.Fecha = moment(fechaData).format('yyyy-MM-DD');
        });
        this.salas = valor;
      },
      (error) => console.log(error)
    );
  }
  ModificarSala() {
    if (confirm('Confirmar Modificacion ')) {
      this.apiSala.UpdateSala(this.salaCampo).subscribe(
        (valor) => {
          console.log('Todo ok');
          this.route.navigate(['lista-sala']);
        },
        () => console.log('Te dio un error')
      );
    }
  }
  CompletarCampos(item: Sala) {
    this.salaCampo = item;
  }
}
