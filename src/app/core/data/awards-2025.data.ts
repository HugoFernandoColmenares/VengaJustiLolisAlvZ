import { AwardCategoryResult, OpinionBlock } from '../backend/models';

/** Resultados oficiales de los Premios VJL 2025 (migrados del sitio original). */
export const AWARDS_2025: AwardCategoryResult[] = [
  {
    id: 'miembro-del-ano', title: 'Miembro del Año', winner: 'Feith Noir, Kevin & Ralex', description: '¡Un triple empate!', tie: true,
    flavor: 'En los anales del chat, solo los más legendarios quedan grabados. Uno de ellos destacó sobre el resto... o varios.',
    image: 'https://pbs.twimg.com/media/D9lnTftXoAIegFG.jpg',
    results: [
      { name: 'Feith Noir', votes: 2 }, { name: 'Kevin', votes: 2 }, { name: 'Ralex', votes: 2 }, { name: 'Migueru-san', votes: 1 },
      { name: 'Yohane', votes: 1 }, { name: 'David Thompson', votes: 1 }, { name: 'Just KJ', votes: 1 },
    ],
  },
  {
    id: 'momento-destacado', title: 'Momento Destacado', winner: '¡Silksong es real!', description: 'Con 5 votos',
    flavor: 'El 2025 fue un año de sucesos inesperados. Un evento en particular se robó el show y nuestros corazones.',
    image: 'https://static0.thegamerimages.com/wordpress/wp-content/uploads/wm/2025/09/silksong-bloodborne-old-hunters-art-of-lady-maria-but-with-hornet-s-head-and-needle-1.jpg?w=1600&h=900&fit=crop',
    results: [
      { name: '¡Silksong es real!', votes: 5 }, { name: 'Chelu se ve HxH', votes: 3 },
      { name: 'La IA de los cojones aumenta el precio de la RAM', votes: 2 },
    ],
  },
  {
    id: 'juego-del-ano', title: 'Juego del Año', winner: 'Uma Musume', description: 'Con 6 votos',
    flavor: 'Incontables horas invertidas, pero solo un título puede reinar como el Juego del Año del grupo.',
    image: 'https://wallpapercave.com/wp/wp15723743.jpg',
    results: [{ name: 'Uma Musume', votes: 6 }, { name: 'Warframe', votes: 2 }, { name: 'Silksong', votes: 1 }, { name: 'Genshin Impact', votes: 1 }],
  },
  {
    id: 'waifu-del-ano', title: 'Waifu del Año', winner: 'Frieren', description: 'Con 5 votos',
    flavor: 'La guerra por el afecto virtual fue intensa. Aquí está la reina indiscutible elegida por el pueblo.',
    image: 'https://images6.alphacoders.com/134/thumb-1920-1342229.png',
    results: [{ name: 'Frieren', votes: 5 }, { name: 'Yoruichi Shihouin', votes: 2 }, { name: 'Golshi', votes: 2 }, { name: 'Furina', votes: 1 }],
  },
  {
    id: 'husbando-del-ano', title: 'Husbando del Año', winner: 'Golshi', description: 'Con 6 votos',
    flavor: 'No solo las waifus compiten. Este honor es para aquel que demostró ser el material de ensueño definitivo.',
    image: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2025/07/umamusume-gold-ship-header.jpg',
    results: [{ name: 'Golshi', votes: 6 }, { name: 'El esperanzas (del Jaime pistolas)', votes: 3 }, { name: 'Libra (Elden Ring)', votes: 1 }],
  },
  {
    id: 'admin-del-ano', title: 'Admin del Año', winner: 'Feith Noir', description: 'Con una victoria aplastante de 7 votos',
    flavor: 'Con gran poder viene una gran responsabilidad... y muchos memes. Un admin manejó el caos con maestría.',
    // La URL original (wixmp) tenía un token que caduca; se reemplazó por fondo de color. TODO: subir arte propio a public/img.
    image: null,
    results: [{ name: 'Feith Noir', votes: 7 }, { name: 'Ralex', votes: 2 }, { name: 'Rue', votes: 1 }],
  },
];

export const OPINIONS_2025: OpinionBlock[] = [
  {
    title: '¿Qué opinas del grupo?',
    comments: [
      'Falta perversión con waifus en 3D', 'Too kawaii to live, too Sugoi to die (?)', 'GOATED', 'Pésimo porque ralex sigue aqui',
      'No sé, está shido, apenas pude entrar', 'Ah, Ehe, Bleh...', 'No podemos, sino caemos todos', 'Pinches calenturientos, como los quiero',
      'Es god, no me han echado por fantasma xd', 'csm no c xd',
    ],
  },
  {
    title: '¿Qué esperas del próximo año?',
    comments: [
      'Más perversión', 'Que vivamos más aventuras, y que estalle la burbuja (???).', 'Ya va siendo hora de sacar servercito de discord',
      'Que Ralex acabe preso', 'Mas memes y charlas estúpidas en un tono serio', 'Monas chinas', 'El Steel Ball Run con Umas',
      'Seguir vivo (opcional)', 'Mas waifus :v',
    ],
  },
];
