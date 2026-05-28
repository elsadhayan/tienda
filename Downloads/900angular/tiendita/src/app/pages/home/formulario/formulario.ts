import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  standalone: true, // Asegura que Angular sepa que es standalone
  imports: [ReactiveFormsModule, CommonModule], // Importamos los módulos necesarios aquí
  templateUrl: './formulario.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Formulario implements OnInit {
  productoForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.productoForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      categoria: ['', Validators.required],
      precio: ['', [Validators.required, Validators.min(0.5)]],
      stock: ['', [Validators.required, Validators.min(0)]],
      codigoBarras: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  guardarProducto(): void {
    if (this.productoForm.valid) {
      // Ideal para enviar los datos a tu backend
      console.log('Producto listo para guardar:', this.productoForm.value);
      alert('Producto agregado correctamente');
      this.productoForm.reset(); 
    } else {
      this.productoForm.markAllAsTouched();
    }
  }
}
