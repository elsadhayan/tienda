import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // 1. Importamos RouterLink para la navegación

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink], // 2. Agregamos RouterLink a los imports del componente
  template: `
    <div class="productos-container">
      <h2>Lista de Productos</h2>
      
      <div style="margin-bottom: 20px;">
        <button routerLink='/formulario' class="btn-formulario">
          Agregar Nuevo Producto
        </button>
      </div>
      
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Producto de Ejemplo</td>
            <td>$150.00</td>
            <td>
              <button (click)="onButtonClick()">Agregar al carrito</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  styleUrl: './products.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Products {
  
  onButtonClick(): void {
    console.log('¡Botón presionado!');
  }
}