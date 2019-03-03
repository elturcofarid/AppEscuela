import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class CategoriaService {


 public integrantes:Jugador[] = [];

  constructor(private http : HttpClient) {

  }

getIntegrantes(){

  this.integrantes = [];

  this.http.get<Jugador[]>('data_cat1.json')
    .subscribe(resp => {

      var tam = resp.length;
      for (var i=0 ; i < tam ; i++){

          this.integrantes.push(resp[i]);
      }
    });

  console.log("llamaron a integrantes"
                );
  return this.integrantes;
}


getIntegrantesCat2(){

  this.integrantes = [];

  this.http.get<Jugador[]>('data_cat2.json')
    .subscribe(resp => {

      var tam = resp.length;
      for (var i=0 ; i < tam ; i++){

          this.integrantes.push(resp[i]);
      }
    });

  console.log("llamaron a integrantes cat2" + this.integrantes);
  return this.integrantes;
}



getIntegrantesCat3(){

  this.integrantes = [];

  this.http.get<Jugador[]>('data_cat3.json')
    .subscribe(resp => {

      var tam = resp.length;
      for (var i=0 ; i < tam ; i++){

          this.integrantes.push(resp[i]);
      }
    });

  console.log("llamaron a integrantes cat2" + this.integrantes);
  return this.integrantes;
}



getIntegrantesCat4(){

  this.integrantes = [];

  this.http.get<Jugador[]>('data_cat4.json')
    .subscribe(resp => {

      var tam = resp.length;
      for (var i=0 ; i < tam ; i++){

          this.integrantes.push(resp[i]);
      }
    });

  console.log("llamaron a integrantes cat2" + this.integrantes);
  return this.integrantes;
}


}

export interface Jugador{
  nombre ?: String;
  fecha ?: String;
  lugar_nacimiento ?: String;
  debut  ?: String;
  posicion ?: String;
  foto ?: String;
}
