import { Injectable } from '@angular/core' 
import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Jugador } from "../../interfaces/Jugador.interface";
import { Router, ActivatedRoute } from "@angular/router";
import { UsuariosService } from "../../Servicios/usuarios/usuarios.service";

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styles: []
})
export class JugadorComponent implements OnInit {


 _jugador: Jugador={
  nombre:"",
  posicion:"",
  categoria:"",
  nacimiento:"",
  telefono2:" ",
  telefono:"",
  apellidos:"",
  email:"",
  telefono_padre:"",
  nombre_padre:"",
  email_padre:"",
  telefono_madre:"",
  nombre_madre:"",
  email_madre:"" 
}

posiciones = [{
  nombre: "Arquero"
},{
  nombre: "Defensa central derecho"
},{
  nombre: "Defensa central izquierdo"
},{
  nombre: "Lateral derecho"
},{
  nombre: "Lateral izquierdo"
}
];


categorias = [{
  nombre: "2010-2011"
},{
  nombre: "2008-2010"
},{
  nombre: "2003-2008"
}
];

nuevo :boolean = false;
id:string; 
num : number = 0;


forma:FormGroup;


  constructor(private _usuariosService: UsuariosService , private router: Router, private activeRoute : ActivatedRoute
              ) {


                this.activeRoute.params.subscribe(
                  parametros => {       
                    this.id = parametros['id'];
                    this.num=this.num+1;
                    console.log('recibiendo datos del id ' ,this.id )
                    if (this.id != "nuevo"){
          
                      this._usuariosService.getJugador(this.id).subscribe( res => {             
                        this._jugador = res;    
                        console.log('recibiendo datos del id ' ,this._jugador )           
                      //  this.imprimir(this._jugador, 'recibiendo datos');
                      })
                    }else{
                      console.log('esta verga esta nula' ,this.id )          
                    }
                
          
                  })


                this.num=this.num+1;
                console.log('antes de crear form datos ' ,this.num )
           this.forma = new FormGroup({
                'categoria':new FormControl(''),
                'nacimiento':new FormControl('',
                      [
                        Validators.required,
                        Validators.minLength(3)
                      ]),
                'posicion':new FormControl(''),
                'telefono2':new FormControl(''),
                'telefono':new FormControl('' ,
                      [
                        Validators.required,
                        Validators.minLength(3)
                      ]),
                'apellidos':new FormControl('',
                      [
                        Validators.required,
                        Validators.minLength(3)
                      ]),
                'nombre' : new FormControl('',
                      [
                        Validators.required,
                        Validators.minLength(3)
                      ]),
                'email'  : new FormControl('',
                      [
                      Validators.required ,
                      Validators.pattern("^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$")
                      ]),
                'telefono_padre':new FormControl(''),
                'nombre_padre' : new FormControl(''),
                'email_padre'  : new FormControl(''),
                'telefono_madre':new FormControl(''),
                'nombre_madre' : new FormControl(''),
                'email_madre'  : new FormControl('')
             })


      
        
    
     this.num=this.num+1;
     this.imprimir(this._jugador, 'seteando datos');
    this.forma.setValue(this._jugador);
    console.log('esta verga no se deja ' , this.forma, ' de esta mierda ', this._jugador)
   }

  ngOnInit() {
  }

guardar(forma:NgForm){

console.log("nombre", forma);

    if (this.id == "nuevo"){
      //nuevo
      console.log('Guarde');
      this._jugador = this.forma.value;
      console.log('jugador antes de guardar ', this._jugador);
          this._usuariosService.nuevoJugador(this._jugador).subscribe(data =>{
              this.router.navigate(['/jugador', data.name])
                console.log(this._jugador);
         }, error => console.log(error))
          
    }else{
      //Actualizar
      console.log('Actualice');
     
      this._usuariosService.actualizarJugador(this.forma.value, this.id).subscribe(data =>{
        
     }, error => console.log(error))
    
    }
}


agregarNuevo(forma: NgForm){
  console.log('llega aqui');
  this.router.navigate(['jugador/','nuevo']);
  forma.reset();
}

imprimir(jugador: Jugador, mensaje: string){
  console.log ('jugador que llega ' , jugador, mensaje);
}


}
