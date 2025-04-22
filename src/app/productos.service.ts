import { Injectable } from '@angular/core';
import { Ropa } from './ropa';
import ropaData from './ropa.json'; 

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  ropa : Ropa[] = ropaData; 
  private searchResults = this.ropa; //no se para que sirve

  constructor() { }
  
  fnMujer():Ropa[]{
    return this.ropa.filter(ropa=>ropa.coleccion=='mujer');
  }
  fnHombre():Ropa[]{
    return this.ropa.filter(ropa=>ropa.coleccion=='hombre');
  }
  fnKids():Ropa[]{
    return this.ropa.filter(ropa=>ropa.coleccion=='kids');
  }
  fnAccesorios():Ropa[]{
    return this.ropa.filter(ropa=>ropa.coleccion=='accesorios');
  }

  getRopa(): Ropa[] {
    return this.ropa;
  }
}
