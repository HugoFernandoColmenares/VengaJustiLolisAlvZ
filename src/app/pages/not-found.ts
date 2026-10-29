import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  template: `
    <div class="container page center">
      <h1 class="page-title">404: te tragó la Grieta</h1>
      <p class="kicker">Esta página cayó a otra dimensión (o nunca existió).</p>
      <a class="btn btn--yellow" routerLink="/">Volver al inicio</a>
    </div>
  `,
  styles: `.center { text-align: center; }`,
})
export class NotFoundPage {}
