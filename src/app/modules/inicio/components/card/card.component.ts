import { Component } from '@angular/core';
import { videojuegos } from 'src/app/modules/auntentificacion/pages/iniciosesion/models/videojuegos';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  public info: videojuegos[]

  constructor(){
    this.info = [
  
      {
        id: "",
    nombre: "Mario bros",
    genero: "plataformero",
    edad: 40 ,
    imagen: "https://www.google.com/url?sa=i&url=https%3A%2F%2Flistado.mercadolibre.com.ar%2Fjuegos-de-nintendo-switch-mario&psig=AOvVaw0MQclSzLpCPm5j7YlVBPvq&ust=1720012380710000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCLCIp-i4iIcDFQAAAAAdAAAAABAE",
    alt: ""

      }
    ]

  }
}
