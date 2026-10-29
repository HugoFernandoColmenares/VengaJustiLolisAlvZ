import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BACKEND } from '../core/backend/backend';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-admin',
  imports: [FormsModule],
  template: `
    <div class="container page stack">
      <h1 class="page-title">Panel admin</h1>
      @if (!backend.user()) {
        <div class="card card__body center"><p>Inicia sesión para continuar.</p>
          <button class="btn btn--pink" type="button" (click)="backend.signIn()">Iniciar sesión</button></div>
      } @else if (!backend.user()!.isAdmin) {
        <p class="notice notice--error">Tu cuenta no es admin. Pide a Feith Noir que te agregue en la colección <code>admins</code>.</p>
        <p class="center"><button class="btn" type="button" (click)="backend.signOut()">Cerrar sesión</button></p>
      } @else {
        @if (msg()) { <p class="notice notice--ok" role="status">{{ msg() }}</p> }
        <div class="grid grid--2">
          <form class="card card__body" (ngSubmit)="savePost()" #pf="ngForm">
            <h2 class="section-title">Nuevo post</h2>
            <div class="field"><label for="pt">Título</label><input id="pt" name="title" [(ngModel)]="post.title" required maxlength="140"></div>
            <div class="field"><label for="pb">Contenido</label><textarea id="pb" name="body" [(ngModel)]="post.body" required></textarea>
              <span class="hint">Texto plano; los saltos de línea se respetan.</span></div>
            <div class="field"><label for="pg">Etiquetas</label><input id="pg" name="tags" [(ngModel)]="post.tags" placeholder="lore, premios"></div>
            <button class="btn btn--pink" type="submit" [disabled]="pf.invalid">Publicar</button>
          </form>
          <form class="card card__body" (ngSubmit)="saveCat()" #cf="ngForm">
            <h2 class="section-title">Categoría {{ year }}</h2>
            <div class="field"><label for="ct">Título</label><input id="ct" name="ctitle" [(ngModel)]="cat.title" required></div>
            <div class="field"><label for="cd">Descripción</label><input id="cd" name="cdesc" [(ngModel)]="cat.description"></div>
            <div class="field"><label for="cn">Nominados (uno por línea)</label><textarea id="cn" name="cnom" [(ngModel)]="cat.nominees" required></textarea></div>
            <div class="field"><label for="co">Orden</label><input id="co" type="number" name="corder" [(ngModel)]="cat.order"></div>
            <button class="btn btn--yellow" type="submit" [disabled]="cf.invalid">Guardar categoría</button>
          </form>
        </div>
        <p class="center"><button class="btn" type="button" (click)="backend.signOut()">Cerrar sesión</button></p>
      }
    </div>
  `,
  styles: `.center { text-align: center; }`,
})
export class AdminPage {
  protected readonly backend = inject(BACKEND);
  private readonly router = inject(Router);
  protected readonly year = environment.votingYear;
  protected readonly msg = signal('');
  protected post = { title: '', body: '', tags: '' };
  protected cat = { title: '', description: '', nominees: '', order: 10 };

  protected async savePost() {
    const id = await this.backend.createPost({
      title: this.post.title.trim(), body: this.post.body.trim(),
      tags: this.post.tags.split(',').map(t => t.trim()).filter(Boolean),
    });
    this.router.navigate(['/posts', id]);
  }
  protected async saveCat() {
    await this.backend.saveCategory({
      year: this.year, title: this.cat.title.trim(), description: this.cat.description.trim(), open: true, order: Number(this.cat.order) || 10,
      nominees: this.cat.nominees.split('\n').map(n => n.trim()).filter(Boolean),
    });
    this.msg.set(`Categoría "${this.cat.title}" guardada.`);
    this.cat = { title: '', description: '', nominees: '', order: 10 };
  }
}
