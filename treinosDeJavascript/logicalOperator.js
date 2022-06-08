// Só vou comer se tiver Pão e Queijo

let Pão = true;
let Queijo = false; // Anotaçoes 2: Caso queira alterar o resultado, basta alterar o valor da variável

let niceBreakfast = Pão && Queijo ? "Vou comer Pão e Queijo" : "Não vou comer Pão e Queijo";

// Queijo = false; // Anotaçoes 1: minha intenção com atribuir false ao queijo foi quebrar o if,
// eu queria que ele não fosse verdadeiro, eu queria que ele fosse falso. Mas não foi possível.
// Mesmo adicionando adicionando false ao queijo na linha 8, ele continua verdadeiro e o if continua sendo executado com a responta não esperada.
// Creio ter entendido como funciona o console.log, mas não sei se é o que eu queria.

console.log(niceBreakfast);

