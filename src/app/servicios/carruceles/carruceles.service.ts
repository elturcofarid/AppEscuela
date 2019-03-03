import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarrucelesService {

  carru: Carrucel[] = [];

  constructor(private http: HttpClient) {


    this.http.get<Carrucel[]>('carruceles.json')
    .subscribe(resp => {

      var tam = resp.length;
      for (var i=0 ; i < tam ; i++){

          this.carru.push(resp[i]);
      }            
    });
}

getCarruceles(){
  return this.carru;
}
}

export interface Carrucel{
   "imagen1" ?: String;
   "imagen2" ?: String;
   "imagen3" ?: String;
   "imagen4" ?: String;
   "imagen5" ?: String;
}
