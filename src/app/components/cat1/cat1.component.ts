import { Component, OnInit } from '@angular/core';
import { CategoriaService, Jugador}  from '../../servicios/categoria/categoria.service';

@Component({
  selector: 'app-cat1',
  templateUrl: './cat1.component.html',
  styleUrls: ['./cat1.component.css']
})
export class Cat1Component implements OnInit {

 integrantes :Jugador[] = [];
  constructor( private _categoriaService:CategoriaService ) {

  }

  ngOnInit() {

     this.integrantes = this._categoriaService.getIntegrantes();


  }

}
