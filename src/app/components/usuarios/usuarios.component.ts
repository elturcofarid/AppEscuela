import { Component, OnInit } from '@angular/core';
import { UsuariosService } from "../../Servicios/usuarios/usuarios.service";
import { Jugador } from "../../interfaces/Jugador.interface";

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: []
})
export class UsuariosComponent implements OnInit {

jugadores : any[] = [];

loading :boolean = true;

  constructor(private _usuario: UsuariosService) {


  this._usuario.consultarJugadores().subscribe( res => {
    console.log(res);
    this.jugadores = res;
  })
}

  ngOnInit() {
  }

}
