import { Directive, EventEmitter, ElementRef,
         HostListener, Input, Output
       } from '@angular/core';
import { FileItem } from '../components/models/file-item';

@Directive({
  selector: '[appNgDropFiles]'
})
export class NgDropFilesDirective {

  @Input() archivos: FileItem[] = [];
  @Output() mouseSobre: EventEmitter<boolean> = new EventEmitter();
  constructor() { }


  @HostListener('dragover', ['$event'])
  public onDragEnter( event:any){ 
    this.mouseSobre.emit(false);       
    this._prevenirDetener( event );
  }

  @HostListener('dragleave', ['$event'])
  public onDragLeave( event:any){
    this.mouseSobre.emit(false);    
  }

  @HostListener('drop', ['$event'])
  public onDrop( event:any){
    this.mouseSobre.emit(false);    
    console.log('no funciona est verga', event);
    const transferencia = this.getTransferencia(event);

    if (!transferencia){
      return;
    }

    this._extraerArchivos (transferencia.file);

    this._prevenirDetener( event );
    this.mouseSobre.emit( false );
  }


  private getTransferencia(event: any){
    return event.dataTransfer? event.dataTransfer: event.originalEvent.dataTransfer;
  }
  
  private _extraerArchivos( archivosLista: FileList){
    console.log('extraer archivo');
    console.log(archivosLista)
  }

  //validaciones

  private _archivoValido(archivo: File): boolean{
    if (!this._archivoYaFueCargado (archivo.name ) && this._esImagen(archivo.type)){
      return true;
    }else{
      return false;
    }
  }
  private  _prevenirDetener( event){
    console.log('tarnfeprevenir detener');
    event.preventDefault();
    event.stopPropagation();
    console.log(event);
  }

  private _archivoYaFueCargado( nombreArchivo: string): boolean{
   
    for ( const archivo of this.archivos ){
      if ( archivo.nombreArchivo === nombreArchivo){
            return true;
      }
    }
    return false;
  }

    private _esImagen( tipoArchivo:  string ): boolean {
      return ( tipoArchivo === '' || tipoArchivo === undefined)? false : tipoArchivo.startsWith('image');
    }
}
