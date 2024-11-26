import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-automoviles',
  templateUrl: './automoviles.component.html',
  imports: [CommonModule, ReactiveFormsModule],
  styleUrls: ['./automoviles.component.css']
})
export class AutomovilesComponent {
  automoviles = [
    {
      nombre: 'Mitsubishi L200',
      descripcion: 'Auto nuevo',
      imagen: 'Mitsubishi_L200.png'
    },
    {
      nombre: 'Suzuki S presso',
      descripcion: 'Auto nuevo',
      imagen: 'Suzuki_S_presso.png'
    },
    {
      nombre: 'Volkswagen Escarabajo',
      descripcion: 'Auto nuevo',
      imagen: 'Volkswagen_Escarabajo.png'
    }

  ];
  isResponsive: boolean = false;

  toggleMenu(): void {
    this.isResponsive = !this.isResponsive;
  }
}
