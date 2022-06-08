// Usar a variavel Var não é uma boa prática
// Porque o escopo de uma variavel é global, ou seja, ela pode ser acessada de fora do escopo
// Por isso, é bom usar o let ou const, que é uma forma de definir o escopo de uma variavel

// Exemplo 1
for (var i = 0; i < 10; i++) {
  console.log(i);
}

console.log(i); // i = 10 / i está visivel fora do escopo do for
// Use o Node.js para verificar o valor de i

