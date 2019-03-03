

import { RouterModule, Routes } from '@angular/router';
import  { HomeComponent } from './components/home/home.component';
import { QuienesComponent } from './components/quienes/quienes.component';
import { EquipoComponent } from './components/equipo/equipo.component';
import { Cat1Component } from './components/cat1/cat1.component';
import { Cat2Component } from './components/cat2/cat2.component';
import { Cat3Component } from './components/cat3/cat3.component';
import { Cat4Component } from './components/cat4/cat4.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { JugadorComponent } from './components/jugador/jugador.component';
import { PersonalComponent } from './components/personal/personal.component';
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';
import { ProfesorComponent } from './components/profesor/profesor.component';
import { AdministrativoComponent } from './components/administrativo/administrativo.component';
import { PersonalizacionComponent } from './components/personalizacion/personalizacion.component';

import { AuthGuardService } from './servicios/auth/auth-guard.service';

//
import { CargaComponent } from './components/carga/carga.component';
import { ImagenesComponent } from './components/imagenes/imagenes.component';
import { CargaImgComponent } from './components/carga-img/carga-img.component';
import { FotosComponent } from './components/fotos/fotos.component';
//

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'quienes', component: QuienesComponent },
  { path: 'equipo', component: EquipoComponent },
  { path: 'cat1', component: Cat1Component },
  { path: 'cat2', component: Cat2Component },
  { path: 'cat3', component: Cat3Component },
  { path: 'cat4', component: Cat4Component },
  { path: 'galeria', component: FotosComponent },
  //{    path: 'Modulo_Administrativo',    component: UsuariosComponent,    canActivate: [AuthGuardService]  },
  {    path: 'Modulo_Administrativo',    component: UsuariosComponent },
  { path: 'personal', component: PersonalComponent},
  { path: 'configuracion', component: ConfiguracionComponent},
  { path: 'profesor/:id', component: ProfesorComponent},
  { path: 'directivo/:id', component: AdministrativoComponent},
  { path: 'jugador/:id', component: JugadorComponent },
  { path: 'personalizacion/:id', component: PersonalizacionComponent },
  { path: 'fotos', component: FotosComponent },
  { path: 'carga', component: CargaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
