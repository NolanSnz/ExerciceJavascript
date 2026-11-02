// Entrée : récupére une valeur fournie par un utilisateur ou un dispositif
// une seule instruction : prompt

// Affiche une popup avec un message
alert("Message");

// Affiche un popup avc un message et un champ de saisie
prompt("Quel est votre nom?");

// Récupérer la valeur saisie par l'utilisateur
let nom = promp("Quel est votre nom ?");
console.log(nom);

// prompt retourne toujours un string
let nombre1 = prompt("Veuillez entre un nombre ");
console.log(typeof nombre1);

let nombre2 = Number(prompt("Veuillez entre un nombre"));



