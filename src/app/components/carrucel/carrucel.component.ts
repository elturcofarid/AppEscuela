import { Component, OnInit } from '@angular/core';
import { CarrucelesService, Carrucel } from '../../servicios/carruceles/carruceles.service';

@Component({
  selector: 'app-carrucel',
  templateUrl: './carrucel.component.html',
  styleUrls: ['./carrucel.component.css']
})
export class CarrucelComponent implements OnInit {

  carrucel : Carrucel[]=[];

  constructor(public _carruceles : CarrucelesService) { }

  ngOnInit() {
    this.carrucel = this._carruceles.getCarruceles();

  }

}
