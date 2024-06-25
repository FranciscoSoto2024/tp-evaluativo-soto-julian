import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuntentificacionRoutingModule } from './auntentificacion-routing.module';
import { IniciosesionComponent } from './pages/iniciosesion/iniciosesion.component';
import { RegistroComponent } from './pages/registro/registro.component';


@NgModule({
  declarations: [
    IniciosesionComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    AuntentificacionRoutingModule
  ]
})
export class AuntentificacionModule { }
