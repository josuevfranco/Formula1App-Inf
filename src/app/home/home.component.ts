import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bio : string = "'Still I Rise': estas son las palabras estampadas en la parte posterior del casco de Lewis Hamilton y tatuadas en sus hombros, y desde que aniquiló las expectativas con una de las mejores actuaciones de novatos en la historia de la F1 en 2007, eso es literalmente todo lo que ha hecho: subirse a encabezó la lista de posiciones de privilegio de todos los tiempos por delante de su héroe Ayrton Senna, subió al primer lugar en la columna de victorias superando al inimitable Michael Schumacher, y luego igualó los siete títulos mundiales del legendario alemán. ¿Es el G.O.A.T? Pocos negarían que él está en la conversación y, lo que es más, se ha salido con la suya, combinando su velocidad implacable con la negativa a ajustarse a los estereotipos sobre cómo debe pensar, vestirse o comportarse un piloto de carreras. El respeto se gana con esfuerzo en la F1, pero Hamilton, ahora Sir Lewis Hamilton para ser precisos, lo tiene de cada uno de sus compañeros. ¿Por qué? Porque saben que sea cual sea la pista, las condiciones, la situación, cuando se le baja la visera y se apagan las luces, es Hammertime."
  bio2 : string = "Al llegar como el competidor más joven de la Fórmula 1 con solo 17 años, Verstappen llevó su automóvil, sus rivales y los libros de récords del deporte al límite. El holandés con cara de bebé y corazón de león tomó el Toro Rosso, y luego el Red Bull, por los cuernos con su instintivo estilo de carreras. La actitud sin límites de Verstappen y su dura defensa a veces lo han llevado a problemas con sus compañeros y pagadores. Pero los errores que inicialmente estropearon su potencial han dado paso a la madurez, mientras que la valentía y la energía que lo convierten en un talento de gran éxito se han mantenido, y las victorias siguen llegando. Hijo del ex piloto de F1 Jos Verstappen y de la superrápida madre de karting Sophie Kumpen, las carreras atraviesan sus genes. A pesar de mudarse de la casa de papá para vivir en Mónaco, Verstappen permanece cerca de su familia, y aunque no tiene miedo de decir lo que piensa, todavía puede ser sorprendentemente tímido.";
  descrip : string = "El Campeonato Mundial de Fórmula 1 de la FIA, más conocida como Fórmula Uno, Fórmula 1 o F1, es la principal competición de automovilismo internacional y campeonato de deportes de motor más popular y prestigioso del mundo. La entidad que la dirige es la Federación Internacional del Automóvil (FIA). En septiembre del 2016, la empresa estadounidense Liberty Media, a través de la adquisición del Formula One Group, es responsable actualmente de gestionar y operar el campeonato.";
  noticias : News [] = [
    {
      type : "NOTICIAS",
      descrip : "VETTEL CRÉDITOS ASTON MARTIN ACTUALIZA PARA EL MEJOR VIERNES",
      date : "Mayo 3, 2021",
      views : 120,
      heart : 90,
      img : "./assets/img1.jpg"
    },
    {
      type : "DESTACADO",
      descrip : "Lo que dijeron los equipos - viernes en España",
      date : "Mayo 5, 2021",
      views : 146,
      heart : 120,
      img : "./assets/img2.jpg"
    },
    {
      type : "REPORTE",
      descrip : "F3: Hauger takes pole by 0.006s in season-opening qualifying session",
      date : "Mayo 1, 2021",
      views : 202,
      heart : 100,
      img : "./assets/img3.jpg"
    }   
  ];


  constructor() { }

  ngOnInit(): void {
  }

}

class News {
  type : string;
  descrip : string;
  date : string;
  views : number;
  heart : number;
  img : string;
};
