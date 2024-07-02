import { Component } from '@angular/core';
import { usuarios } from '../iniciosesion/models/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  hide = true

  usuarios: usuarios = {
    uid: '', // -> inicializamos con comillas simples porque es tipo STRING
    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    password: ''
  }

  coleccionUsuarios: usuarios[] = [];

  async registrar(){}
}
