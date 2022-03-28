/*
testGreaterOrEqual(0) deve retornar a string Less than 10

testGreaterOrEqual(9) deve retornar a string Less than 10

testGreaterOrEqual(10) deve retornar a string 10 or Over

testGreaterOrEqual(11) deve retornar a string 10 or Over

testGreaterOrEqual(19) deve retornar a string 10 or Over

testGreaterOrEqual(100) deve retornar a string 20 or Over

testGreaterOrEqual(21) deve retornar a string 20 or Over

Você deve usar o operador >= pelo menos duas vezes
*/
function testGreaterOrEqual(val) {
  if (val  >= 20) {  // Altere esta linha
    return "20 or Over";
  }

  if (val >= 10) {  // Altere esta linha
    return "10 or Over";
  }

  return "Less than 10";
}

console.log(testGreaterOrEqual(0)); 
console.log(testGreaterOrEqual(9)); 
console.log(testGreaterOrEqual(10)); 
console.log(testGreaterOrEqual(11)); 
console.log(testGreaterOrEqual(19)); 
console.log(testGreaterOrEqual(100)); 
console.log(testGreaterOrEqual(21)); 