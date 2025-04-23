import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [FormsModule], 
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit {

  carrito: any[] = [];
  total: number = 0;
  direccionEnvio: string = '';
  pagoExitoso: boolean = false;
  titular: string = '';
  email: string = '';

  constructor(private router: Router, private carritoService: CarritoService) {}

  ngOnInit() {
    this.carrito = this.carritoService.getCarrito();
    this.total = this.carrito.reduce((sum, item) => sum + item.precio, 0);
  }

  procesarPago() {
    if (this.direccionEnvio) {
      const pedido = {
        direccion: this.direccionEnvio,
        titular: this.titular,
        email: this.email,
        carrito: this.carrito,
        total: this.total,
        fecha: new Date()
      };

      localStorage.setItem('pedido', JSON.stringify(pedido));
      
      
      this.carritoService.vaciarCarrito();

      this.router.navigate(['/confirmacion']);
    } else {
      alert('Por favor ingrese una dirección de envío.');
    }
  }
}