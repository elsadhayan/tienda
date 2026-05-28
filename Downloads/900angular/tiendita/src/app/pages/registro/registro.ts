import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-registro',
  standalone:true,
  imports: [],
  templateUrl: './registro.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Registro {}
