import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Sala } from 'src/app/Model/Sala';
import { ApiSalaService } from 'src/app/services/api-sala.service';

@Component({
  selector: 'app-agregar-sala',
  templateUrl: './agregar-sala.component.html',
  styleUrls: ['./agregar-sala.component.css'],
})
export class AgregarSalaComponent implements OnInit {
  public sala: Sala = new Sala();

  constructor(private apiSala: ApiSalaService, public router: Router) {}

  AgregarSala() {
    this.apiSala.PostSala(this.sala).subscribe(
      () => this.router.navigate(['lista-sala']),
      () => console.log('Todo ok'),
      () => console.error('Error')
    );
  }
  Habilitar() {
    if (
      this.sala.Nombre !== undefined &&
      this.sala.Capacidad !== undefined &&
      this.sala.TipoSala !== undefined &&
      this.sala.Fecha !== undefined
    ) {
      return true;
    } else {
      return false;
    }
  }
  ngOnInit(): void {}
}
