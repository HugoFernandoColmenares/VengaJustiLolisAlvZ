import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', title: 'VengaJustiLolis Alv Z — Premios, lore y caos de la Grieta', loadComponent: () => import('./pages/home').then(m => m.HomePage) },
  { path: 'premios/2025', title: 'Premios VJL 2025 — Resultados', loadComponent: () => import('./pages/awards-2025').then(m => m.Awards2025Page) },
  { path: 'premios', pathMatch: 'full', redirectTo: 'premios/2025' },
  { path: 'votar', title: 'Votar — Premios VJL', loadComponent: () => import('./pages/vote').then(m => m.VotePage) },
  { path: 'lore', title: 'La Grieta — Lore de VengaJustiLolis', loadComponent: () => import('./pages/lore').then(m => m.LorePage) },
  { path: 'personajes', title: 'Personajes y facciones — VengaJustiLolis', loadComponent: () => import('./pages/characters').then(m => m.CharactersPage) },
  { path: 'posts', title: 'Posts — VengaJustiLolis', loadComponent: () => import('./pages/posts').then(m => m.PostsPage) },
  { path: 'posts/:id', title: 'Post — VengaJustiLolis', loadComponent: () => import('./pages/post-detail').then(m => m.PostDetailPage) },
  { path: 'admin', title: 'Admin — VengaJustiLolis', loadComponent: () => import('./pages/admin').then(m => m.AdminPage) },
  { path: '**', title: 'Te perdiste en la Grieta', loadComponent: () => import('./pages/not-found').then(m => m.NotFoundPage) },
];
