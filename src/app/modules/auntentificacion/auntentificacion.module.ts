import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IniciosesionComponent } from './pages/iniciosesion/iniciosesion.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegistroComponent,
    IniciosesionComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule
  ],
  exports: [
    RegistroComponent,
    IniciosesionComponent,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule
  ]
})
export class AutentificacionModule { }

