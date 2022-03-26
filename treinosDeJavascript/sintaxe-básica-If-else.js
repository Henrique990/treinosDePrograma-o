const a = 2;
const b = 3;


function teste(a) {
    if (a > b) {
        return "verdadeiro";
    } else {
        return "falso";
    }
}

console.log(`Exercicio 1 | Resultado: ${teste(a)}`); // Resultado: falso


// Exercício 2
// Language: javascript

var comprasFeitas = false;

if (comprasFeitas === true) {
    var granaFilhote = 10;
} else {
    var granaFilhote = 0;
}

console.log(`Exercicio 2 | Resultado: ${comprasFeitas}`); // resultado: false

// Exercício 3
// Language: javascript

var cheese = "cheddar";

if (cheese) {
    console.log("Exercicio 3 | Resultado: yay! Cheese available for making cheese on toast."); 
} else {
    console.log("Exercicio 3 | Resultado: Boo! No cheese for making cheese on toast.");
}

