import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 2d4b8422-c7f4-4b1d-8b73-439bba7af688'
    })
  }

  private jsonUrl = 'https://bucketfullstack2.s3.us-east-1.amazonaws.com/autos.json'; 

  private lista:any;

  constructor(private http: HttpClient) {}

  getJsonData(): Observable<any> {
    return this.http.get(this.jsonUrl);
  }

  MetodoAutos(listaAutos:any) {
    console.log(listaAutos);
    this.http.post(this.jsonUrl,listaAutos,this.httpOptions).subscribe(
      response => {
        console.log('Archivo JSON sobrescrito con exito', response);
      },
      error => {
        console.error('Error al sobrescribir el archivo JSON', error);
      })
  }
}