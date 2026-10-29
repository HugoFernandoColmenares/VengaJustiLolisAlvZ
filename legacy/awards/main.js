const pollResults = {
    categories: [
        {
            title: "Miembro del Año",
            winner: "Feith Noir, Kevin & Ralex",
            description: "¡Un triple empate!",
            tie: true,
            results: [
                { name: "Feith Noir", votes: 2 },
                { name: "Kevin", votes: 2 },
                { name: "Ralex", votes: 2 },
                { name: "Migueru-san", votes: 1 },
                { name: "Yohane", votes: 1 },
                { name: "David Thompson", votes: 1 },
                { name: "Just KJ", votes: 1 },
            ]
        },
        {
            title: "Momento Destacado",
            winner: "¡Silksong es real!",
            description: "Con 5 votos",
            results: [
                { name: "¡Silksong es real!", votes: 5 },
                { name: "Chelu se ve HxH", votes: 3 },
                { name: "La IA de los cojones aumenta el precio de la RAM", votes: 2 }
            ]
        },
        {
            title: "Juego del Año",
            winner: "Uma Musume",
            description: "Con 6 votos",
            results: [
                { name: "Uma Musume", votes: 6 },
                { name: "Warframe", votes: 2 },
                { name: "Silksong", votes: 1 },
                { name: "Genshin Impact", votes: 1 }
            ]
        },
        {
            title: "Waifu del Año",
            winner: "Frieren",
            description: "Con 5 votos",
            results: [
                { name: "Frieren", votes: 5 },
                { name: "Yoruichi Shihouin", votes: 2 },
                { name: "Golshi", votes: 2 },
                { name: "Furina", votes: 1 }
            ]
        },
        {
            title: "Husbando del Año",
            winner: "Golshi",
            description: "Con 6 votos",
            results: [
                { name: "Golshi", votes: 6 },
                { name: "El esperanzas (del Jaime pistolas)", votes: 3 },
                { name: "Libra (Elden Ring)", votes: 1 }
            ]
        },
        {
            title: "Admin del Año",
            winner: "Feith Noir",
            description: "Con una victoria aplastante de 7 votos",
            results: [
                { name: "Feith Noir", votes: 7 },
                { name: "Ralex", votes: 2 },
                { name: "Rue", votes: 1 }
            ]
        }
    ],
    opinions: [
        {
            title: "¿Qué opinas del grupo?",
            comments: [
                "Falta perversión con waifus en 3D",
                "Too kawaii to live, too Sugoi to die (?)",
                "GOATED",
                "Pésimo porque ralex sigue aqui",
                "No sé, está shido, apenas pude entrar",
                "Ah, Ehe, Bleh...",
                "No podemos, sino caemos todos",
                "Pinches calenturientos, como los quiero",
                "Es god, no me han echado por fantasma xd",
                "csm no c xd"
            ]
        },
        {
            title: "¿Qué esperas del próximo año?",
            comments: [
                "Más perversión",
                "Que vivamos más aventuras, y que estalle la burbuja (???).",
                "Ya va siendo hora de sacar servercito de discord",
                "Que Ralex acabe preso",
                "Mas memes y charlas estúpidas en un tono serio",
                "Monas chinas",
                "El Steel Ball Run con Umas",
                "Seguir vivo (opcional)",
                "Mas waifus :v"
            ]
        }
    ]
};

const categoryFlavorText = {
  "Miembro del Año": "En los anales del chat, solo los más legendarios quedan grabados. Uno de ellos destacó sobre el resto... o varios.",
  "Momento Destacado": "El 2025 fue un año de sucesos inesperados. Un evento en particular se robó el show y nuestros corazones.",
  "Juego del Año": "Incontables horas invertidas, pero solo un título puede reinar como el Juego del Año del grupo.",
  "Waifu del Año": "La guerra por el afecto virtual fue intensa. Aquí está la reina indiscutible elegida por el pueblo.",
  "Husbando del Año": "No solo las waifus compiten. Este honor es para aquel que demostró ser el material de ensueño definitivo.",
  "Admin del Año": "Con gran poder viene una gran responsabilidad... y muchos memes. Un admin manejó el caos con maestría.",
};

const winnerImageMap = {
    "Feith Noir, Kevin & Ralex": "https://pbs.twimg.com/media/D9lnTftXoAIegFG.jpg",
    "¡Silksong es real!": "https://static0.thegamerimages.com/wordpress/wp-content/uploads/wm/2025/09/silksong-bloodborne-old-hunters-art-of-lady-maria-but-with-hornet-s-head-and-needle-1.jpg?w=1600&h=900&fit=crop",
    "Uma Musume": "https://wallpapercave.com/wp/wp15723743.jpg",
    "Frieren": "https://images6.alphacoders.com/134/thumb-1920-1342229.png",
    "Golshi": "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2025/07/umamusume-gold-ship-header.jpg",
    "Feith Noir": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1edf7e04-7ebf-4282-9998-6d804aec1a97/dksudw7-7b3a3280-e098-4f96-bac2-92021d25217b.png/v1/fill/w_1032,h_774,q_70,strp/woodheart_cafe___luna_blanc_artwork_by_feithnoir_dksudw7-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTYwIiwicGF0aCI6Ii9mLzFlZGY3ZTA0LTdlYmYtNDI4Mi05OTk4LTZkODA0YWVjMWE5Ny9ka3N1ZHc3LTdiM2EzMjgwLWUwOTgtNGY5Ni1iYWMyLTkyMDIxZDI1MjE3Yi5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.IZOWFENNnP8E6TVYQqT-7WQDyPOfCeKDaqX1t8x4KY4",
};

const themeColors = ["#FFCC00", "#00BFFF", "#EC4899", "#22C55E", "#CC65FE", "#FF9F40", "#4BC0C0"];

