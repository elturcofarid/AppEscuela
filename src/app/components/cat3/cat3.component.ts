import { Component, OnInit } from '@angular/core';
import { CategoriaService, Jugador}  from '../../servicios/categoria/categoria.service';

@Component({
  selector: 'app-cat3',
  templateUrl: './cat3.component.html',
  styleUrls: ['./cat3.component.css']
})
export class Cat3Component implements OnInit {

 integrantes :Jugador[] = [];
  constructor( private _categoriaService:CategoriaService ) {

  }

  ngOnInit() {

     this.integrantes = this._categoriaService.getIntegrantesCat3();


  }

}
