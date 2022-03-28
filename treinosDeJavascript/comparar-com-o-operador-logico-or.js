/*
Você deve usar o operador || uma vez

Você deve ter apenas uma instrução if

testLogicalOr(0) deve retornar a string Outside

testLogicalOr(9) deve retornar a string Outside

testLogicalOr(10) deve retornar a string Inside

testLogicalOr(15) deve retornar a string Inside

testLogicalOr(19) deve retornar a string Inside

testLogicalOr(20) deve retornar a string Inside

testLogicalOr(21) deve retornar a string Outside

testLogicalOr(25) deve retornar a string Outside
*/

function testLogicalOr(val) {
  // Altere apenas o código abaixo desta linha

  if (val < 10 || val > 20) {
    return "Outside";
  }


  // Altere apenas o código acima desta linha
  return "Inside";
}

console.log(testLogicalOr(0));
console.log(testLogicalOr(9));
console.log(testLogicalOr(10));
console.log(testLogicalOr(15));
console.log(testLogicalOr(19));
console.log(testLogicalOr(20));
console.log(testLogicalOr(21));
console.log(testLogicalOr(25));