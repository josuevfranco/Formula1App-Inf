import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  constructor() { }

  images : string [] = [
    "./assets/cars/c1.png",
    "./assets/cars/c2.jfif",
    "./assets/cars/c4.jpg",
    "./assets/cars/c3.jfif",
    "./assets/cars/c5.jpg",
    "./assets/cars/c6.jpg",
  ]

  ngOnInit(): void {
  }

}
