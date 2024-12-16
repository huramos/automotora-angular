import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  usuario = {
    nombre: 'Hugo Ramos',
    email: 'hr@gmail.com',
    edad: 30,
    contrasena: 'xxxx',
    imagen: 'logo.png'
  };
}
