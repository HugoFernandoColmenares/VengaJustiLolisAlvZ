import { AlreadyVotedError } from './backend';
import { LocalBackend } from './local-backend';

describe('LocalBackend', () => {
  beforeEach(() => localStorage.clear());

  it('permite un solo voto por usuario, categoría y año', async () => {
    const b = new LocalBackend();
    await b.signIn();
    const [cat] = await b.listCategories(2026);
    await b.castVote(2026, cat.id, cat.nominees[0]);
    await expect(b.castVote(2026, cat.id, cat.nominees[1])).rejects.toBeInstanceOf(AlreadyVotedError);
    const tally = await b.tally(2026, cat.id);
    expect(tally[0]).toEqual({ name: cat.nominees[0], votes: 1 });
  });

  it('exige sesión para votar', async () => {
    const b = new LocalBackend();
    const [cat] = await b.listCategories(2026);
    await expect(b.castVote(2026, cat.id, 'x')).rejects.toThrow();
  });
});
