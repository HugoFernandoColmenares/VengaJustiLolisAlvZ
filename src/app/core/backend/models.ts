export interface VoteResult { name: string; votes: number }

/** Categoría con resultados cerrados (histórico, p. ej. 2025). */
export interface AwardCategoryResult {
  id: string; title: string; winner: string; description: string; tie?: boolean;
  flavor: string; image: string | null; results: VoteResult[];
}
export interface OpinionBlock { title: string; comments: string[] }

/** Categoría votable de un año (colección `categories`). */
export interface Category {
  id: string; year: number; title: string; description: string; nominees: string[]; open: boolean; order: number;
}
/** Voto: id del documento = `${year}_${categoryId}_${uid}` → 1 voto por usuario/categoría/año. */
export interface Vote { year: number; categoryId: string; uid: string; nominee: string; createdAt: number }

export interface Post {
  id: string; title: string; body: string; authorUid: string; authorName: string; createdAt: number; tags: string[];
}

export interface AppUser { uid: string; displayName: string; email: string | null; isAdmin: boolean }
