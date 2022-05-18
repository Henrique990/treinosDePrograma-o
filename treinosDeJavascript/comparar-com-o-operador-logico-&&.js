/*
Você deve usar o operador && uma vez

Você deve ter apenas um comando if

testLogicalAnd(0) deve retornar a string No

testLogicalAnd(24) deve retornar a string No

testLogicalAnd(25) deve retornar a string Yes

testLogicalAnd(30) deve retornar a string Yes

testLogicalAnd(50) deve retornar a string Yes

testLogicalAnd(51) deve retornar a string No

testLogicalAnd(75) deve retornar a string No

testLogicalAnd(80) deve retornar a string No
*/

function testLogicalAnd(val) {
  // Altere apenas o código abaixo desta linha

  if (val <= 50 && val >= 25) {
  
      return "Yes";
    
  }

  // Altere apenas o código acima desta linha
  return "No";
}

console.log(testLogicalAnd(0));
console.log(testLogicalAnd(24));
console.log(testLogicalAnd(25));
console.log(testLogicalAnd(30));
console.log(testLogicalAnd(50));
console.log(testLogicalAnd(51));
console.log(testLogicalAnd(75));
console.log(testLogicalAnd(80));