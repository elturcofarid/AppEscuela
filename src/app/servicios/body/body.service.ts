import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class BodyService {

 public info:DatosVideo[] = [];

 public momentos:Momento[] = [];

  constructor(private http : HttpClient) {

  }



getInformacion(){

  this.info = [];

  this.http.get<DatosVideo[]>('informacion.json')
    .subscribe(resp => {
      var tam = resp.length;
      for (var i=0 ; i < tam ; i++){
          this.info.push(resp[i]);
      }
    });

  return this.info;
}

getMomentos(){

  this.momentos = [];

  this.http.get<Momento[]>('listadoMomentos.json')
    .subscribe(resp => {
      var tam = resp.length;
      for (var i=0 ; i < tam ; i++){
          this.momentos.push(resp[i]);
      }
    });

  return this.momentos;
}

}

export interface DatosVideo{
  video ?: String;
  titulo_video ?: String;
  txt_video ?: String;
}

export interface Momento{
  url ?: String;
  momento ?: String;
}
