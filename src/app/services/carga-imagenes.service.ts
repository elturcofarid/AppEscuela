import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { FileItem } from '../models/file-item';


@Injectable()
export class CargaImagenesService {

  private CARPETA_IMAGENES = 'img';

  public urlTemp:string = ' ';

  constructor( private db: AngularFirestore ) { }


  cargarImagenesFirebase( imagenes: FileItem[] ) {

    const storageRef = firebase.storage().ref();

    for ( const item of imagenes ) {

      item.estaSubiendo = true;
      if ( item.progreso >= 100 ) {
        continue;
      }

      
      const uploadTask: firebase.storage.UploadTask =
                  storageRef.child(`${ this.CARPETA_IMAGENES }/${ item.nombreArchivo }`)
                            .put( item.archivo );

      uploadTask.on( firebase.storage.TaskEvent.STATE_CHANGED,
              ( snapshot: firebase.storage.UploadTaskSnapshot ) =>
                          item.progreso = ( snapshot.bytesTransferred / snapshot.totalBytes ) * 100,
              ( error ) => console.error('Error al subir', error ),
              () => {
                
               // console.log ('uploadTask ::: ' , uploadTask);
                item.url = uploadTask.snapshot.downloadURL;   
               /*
                uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {    
                  console.log('entra a la funciona hp ');              
                  this.urlTemp = downloadURL;                  
                });
                */
                
                console.log('sale a la funciona hp ');              
                console.log (' urlTemp ::: ' , this.urlTemp);
                item.url = 'https://firebasestorage.googleapis.com/v0/b/moduloadministrativo.appspot.com/o/img%2FIMG-20180730-WA0022.jpg?alt=media&token=d3961d2e-a38c-4557-85c6-af16cfd3e217';           
                //console.log('url ::: ' , item.url, ' origen :::' ,uploadTask.snapshot.downloadURL );

                item.estaSubiendo = false;
                this.guardarImagen({
                  nombre: item.nombreArchivo,
                  url: item.url                  
                });
              });


    }

  }


  private guardarImagen( imagen: { nombre: string, url: string } ) {

    this.db.collection(`/${ this.CARPETA_IMAGENES }`)
            .add( imagen );      

  }

}
