// On doit parfois executer un code différent selon une certaine condition
// Si a > b alors afficher "Bonjour", sinon afficher "au revoir"

let a = 12;
let b = 14;



if (a>b)
    {
    console.log("Bonjour")          // Si a est plus grand que b,
    alert("Bonjour")                // On écrit Bonjour, bloc 1
    }
else                                // Sinon
    console.log("Au revoir");       // On écrit Au revoir, bloc 2

// Important !! Si un bloc contient plus d'une instruction, il faut l'encadrer par {}

// Opérateurs de comparaison
// > plus grand que, < plus petit que, >= plus grand ou égal, <= plus petit ou égal, == ou ===
/*
5 === 5 => vrai
"5" === 5 => faux
