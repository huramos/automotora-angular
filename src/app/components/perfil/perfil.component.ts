import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  usuario = {
    nombre: 'Hugo Ramos',
    email: 'hu.ramos2@duocuc.cl',
    edad: 30,
    contrasena: 'xxxx',
    imagen: 'logo.png'
  };
}
