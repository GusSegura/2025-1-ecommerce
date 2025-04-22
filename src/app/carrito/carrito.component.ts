import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent implements OnInit {
  carrito: any[] = [];
  total: number = 0;

  constructor(private router: Router, private carritoService: CarritoService) {}

  ngOnInit() {
    this.cargarCarrito();
  }

  cargarCarrito() {
    this.carrito = this.carritoService.getCarrito();
    this.total = this.carrito.reduce((sum, item) => sum + item.precio, 0);
  }

  eliminarProducto(producto: any) {
    const index = this.carrito.findIndex(p => p === producto);
    if (index > -1) {
      this.carritoService.eliminarProducto(index);
      this.cargarCarrito();
    }
  }

  vaciarCarrito() {
    this.carritoService.vaciarCarrito();
    this.carrito = [];
    this.total = 0;
  }

  irAlCheckout() {
    this.router.navigate(['/checkout']);
  }
}