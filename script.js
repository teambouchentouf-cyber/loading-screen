// Liste des phrases
const facts = [
    "Tu peux appuyer sur F1 pour ouvrir le menu d’aide !",
    "Les voitures ont leur propre inventaire !",
    "Tu peux utiliser /report pour contacter le staff.",
    "Optimise tes paramètres pour gagner en FPS !"
];

let factIndex = 0;

// Change le texte toutes les 5 secondes
setInterval(() => {
    document.getElementById("fact").textContent = facts[factIndex];
    factIndex = (factIndex + 1) % facts.length;
}, 5000);

// Barre de chargement (fake pour test)
let percent = 0;
let interval = setInterval(() => {
    percent++;
    if (percent > 100) percent = 100;

    document.getElementById("loading-bar").style.width = percent + "%";
    document.getElementById("percent").textContent = percent + "%";

}, 80);
