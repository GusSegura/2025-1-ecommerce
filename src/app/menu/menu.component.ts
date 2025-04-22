import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { CarritoService } from '../carrito.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {

  showLoginPopup() {
    Swal.fire({
      title: 'Iniciar sesión',
      html: `
        <input type="text" id="username" class="swal2-input" placeholder="Usuario">
        <input type="password" id="password" class="swal2-input" placeholder="Contraseña">
      `,
      confirmButtonText: 'Iniciar sesión',
      focusConfirm: false,
      showCloseButton: true, 
      // closeButtonHtml: '&times;', 
      // preConfirm: () => {
      //   const username = (<HTMLInputElement>document.getElementById('username')).value;
      //   const password = (<HTMLInputElement>document.getElementById('password')).value;
        
      //   if (!username || !password) {
      //     Swal.showValidationMessage('Por favor, ingresa un usuario y contraseña');
      //     return false; 
      //   }
        
        

      //   return true; // Retorna true para cerrar el modal si todo está correcto.
      // }
    });
  }

  cantidadProductos: number = 0;

  constructor(private carritoService: CarritoService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.cantidadProductos = this.carritoService.getCarrito().length;

    this.carritoService.contador$.subscribe(contador => {
      this.cantidadProductos = contador;
      this.cdr.detectChanges();
    });
  }
}