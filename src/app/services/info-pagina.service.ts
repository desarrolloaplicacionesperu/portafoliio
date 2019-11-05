import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';
import { InfoEquipo } from '../interfaces/info-equipo.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  // info: any = {};
  info: InfoPagina = {};
  equipo: any[] = []; // equipo: InfoEquipo = {};
  cargada = false;
  equipo2: InfoEquipo[] = [];

  constructor(private http: HttpClient) {

    this.CargarInfo();
    this.CargarEquipo();
    this.CargarEquipo2();

  }

  private CargarInfo() {
    // Leer el archivo json
    this.http
      .get('assets/data/data-pagina.json')
      .subscribe((resp: InfoPagina) => {
        this.cargada = true;
        this.info = resp;
      });
  }

  private CargarEquipo() {
    // Leer json desde firebase
    this.cargada = false;
    this.http
    .get('https://angular-html-d44f8.firebaseio.com/equipo.json')
    .subscribe((resp: any[]) => {
      this.cargada = true;
      this.equipo = resp;
    });
  }

  private CargarEquipo2() {
    // Leer json desde firebase
    this.cargada = false;
    this.http
    .get('https://angular-html-d44f8.firebaseio.com/equipo.json')
    .subscribe((resp: InfoEquipo[]) => {
      this.cargada = true;
      this.equipo2 = resp;
    });
  }

}
