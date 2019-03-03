import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { CarrucelComponent } from './components/carrucel/carrucel.component';
import { HomeComponent } from './components/home/home.component';

//rutas
import { APP_ROUTING } from './app.routes';
import { QuienesComponent } from './components/quienes/quienes.component';
import { EquipoComponent } from './components/equipo/equipo.component';
import { Cat1Component } from './components/cat1/cat1.component';
import { Cat2Component } from './components/cat2/cat2.component';
import { Cat3Component } from './components/cat3/cat3.component';
import { Cat4Component } from './components/cat4/cat4.component';


//Servicios
import { CategoriaService } from './servicios/categoria/categoria.service';
import { BodyService } from './servicios/body/body.service';
import { HttpClientModule } from '@angular/common/http';
import { UsuariosService } from "./Servicios/usuarios/usuarios.service";
import { YoutubeService } from './servicios/youtube/Youtube.service';
import { AuthService } from './servicios/auth/auth.service';
import { AuthGuardService } from './servicios/auth/auth-guard.service';


//componentes
import { CarrucelesService } from  './servicios/carruceles/carruceles.service';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { JugadorComponent } from './components/jugador/jugador.component';
import { KeysPipe } from './pipes/keys.pipe';
import { YoutubePipe } from './pipes/youtube.pipe';
import { PersonalComponent } from './components/personal/personal.component';
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';
import { ProfesorComponent } from './components/profesor/profesor.component';
import { AdministrativoComponent } from './components/administrativo/administrativo.component';
import { PersonalizacionComponent } from './components/personalizacion/personalizacion.component';
import { LoginComponent } from './components/login/login.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { NgDropFilesDirective } from './directives/ng-drop-files.directive';


///

import { FotosComponent } from './components/fotos/fotos.component';
import { CargaComponent } from './components/carga/carga.component';
import { CargaImagenesService } from './services/carga-imagenes.service';
import { ImagenesComponent } from './components/imagenes/imagenes.component';
import { CargaImgComponent } from './components/carga-img/carga-img.component';

//

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    NavComponent,
    CarrucelComponent,
    HomeComponent,
    QuienesComponent,
    EquipoComponent,
    Cat1Component,
    Cat2Component,
    Cat3Component,
    Cat4Component,
    GaleriaComponent,
    UsuariosComponent,
    JugadorComponent,
    KeysPipe,
    YoutubePipe,
    PersonalComponent,
    ConfiguracionComponent,
    ProfesorComponent,
    AdministrativoComponent,
    PersonalizacionComponent,
    LoginComponent,
    NgDropFilesDirective,
    FotosComponent,
    CargaComponent,
    NgDropFilesDirective,
    ImagenesComponent,
    CargaImgComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  providers: [CategoriaService,
              BodyService,
              CarrucelesService,
              YoutubeService,
              AuthService,
              AuthGuardService,
             UsuariosService,
             CargaImagenesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
