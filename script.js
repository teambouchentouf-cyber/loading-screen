// ---- BACKGROUNDS: mets ici les fichiers que tu as uploadés ----
const backgrounds = [
  "images/bg1.jpg",
  "images/bg2.jpg",
  "images/bg3.jpg"
];

// change de background toutes les X ms
let bgIndex = 0;
const bgEl = document.getElementById('bg');
function setBg(idx){
  bgEl.style.backgroundImage = `url('${backgrounds[idx]}')`;
}
function nextBg(){
  bgIndex = (bgIndex + 1) % backgrounds.length;
  setBg(bgIndex);
}
setBg(bgIndex);
setInterval(nextBg, 4000); // 4s par image (ajuste si besoin)

// ---- FUNFACTS ----
const funfacts = [
  "Tu peux appuyer sur F1 pour ouvrir le menu d’aide !",
  "Certaines missions donnent plus d’argent selon l'heure.",
  "Les véhicules rares apparaissent plus souvent la nuit.",
  "Tu peux utiliser /report si tu vois un bug.",
  "Évite de courir partout, ça consomme plus d’énergie."
];
function changeFunfact(){
  const f = funfacts[Math.floor(Math.random()*funfacts.length)];
  document.getElementById('funfact').textContent = f;
}
changeFunfact();
setInterval(changeFunfact, 6000);

// ---- PROGRESS SIMULATION ----
// Remplace cette simulation par ton événement réel si tu veux (ex: events venant du serveur)
let progress = 0;
const progressEl = document.getElementById('progress');
const percentEl = document.getElementById('percent');

function stepProgress(){
  if(progress < 100){
    progress += Math.ceil(Math.random()*2); // incrémente par 1-2 pour un effet moins linéaire
    if(progress > 100) progress = 100;
    progressEl.style.width = progress + "%";
    percentEl.textContent = progress + "%";
    setTimeout(stepProgress, 60);
  } else {
    percentEl.textContent = "100%";
  }
}
stepProgress();
