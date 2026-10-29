import { EnvironmentProviders, makeEnvironmentProviders, provideAppInitializer, inject } from '@angular/core';
import { BACKEND, Backend } from './backend';
import { LocalBackend } from './local-backend';
import { environment } from '../../../environments/environment';
import { BackendHolder } from './backend-holder';

/**
 * Si hay apiKey de Firebase, carga el SDK de forma diferida (chunk aparte);
 * si no, usa LocalBackend. Así la app compila y funciona sin credenciales.
 */
export function provideBackend(): EnvironmentProviders {
  return makeEnvironmentProviders([
    BackendHolder,
    { provide: BACKEND, useFactory: () => inject(BackendHolder).backend },
    provideAppInitializer(async () => {
      const holder = inject(BackendHolder);
      if (environment.firebase.apiKey) {
        try {
          const { FirebaseBackend } = await import('./firebase-backend');
          holder.backend = new FirebaseBackend(environment.firebase);
          return;
        } catch (e) { console.error('Firebase no disponible, usando modo local', e); }
      }
      holder.backend = new LocalBackend() as Backend;
    }),
  ]);
}
