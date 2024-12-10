import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonService } from '../../service/json.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-automoviles',
  standalone: true,
  imports: [HttpClientModule,CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './automoviles.component.html',
  styleUrls: ['./automoviles.component.css'],
  providers: [JsonService]
})

export class AutomovilesComponent implements OnInit {

  autos: any[] = [];
  nombre: string = '';
  descripcion: string = '';

  constructor(private jsonService: JsonService) { }

  ngOnInit(): void {
    this.jsonService.getJsonData().subscribe(data => {
      this.autos = data;
    });
  }

  eliminar(auto: any): void {
    const index = this.autos.findIndex((elemento: any) => elemento.id === auto.id);

    if (index !== -1) {
      this.autos.splice(index, 1);
      this.jsonService.MetodoAutos(this.autos);
    } else {
      window.alert('El elemento de la lista no existe');
    }
  }

  modificar(auto: any): void {
    const index = this.autos.findIndex((elemento: any) => elemento.id === auto.id);

    if (index !== -1) {
      this.autos[index].nombre = this.nombre;
      this.autos[index].descripcion = this.descripcion;
      this.jsonService.MetodoAutos(this.autos);
    } else {
      window.alert('El elemento de la lista no existe');
    }
  }

  addAuto(): void {
    const newAuto = {
      id: this.autos.length > 0 ? Math.max(...this.autos.map((p: any) => p.id)) + 1 : 1,
      nombre: this.nombre,
      descripcion: this.descripcion
    };
    this.autos.push(newAuto);
    this.jsonService.MetodoAutos(this.autos);
  }

  submitForm(): void {
    if (this.nombre && this.descripcion !== null) {
      this.addAuto();
      this.nombre = '';
      this.descripcion = '';
    } else {
      window.alert('Por favor, ingrese un nombre y una descripcion valida');
    }
  }
  isResponsive: boolean = false;

  toggleMenu(): void {
    this.isResponsive = !this.isResponsive;
  }
}


