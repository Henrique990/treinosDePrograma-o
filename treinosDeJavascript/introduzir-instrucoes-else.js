/*
Você deve ter apenas uma instrução if no editor

Você deve usar uma instrução else

testElse(4) deve retornar a string 5 or Smaller

testElse(5) deve retornar a string 5 or Smaller

testElse(6) deve retornar a string Bigger than 5

testElse(10) deve retornar a string Bigger than 5

Você não deve alterar o código acima ou abaixo dos comentários especificados. */

function testElse(val) {
  let result = "";
  // Altere apenas o código abaixo desta linha

  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }

  // Altere apenas o código acima desta linha
  return result;
}

console.log(testElse(4));
console.log(testElse(5));
console.log(testElse(6));
console.log(testElse(10));