function slugify(text) {
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
}

/**
 * Creates a category section with a header image, flavor text, and a chart.
 */
function createCategorySection(category, index) {
    const section = document.createElement('section');
    section.className = 'category-section';
    section.id = slugify(category.title);
    
    // Random slight rotation for comic effect
    const rotate = (Math.random() - 0.5) * 2;
    section.style.transform = `rotate(${rotate}deg)`;

    const flavorText = categoryFlavorText[category.title] || "Resultados de una intensa votación.";
    const imageUrl = winnerImageMap[category.winner] || "https://via.placeholder.com/1200x400/FFCC00/000000?text=VJL+Awards";

    section.innerHTML = `
        <h2 class="category-hero-title" style="background-image: linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 100%), url('${imageUrl}')">
            ${category.title}
        </h2>
        <div class="category-content-body">
            <p class="flavor-text">${flavorText}</p>
            <div class="winner-info">
                <span class="winner-label">🏆 Ganador Indiscutible</span>
                <span class="winner-name">${category.winner}</span>
                <p style="margin:0; opacity: 0.8">${category.description}</p>
            </div>
            <div class="chart-container-wrapper">
                <canvas id="chart-${index}"></canvas>
            </div>
        </div>
    `;

    return section;
}

/**
 * Renders the bar chart for a category.
 */
function renderChart(canvasId, results) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: results.map(r => r.name),
            datasets: [{
                label: 'Votos',
                data: results.map(r => r.votes),
                backgroundColor: themeColors,
                borderColor: '#000',
                borderWidth: 2,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    enabled: true,
                    backgroundColor: '#000',
                    titleFont: { family: "'Bangers'", size: 18 },
                    bodyFont: { family: "'VT323'", size: 16 }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { stepSize: 1, font: { family: "'VT323'", size: 14 } },
                    grid: { color: 'rgba(0,0,0,0.05)' }
                },
                x: {
                    ticks: { font: { family: "'VT323'", size: 12, weight: 'bold' } },
                    grid: { display: false }
                }
            }
        }
    });
}

/**
 * Renders the opinions section with comic style dialogue bubbles.
 */
function renderOpinionsSection() {
    const container = document.createElement('div');
    container.className = 'opinions-section';
    container.id = 'la-voz-del-pueblo';
    
    container.innerHTML = `<h2 class="opinions-title">🗣️ La Voz del Pueblo</h2>`;
    
    const grid = document.createElement('div');
    grid.className = 'opinions-grid';

    pollResults.opinions.forEach(opinion => {
        const card = document.createElement('div');
        card.className = 'opinion-category-container';
        card.innerHTML = `<h3 class="opinion-card-title">${opinion.title}</h3>`;
        
        const list = document.createElement('div');
        list.className = 'opinion-comments-list';

        opinion.comments.forEach((comment, i) => {
            const item = document.createElement('div');
            item.className = 'comic-dialogue-item';
            if (i % 2 !== 0) item.classList.add('reverse');

            const color = themeColors[Math.floor(Math.random() * themeColors.length)];
            
            item.innerHTML = `
                <div class="comic-avatar" style="background-color: ${color}">?</div>
                <div class="comic-bubble" style="color: ${color}">${comment}</div>
            `;
            list.appendChild(item);
        });
        
        card.appendChild(list);
        grid.appendChild(card);
    });

    container.appendChild(grid);
    return container;
}

/**
 * Creates the Intro section with lore and history.
 */
function createIntroSection() {
    const section = document.createElement('section');
    section.className = 'intro-section';
    section.innerHTML = `
        <div class="intro-card">
            <h2 class="intro-title">🌪️ El Caos Detrás de la Grieta (2025)</h2>
            <div class="intro-content">
                <p>El 2025 fue un año de pura anarquía dimensional. Para los que no sepan, <strong>La Grieta</strong> es ese vertedero cósmico donde seres de todas partes terminan... y sí, por alguna razón extraña, todos nos convertimos en <em>"lolis"</em>. Cosas de la Grieta, no pregunten.</p>
                
                <p>Todo empezó en un chat de WhatsApp a las 3 AM (como las mejores y peores ideas). Entre "procrastinación creativa" y un humor absurdamente roto, nació este grupo vigilado por el <strong>Big Onii-chan</strong>, una entidad que está más estropeada que la batería de un móvil viejo.</p>

                <div class="intro-highlight">
                    <p>"¡Prepárate para una odisea de personajes excéntricos, tramas escritas en delirios de sueño y una cantidad insalubre de memes!"</p>
                </div>

                <p>Desde <strong>Ralexa</strong> buscando a su hermana, hasta <strong>Noira</strong> estampándose en moto por puro deporte, el 2025 nos dejó momentos inolvidables que hoy celebramos en estos premios.</p>
            </div>
        </div>
    `;
    return section;
}

function renderApp() {
    const main = document.querySelector('main');
    if (!main) return;

    main.innerHTML = `<h1 class="results-main-title" id="resultados">¡Premios VJL 2025!</h1>`;

    // Render Intro
    main.appendChild(createIntroSection());

    // Render Categories
    pollResults.categories.forEach((cat, i) => {
        main.appendChild(createCategorySection(cat, i));
        renderChart(`chart-${i}`, cat.results);
    });

    // Render Opinions
    main.appendChild(renderOpinionsSection());
}

document.addEventListener('DOMContentLoaded', () => {
    renderApp();

    // Hamburger Menu Interaction
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('is-open');
            menuToggle.textContent = navMenu.classList.contains('is-open') ? '✕' : '☰';
        });

        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth < 768) {
                    navMenu.classList.remove('is-open');
                    menuToggle.textContent = '☰';
                }
            });
        });
    }
});