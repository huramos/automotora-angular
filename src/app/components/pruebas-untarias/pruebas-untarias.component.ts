import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
/**
 * @description 
 * Componete perfil muestra los datos del usuario
 * 
 */
/**
 * @usageNotes
 * 
 * 1. Importa este modulo en tu aplicacion principal
 * 2. Se deben ingresar Nombre, email, password, edad
 * 
 */

@Component({
  selector: 'app-pruebas-unitarias',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './pruebas-untarias.component.html',
  styleUrl: './pruebas-untarias.component.css'
})
export class PruebasUntariasComponent {

  miFormulario!: FormGroup;
  resultado!: string;

  constructor(private fb: FormBuilder) {
    this.miFormulario = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      edad: ['', Validators.required],
    });
  }

  Formulario(): void {
    const { nombre, email, password, edad } = this.miFormulario.value;
    this.validar(nombre, email, password, edad);
  }

  /**
 * 
 * @param {string} a - El nobre
 * @param {string} b - El email
 * @param {string} b - la password
 * @param {string} b - la Edad
 * @returns {string} - los valores concatenados 
 */

  validar(a: string, b: string, c: string, d: string): void {
    this.resultado = 'Nombre: ' + a + ' Email: ' + b + ' password: ' + c + ' Edad: ' + c;
  }
}
