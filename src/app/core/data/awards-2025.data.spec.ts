import { describe, expect, it } from 'vitest';
import { AWARDS_2025, OPINIONS_2025 } from './awards-2025.data';

describe('datos de premios 2025', () => {
  it('no usa imágenes hotlinkeadas ni URLs firmadas', () => {
    for (const c of AWARDS_2025) {
      expect(c.image === null || !/^https?:/i.test(c.image)).toBe(true);
    }
    expect(JSON.stringify({ AWARDS_2025, OPINIONS_2025 })).not.toMatch(/wixmp|token=|placeholder\.com/i);
  });
  it('cada categoría tiene ganador y resultados', () => {
    for (const c of AWARDS_2025) {
      expect(c.winner.length).toBeGreaterThan(0);
      expect(c.results.length).toBeGreaterThan(0);
    }
  });
});
