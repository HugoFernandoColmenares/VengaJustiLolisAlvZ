/**
 * Configuración pública de Firebase (no es secreta, pero NO la subas si no quieres).
 * Si `apiKey` está vacío, la app usa el backend local (localStorage) como modo demo.
 * Ver docs/files/guia-arquitectura.md → "Crear el proyecto Firebase".
 */
export const environment = {
  firebase: {
    apiKey: '',
    authDomain: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: '',
  },
  /** Año de la votación abierta actualmente. */
  votingYear: 2026,
};
