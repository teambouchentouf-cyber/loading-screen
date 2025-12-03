// --- Liste des images du slideshow ---
const backgrounds = [
    "images/bg1.png",
    "images/bg2.png",
    "images/bg3.png"
];

// --- Liste des textes Did You Know ---
const facts = [
    "Installer notre collection steam te feras gagner du temps pour rejoindre le serveur !",
    "Tu peux appuyer sur F4 si tu veux choisir un métier",
    "Sur notre chaîne youtube, il y a des explications sur tout les métiers !",
    "Le manque de respect parental hors scène rp ou abusif sera sanctionné !",
    "Optimiser tes paramètres, te feras gagner en FPS",
    "Le RP est souvent plus fun avec des amis ^^",
    "Lire le règlement t'éviteras des sanctions inutiles",
    "En étant cuisinier, tu peux travailler dans un des nombreux restaurants dans la ville",
    "Le serveur n'existerait pas sans toi, merci de venir",
    "Nous avons un site-web avec tout le nécessaire, n'hésite pas a y jeter un coup d'oeil !"
];

let index = 0;

// Références DOM
const bgEl = document.getElementById("background");
const didEl = document.getElementById("didyouknow");

// --- Fonction de changement synchronisé ---
function step() {

    // ---- 1. Gestion du fond avec fondu ----
    const nextImage = backgrounds[index];
    const preload = new Image();
    preload.src = nextImage;

    preload.onload = () => {
        // fade out
        bgEl.classList.add("fade-out");

        setTimeout(() => {
            bgEl.style.backgroundImage = `url('${nextImage}')`;
            bgEl.classList.remove("fade-out");
        }, 300);
    };

    // ---- 2. Gestion du texte ----
    didEl.textContent = facts[index];

    // passe à l’élément suivant
    index = (index + 1) % Math.max(backgrounds.length, facts.length);
}

// --- Initialisation ---
step();

// --- Change tout toutes les 5 secondes ---
setInterval(step, 5000);

