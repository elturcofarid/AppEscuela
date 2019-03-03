import { Component, OnInit } from '@angular/core';
import { CategoriaService, Jugador}  from '../../servicios/categoria/categoria.service';

@Component({
  selector: 'app-cat4',
  templateUrl: './cat4.component.html',
  styleUrls: ['./cat4.component.css']
})
export class Cat4Component implements OnInit {

 integrantes :Jugador[] = [];
  constructor( private _categoriaService:CategoriaService ) {

  }

  ngOnInit() {

     this.integrantes = this._categoriaService.getIntegrantesCat4();


  }

}
