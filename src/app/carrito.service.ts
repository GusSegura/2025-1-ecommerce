import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private carrito = JSON.parse(localStorage.getItem('carrito') || '[]');
  private contadorSubject = new BehaviorSubject<number>(this.carrito.length);
  contador$ = this.contadorSubject.asObservable();

  getCarrito(): any[] {
    return JSON.parse(localStorage.getItem('carrito') || '[]');
  }

  agregarProducto(producto: any) {
    const carrito = this.getCarrito();
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    this.actualizarContador();
  }

  eliminarProducto(index: number) {
    const carrito = this.getCarrito();
    carrito.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    this.actualizarContador();
  }

  vaciarCarrito() {
    localStorage.setItem('carrito', JSON.stringify([]));
    this.actualizarContador();
  }

  actualizarContador() {
    const carrito = this.getCarrito();
    this.contadorSubject.next(carrito.length);
  }
}