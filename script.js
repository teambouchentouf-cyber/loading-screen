   // Liste des phrases
   const facts = [
       "Tu peux appuyer sur F1 pour ouvrir le menu d’aide !",
       "Les voitures ont leur propre inventaire !",
       "Tu peux utiliser /report pour contacter le staff.",
       "Optimise tes paramètres pour gagner en FPS !"
   ];

   let factIndex = 0;

   // Initialise immédiatement avec la première phrase
   document.getElementById("fact").textContent = facts[factIndex];

   // Change le texte toutes les 5 secondes
   setInterval(() => {
       factIndex = (factIndex + 1) % facts.length;
       document.getElementById("fact").textContent = facts[factIndex];
   }, 5000);
   
