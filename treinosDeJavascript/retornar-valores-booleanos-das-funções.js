/*Retornar valores booleanos das funções

Você pode se lembrar de Comparação com o operador de igualdade, em que todos os operadores de comparação retornam um valor booleano true ou false.

Às vezes, as pessoas usam uma instrução if/else para fazer uma comparação, dessa forma:

function isEqual(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}

Mas há uma forma melhor de fazer isso. Já que === retorna true ou false, podemos retornar o resultado da comparação:

function isEqual(a, b) {
  return a === b;
}

Corrija a função isLess para remover as instruções if/else.

isLess(10, 15) deve retornar true

isLess(15, 10) deve retornar false

Você não deve usar nenhuma instrução do tipo if ou else
*/

function isLess(a, b) {
  // Altere apenas o código abaixo desta linha
  return a < b;
  // Altere apenas o código acima desta linha
}

console.log(isLess(10, 15));
console.log(isLess(15, 10));