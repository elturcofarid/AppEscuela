import { Component, OnInit } from '@angular/core';
import { CategoriaService, Jugador}  from '../../servicios/categoria/categoria.service';

@Component({
  selector: 'app-cat2',
  templateUrl: './cat2.component.html',
  styleUrls: ['./cat2.component.css']
})
export class Cat2Component implements OnInit {

 integrantes :Jugador[] = [];
  constructor( private _categoriaService:CategoriaService ) {

  }

  ngOnInit() {

     this.integrantes = this._categoriaService.getIntegrantesCat2();


  }

}
