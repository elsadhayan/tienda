import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-products',
  imports: [],
  template: `
    <div class="productos-container">
      <h2>Lista de Productos</h2>
      
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
  
  // Método que se ejecuta al presionar el botón
  onButtonClick(): void {
    console.log('¡Botón presionado!');
    // Aquí puedes agregar la lógica que necesites
  }
}