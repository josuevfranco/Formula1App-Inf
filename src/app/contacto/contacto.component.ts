import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  name: string = "";
  apellido: string = "";
  email: string = "";
  mensaje: string = "";

  color1: string = "white";
  color2: string = "white";
  color3: string = "white";
  color4: string = "white";




  comprueba() {
    if (this.name == "") {
      this.color1 = "rgb(47,0,0,0.5)";
      window.alert("Complete los espacios en blanco");
    } else if (this.apellido == "") {
      this.color2 = "rgb(47,0,0,0.5)";
      window.alert("Complete los espacios en blanco");
    } else if (this.email == "") {
      this.color3 = "rgb(47,0,0,0.5)";
      window.alert("Complete los espacios en blanco");
    } else if (!this.email.includes('@')) {
      this.color3 = "rgb(47,0,0,0.5)";
      window.alert("Escriba su correo correctamente");
    } else if (this.mensaje == "") {
      this.color4 = "rgb(47,0,0,0.5)";
      window.alert("Complete los espacios en blanco");
    } else {
      window.alert("Registro existoso");
      window.location.reload();
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
