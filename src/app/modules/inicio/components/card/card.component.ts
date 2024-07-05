import { Component } from '@angular/core';
import { videojuegos} from 'src/app/models/videojuegos';

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
      genero: "Plataformero",
      edad: 2019,
      imagen: "https://nintheorist.files.wordpress.com/2018/09/new-super-mario-bros-u_deluxe_portada.jpg",
      alt:""
    },
    {
      id: "",
      nombre: "Elden ring",
      genero: "Mundo abierto",
      edad: 2022,
      imagen: "https://epocasvideogames.com.ar/img/Public/1113-producto-81gongeym6l-sl1500-8626.jpg",
      alt:""
    },
    {
      id: "",
      nombre: "Tekken 7",
      genero: "lucha",
      edad: 2017 ,
      imagen: "https://tse4.mm.bing.net/th?id=OIP.le-BvS4Z6heFltHarfheDwHaJK&pid=Api&P=0&h=180",
      alt:""
    },
  ]
   }
}
