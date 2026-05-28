import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true, // Es buena práctica declarar explícitamente que es standalone
  imports: [ReactiveFormsModule, CommonModule, RouterLink], // Módulos necesarios para el HTML
  templateUrl: './login.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Login implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Inicializamos el formulario y sus validaciones
    this.loginForm = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  iniciarSesion(): void {
    if (this.loginForm.valid) {
      // Si el formulario es válido, aquí puedes enviar los datos a tu backend
      console.log('Credenciales de acceso:', this.loginForm.value);
      alert('Iniciando sesión...');
      
      // Opcional: limpiar el formulario después de un inicio de sesión exitoso
      // this.loginForm.reset();
    } else {
      // Si es inválido, marcamos todos los campos como tocados para que se muestren los errores de color rojo en el HTML
      this.loginForm.markAllAsTouched();
    }
  }
}