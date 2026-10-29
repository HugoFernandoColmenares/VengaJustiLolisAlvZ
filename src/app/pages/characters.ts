import { Component } from '@angular/core';
import { CHARACTERS, FACTIONS } from '../core/data/lore.data';

@Component({
  selector: 'app-characters',
  template: `
    <div class="container page stack">
      <h1 class="page-title">El elenco estelar <small>(o algo así)</small></h1>
      <ul class="grid grid--4 chars">
        @for (c of characters; track c.id; let i = $index) {
          <li class="card char" [id]="c.id" [class.tilt-l]="i % 2 === 0" [class.tilt-r]="i % 2 === 1">
            <span class="char__avatar" aria-hidden="true" [style.background]="c.color">{{ c.name.charAt(0) }}</span>
            <h2 class="char__name">{{ c.name }}</h2>
            <p>{{ c.bio }}</p>
          </li>
        }
      </ul>

      <section aria-labelledby="facciones">
        <h2 id="facciones" class="section-title center">Grupos organizados <small>(es un decir)</small></h2>
        <ul class="factions">
          @for (f of factions; track f.name) {
            <li class="card faction" [style.border-left-color]="f.color">
              <h3>{{ f.name }}</h3><p>{{ f.text }}</p>
            </li>
          }
        </ul>
      </section>
    </div>
  `,
  styles: `
    small { font-size: .5em; display: block; font-family: var(--f-retro); letter-spacing: 0; }
    .chars, .factions { list-style: none; padding: 0; margin: 0; }
    .char { padding: 2.4rem; text-align: center; transition: transform var(--bounce), box-shadow var(--bounce); }
    .char:hover { transform: translate(-3px,-3px) rotate(0); box-shadow: var(--sh-lg); }
    .char__avatar { width: 9.6rem; height: 9.6rem; margin: 0 auto 1.6rem; display: grid; place-items: center; border-radius: 50%;
      border: var(--bw) solid #000; box-shadow: var(--sh-sm); font-family: var(--f-display); font-size: 4.8rem; color: #fff; text-shadow: 3px 3px 0 #000; }
    .char__name { font-size: 3rem; margin-bottom: .8rem; }
    .char p { margin: 0; }
    .factions { display: flex; flex-direction: column; gap: 2rem; max-width: 90rem; margin: 0 auto; }
    .faction { padding: 1.6rem 2.4rem; border-left-width: 14px; }
    .faction h3 { font-size: 2.6rem; margin-bottom: .4rem; }
    .faction p { margin: 0; }
  `,
})
export class CharactersPage {
  protected readonly characters = CHARACTERS;
  protected readonly factions = FACTIONS;
}
