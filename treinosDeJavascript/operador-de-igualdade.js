function equalityTest(myVal) {
    if (myVal == 10) {
      return "Equal";
    }
    return "Not Equal";
  }
  console.log(equalityTest(10)); // Equal
  console.log(equalityTest(11)); // Not Equal

//------------------------------------------------------------------------------

//
/* 
Adicione o operador de igualdade à linha indicada para que a função
retorne a string Equal quando val for equivalente a 12.


testEqual(10) deve retornar a string Not Equal

testEqual(12) deve retornar a string Equal

testEqual("12") deve retornar a string Equal

Você deve utilizar o operador ==
*/ 

// Configuração
function testEqual(val) {
    if (val == 12) { // Altere esta linha
      return "Equal";
    }
    return "Not Equal";
  }
  
    console.log(testEqual(10)); // Not Equal
    console.log(testEqual(12)); // Equal
    console.log(testEqual("12")); // Equal