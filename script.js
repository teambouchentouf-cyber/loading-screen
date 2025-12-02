// Liste des phrases
const facts = [
    "Installer notre collection steam te feras gagner du temps pour rejoindre le serveur !"
    "Tu peux appuyer sur F4 si tu veux choisir un métier",
    "Sur notre chaîne youtube, il y a des explications sur tout les métiers !",
    "Le manque de respect parental hors scène rp ou abusif sera sanctionné !",
    "Optimiser tes paramètres, te feras gagner en FPS",
    "Le RP est souvent plus fun avec des amis ^^",
    "Lire le règlement t'éviteras des sanctions inutiles",
    "En étant cuisinier, tu peux travailler dans un des nombreux restaurants dans la ville",
    "Le serveur n'existerait pas sans toi, merci de venir",
    "Nous avons un site-web avec tout le nécessaire, n'hésite pas a y jeter un coup d'oeil !",
];

let factIndex = 0;

// Change le texte toutes les 15 secondes
setInterval(() => {
    document.getElementById("fact").textContent = facts[factIndex];
    factIndex = (factIndex + 1) % facts.length;
}, 15000);
