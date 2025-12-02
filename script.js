// Images de fond (mets tes propres images dans /images/)
const backgrounds = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg"
];

let bgIndex = 0;
function changeBackground() {
    document.getElementById("bg").style.backgroundImage = `url(${backgrounds[bgIndex]})`;
    bgIndex = (bgIndex + 1) % backgrounds.length;
}
setInterval(changeBackground, 4000);
changeBackground();

// Barre de progression + pourcentage
let progress = 0;
function updateProgress() {
    if (progress < 100) {
        progress++;
        document.getElementById("progress").style.width = progress + "%";
        document.getElementById("percent").textContent = progress + "%";
        setTimeout(updateProgress, 50);
    }
}
updateProgress();

// Fun facts
const funfacts = [
    "Tu peux faire /drop pour lâcher ton arme !",
    "Le BouchenRP existe grâce à des joueurs comme toi.",
    "Le serveur utilise un FastDL pour charger plus vite !",
    "Tu peux acheter une maison si un agent immobilier est disponible.",
    "Le staff est là pour t'aider, n'hésite pas à poser des questions !"
];

function changeFunfact() {
    const fact = funfacts[Math.floor(Math.random() * funfacts.length)];
    document.getElementById("funfact").textContent = fact;
}
setInterval(changeFunfact, 6000);
changeFunfact();
