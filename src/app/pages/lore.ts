import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GAMEPLAY, GAME_STATUS, LOCATIONS, SYNOPSIS, TAGLINE } from '../core/data/lore.data';

@Component({
  selector: 'app-lore',
  imports: [RouterLink],
  template: `
    <div class="container page stack">
      <header>
        <h1 class="page-title">La Grieta</h1>
        <p class="kicker">{{ tagline }}</p>
      </header>

      <section class="card tilt-l narrow" aria-labelledby="sinopsis">
        <h2 id="sinopsis" class="card__head">¿De qué va esto? (Sinopsis)</h2>
        <div class="card__body">@for (p of synopsis; track $index) { <p [innerHTML]="p"></p> }</div>
      </section>

      <section class="card tilt-r narrow" aria-labelledby="gameplay">
        <h2 id="gameplay" class="card__head pink">¿Cómo se juega a esto?</h2>
        <div class="card__body">
          <h3 class="sub">{{ gameplay.title }}</h3>
          @for (p of gameplay.paragraphs; track $index) { <p [innerHTML]="p"></p> }
          <ul class="bullets">@for (b of gameplay.bullets; track $index) { <li>{{ b }}</li> }</ul>
          <p class="notice">🎮 {{ status }}</p>
        </div>
      </section>

      @for (l of locations; track l.name) {
        <section class="card tilt-l narrow" aria-labelledby="loc">
          <h2 id="loc" class="card__head green">¿Dónde ocurre el desastre? — {{ l.name }}</h2>
          <div class="card__body">
            @for (p of l.paragraphs; track $index) { <p [innerHTML]="p"></p> }
            <blockquote class="highlight">{{ l.quote }}</blockquote>
          </div>
        </section>
      }

      <p class="center"><a class="btn btn--yellow" routerLink="/personajes">Conoce al elenco estelar →</a></p>
    </div>
  `,
  styles: `
    .narrow { max-width: 90rem; width: 100%; margin: 0 auto; }
    .card__head.pink { background: var(--c-pink); } .card__head.green { background: var(--c-green); }
    .sub { font-size: 2.6rem; color: var(--c-blue-ink); margin-bottom: 1.2rem; }
    .bullets { padding-left: 2.4rem; margin: 0 0 2rem; } .bullets li { margin-bottom: .6rem; }
    .bullets li::marker { content: '★ '; color: var(--c-pink-ink); }
    .center { text-align: center; }
    :host ::ng-deep strong { background: linear-gradient(transparent 60%, rgba(255,204,0,.7) 60%); }
  `,
})
export class LorePage {
  protected readonly tagline = TAGLINE;
  protected readonly status = GAME_STATUS;
  protected readonly synopsis = SYNOPSIS;
  protected readonly gameplay = GAMEPLAY;
  protected readonly locations = LOCATIONS;
}
