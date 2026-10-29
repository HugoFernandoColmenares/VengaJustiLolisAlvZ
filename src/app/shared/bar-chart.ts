import { Component, computed, input } from '@angular/core';
import { VoteResult } from '../core/backend/models';

const COLORS = ['#FFCC00', '#00BFFF', '#EC4899', '#22C55E', '#CC65FE', '#FF9F40', '#4BC0C0'];

/** Gráfico de barras accesible en HTML/CSS (sustituye a Chart.js: 0 KB extra y legible por lectores de pantalla). */
@Component({
  selector: 'app-bar-chart',
  template: `
    <ol class="bars" [attr.aria-label]="label()">
      @for (r of rows(); track r.name; let i = $index) {
        <li class="bar">
          <span class="bar__name">{{ r.name }}</span>
          <span class="bar__track" aria-hidden="true">
            <span class="bar__fill" [style.width.%]="r.pct" [style.background]="color(i)"></span>
          </span>
          <span class="bar__votes">{{ r.votes }} {{ r.votes === 1 ? 'voto' : 'votos' }}</span>
        </li>
      } @empty { <li class="bar__empty">Aún no hay votos.</li> }
    </ol>
  `,
  styles: `
    .bars { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 1.2rem; }
    .bar { display: grid; grid-template-columns: 1fr auto; grid-template-areas: 'name votes' 'track track'; gap: .2rem 1rem; align-items: end; }
    .bar__name { grid-area: name; font-weight: 700; line-height: 1.25; }
    .bar__votes { grid-area: votes; font-family: var(--f-retro); font-size: 2rem; white-space: nowrap; }
    .bar__track { grid-area: track; display: block; overflow: hidden; height: 2.4rem; border: var(--bw) solid #000; background: #fff; box-shadow: var(--sh-sm); }
    .bar__fill { display: block; height: 100%; border-right: var(--bw) solid #000; transform-origin: left; animation: grow .7s var(--bounce) both; }
    .bar__fill[style*="width: 0%"] { border-right: 0; }
    @keyframes grow { from { transform: scaleX(0); } }
    .bar__empty { font-family: var(--f-retro); font-size: 2rem; }
  `,
})
export class BarChart {
  readonly results = input.required<VoteResult[]>();
  readonly label = input('Resultados');
  protected readonly rows = computed(() => {
    const max = Math.max(1, ...this.results().map(r => r.votes));
    return this.results().map(r => ({ ...r, pct: Math.round((r.votes / max) * 100) }));
  });
  protected color(i: number) { return COLORS[i % COLORS.length]; }
}
