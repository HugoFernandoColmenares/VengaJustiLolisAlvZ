/** Lore oficial migrado de https://feithnoir.github.io/vengajustilolisalvz/ (sin inventar contenido). */
export interface Character { id: string; name: string; color: string; bio: string }
export interface Faction { name: string; color: string; text: string }

export const TAGLINE = '¡Caos dimensional, realismo mágico y humor absurdo te esperan en la Grieta!';
export const GAME_STATUS = 'Desarrollado con RPG Maker | ¡Próximamente! (Cuando dejemos de procrastinar)';

/** Sinopsis original (párrafos con HTML mínimo de énfasis). */
export const SYNOPSIS: string[] = [
  'La <strong>Grieta</strong> es un espacio entre las dimensiones, usualmente visto como un vertedero cósmico. Seres de lo más variopinto acaban aquí... y ¡PUM! Se convierten en \'lolis\' (cosas de la Grieta, no preguntes).',
  'Todo esto lo \'vigila\' el <strong>Big Onii-chan</strong>, una entidad de poder inimaginable que está más rota que la pantalla de mi celular y necesita a las <strong>VengaJustiLolis</strong> para arreglarse (y el multiverso, si eso).',
  'La historia arranca con <strong>Ralexa</strong>, que aterriza en la Grieta buscando a su gemela perdida, Axelar. Justo entonces, aparece <strong>Noira</strong> en moto, se estampa (porque es indestructible y la física le importa un carajo... y porque no sabe conducir (?)) y decide que ayudar a Ralexa es el mejor plan del día.',
  '¡Prepárate para una odisea de humor absurdo, personajes excéntricos y una trama que probablemente escribimos en un chat de WhatsApp a las 3 AM!',
];

/** Intro del año 2025 (venía en el sitio de premios). */
export const INTRO_2025: string[] = [
  'El 2025 fue un año de pura anarquía dimensional. Para los que no sepan, <strong>La Grieta</strong> es ese vertedero cósmico donde seres de todas partes terminan... y sí, por alguna razón extraña, todos nos convertimos en <em>"lolis"</em>. Cosas de la Grieta, no pregunten.',
  'Todo empezó en un chat de WhatsApp a las 3 AM (como las mejores y peores ideas). Entre "procrastinación creativa" y un humor absurdamente roto, nació este grupo vigilado por el <strong>Big Onii-chan</strong>, una entidad que está más estropeada que la batería de un celular viejo.',
  'Desde <strong>Ralexa</strong> buscando a su hermana, hasta <strong>Noira</strong> estampándose en moto por puro deporte, el 2025 nos dejó momentos inolvidables que hoy celebramos en estos premios.',
];
export const INTRO_QUOTE = '¡Prepárate para una odisea de personajes excéntricos, tramas escritas en delirios de sueño y una cantidad insalubre de memes!';

export const GAMEPLAY = {
  title: 'Mezcla explosiva de géneros',
  paragraphs: [
    'Imagina los <strong>Zeldas clásicos de SNES/GBA</strong>, con esa vista cenital y exploración... ¡Ahora mézclalo con una <strong>Novela Visual</strong> llena de diálogos chispeantes y decisiones cuestionables!',
    'El foco está en la <strong>narrativa y el humor</strong>, pero no te libras de:',
  ],
  bullets: [
    'Combates ARPG sencillitos pero resultones.',
    'Puzzles que te harán decir "¿En qué estaba pensando el desarrollador?".',
    'Explorar un mundo que desafía la lógica (y las leyes de la física).',
    'Intentar entender qué demonios está pasando.',
  ],
};

export const CHARACTERS: Character[] = [
  { id: 'ralexa', name: 'Ralexa', color: '#00BFFF', bio: 'Prota cínica y sarcástica con un lobo en la sombra. Busca a su hermana y probablemente una siesta.' },
  { id: 'noira', name: 'Noira', color: '#FF4D4D', bio: '¡Energía pura! Casi indestructible, conduce fatal y actúa antes de pensar (si es que piensa).' },
  { id: 'rue', name: 'Rue', color: '#FFCC00', bio: 'Cofundador/a andrógino/a de las VengaJustiLolis. Su principal objetivo es ignorar sus objetivos.' },
  { id: 'chelu', name: 'Chelu', color: '#CC65FE', bio: 'Arquitecta del vacío, odia a los hombres lagarto (y las travesuras). Líder sin poder de Justicia y Orden Moral.' },
  { id: 'migeru-san', name: 'Migeru-san', color: '#22C55E', bio: 'Entusiasta de la electrónica. Probablemente pueda arreglar tu tostadora (o convertirla en un arma).' },
  { id: 'dra-arandanos', name: 'Dra. Arándanos', color: '#EC4899', bio: 'Médica bruja con métodos... peculiares. Líder de Medicina. ¡Funciona! (Normalmente).' },
  { id: 'eddy', name: 'Eddy', color: '#6366F1', bio: 'Enfermera/Mano derecha de la Dra. Tiene una pistola curativa que duele como el infierno.' },
  { id: 'davy', name: 'Davy', color: '#FF9F40', bio: 'Ingeniera civil. Enemiga natural de Chelu (¡Arquitectos vs. Ing. Civiles FTW!).' },
];

export const FACTIONS: Faction[] = [
  { name: 'El Big Onii-chan', color: '#EC4899', text: 'El jefe supremo de la Grieta. Roto, poderoso y probablemente confundido.' },
  { name: 'Administración (VengaJustiLolis)', color: '#FFCC00', text: 'Se supone que regulan cosas. Compuesta por Noira y Rue. La eficiencia no es su fuerte.' },
  { name: 'Seguridad y Orden Público', color: '#CC65FE', text: 'Solo está Chelu. No tiene poder real. Es más bien... decorativo.' },
  { name: 'Medicina', color: '#EC4899', text: 'Dirigida por la Dra. Arándanos y su enfermera Eddy. Curan... a su manera.' },
  { name: 'Fantasmones', color: '#9CA3AF', text: 'Miembros que existen... pero como que no. Están en la lista, pero nadie los ha visto.' },
];

export const LOCATIONS = [
  {
    name: 'Ciudad Nueva McOndo',
    paragraphs: [
      'El epicentro del caos y donde se desarrolla la mayor parte del juego. Es la ciudad más grande (y probablemente la única con cara y ojos) de la Grieta.',
      'Su arquitectura es un <strong>completo despropósito</strong>: se "construye" con trozos de otras dimensiones que caen aquí. Espera ver un trozo de castillo medieval al lado de una señal de neón futurista y una cabaña de madera.',
    ],
    quote: '"Urbanismo emergente", lo llaman algunos. "Un dolor de cabeza", decimos nosotros.',
  },
];
