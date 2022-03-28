/*
Você deve ter pelo menos duas instruções else

Você deve ter pelo menos duas instruções if

Você deve ter chaves de abertura e fechamento para cada bloco de código de if else.

testElseIf(0) deve retornar a string Smaller than 5

testElseIf(5) deve retornar a string Between 5 and 10

testElseIf(7) deve retornar a string Between 5 and 10

testElseIf(10) deve retornar a string Between 5 and 10

testElseIf(12) deve retornar a string Greater than 10 */

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else{
    return "Between 5 and 10";
  }

  
}

console.log(testElseIf(0));
console.log(testElseIf(5));
console.log(testElseIf(7));
console.log(testElseIf(10));
console.log(testElseIf(12));
