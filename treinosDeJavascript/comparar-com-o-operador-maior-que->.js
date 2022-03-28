/*
testGreaterThan(0) deve retornar a string 10 or Under

testGreaterThan(10) deve retornar a string 10 or Under

testGreaterThan(11) deve retornar a string Over 10

testGreaterThan(99) deve retornar a string Over 10

testGreaterThan(100) deve retornar a string Over 10

testGreaterThan(101) deve retornar a string Over 100

testGreaterThan(150) deve retornar a string Over 100

Você deve usar o operador > pelo menos duas vezes
*/

function testGreaterThan(val) {
  if (val > 100) {  // Altere esta linha
    return "Over 100";
  }

  if (val > 10) {  // Altere esta linha
    return "Over 10";
  }

  return "10 or Under";
}

console.log(testGreaterThan(0));
console.log(testGreaterThan(10));
console.log(testGreaterThan(11));
console.log(testGreaterThan(99));
console.log(testGreaterThan(100));
console.log(testGreaterThan(101));
console.log(testGreaterThan(150));
