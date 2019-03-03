import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { Jugador} from "../../interfaces/Jugador.interface";
import 'rxjs/Rx';

import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { FileItem } from '../../components/models/file-item';

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {

  usuariosURL: string = "https://moduloadministrativo.firebaseio.com/jugadores.json"
  usuarioURL: string = "https://moduloadministrativo.firebaseio.com/jugadores/"

  constructor(private _http: Http) { }

  nuevoJugador(_jugador:Jugador) {



  let body = JSON.stringify(_jugador);
  let headers = new Headers({'content-Type':'applocation/json'});


  return this._http.post(this.usuariosURL, body , {headers})
  .map( res=>{
   return res.json();
  })
}


      actualizarJugador(_jugador:Jugador, key$ : string) {



          let body = JSON.stringify(_jugador);
          let headers = new Headers({'content-Type':'applocation/json'});

          let url = `${this.usuarioURL}/${key$}.json`;

          return this._http.put(url, body, {headers} )
            .map( res=>{
             return res.json();
            })
      }


    consultarJugadores(){
        return this._http.get(this.usuariosURL)
        .map( res => res.json() );
    }


    getJugador (key$: string){
      let url = `${this.usuarioURL}/${key$}.json`;

      return this._http.get(url)
      .map( res => res.json() );
    }
    

}
