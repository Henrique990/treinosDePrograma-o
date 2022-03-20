/*
Use o operador de igualdade estrita na instrução if,
para que a função retorne a string Equal quando val 
for estritamente igual a 7.

testStrict(10) deve retornar a string Not Equal

testStrict(7) deve retornar a string Equal

testStrict("7") deve retornar a string Not Equal

Você deve usar o operador ===
*/

// Configuração
function testStrict(val) {
    if (val === 7) { // Altere esta linha
      return "Equal";
    }
    return "Not Equal";
  }
  
console.log(testStrict(10)); // Not Equal
console.log(testStrict(7)); // Equal
console.log(testStrict("7")); // Not Equal