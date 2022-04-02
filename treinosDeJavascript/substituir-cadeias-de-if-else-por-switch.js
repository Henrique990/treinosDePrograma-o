/*Substituir cadeias de if else por switch

Se você tiver muitas opções para escolher, uma instrução switch pode ser mais fácil de escrever do que muitas instruções if/else if encadeadas. O seguinte:

if (val === 1) {
  answer = "a";
} else if (val === 2) {
  answer = "b";
} else {
  answer = "c";
}

pode ser substituído por:

switch(val) {
  case 1:
    answer = "a";
    break;
  case 2:
    answer = "b";
    break;
  default:
    answer = "c";
}

Altere a cadeia de instruções if/else if por um comando switch.

Você não deve usar nenhuma instrução else em nenhum lugar no editor

Você não deve usar nenhuma instrução if em nenhum lugar no editor

Você deve ter pelo menos instruções break

chainToSwitch("bob") deve ser a string Marley

chainToSwitch(42) deve ser a string The Answer

chainToSwitch(1) deve ser a string There is no #1

chainToSwitch(99) deve ser a string Missed me by this much!

chainToSwitch(7) deve ser a string Ate Nine

chainToSwitch("John") deve ser "" (string vazia)

chainToSwitch(156) deve ser "" (string vazia)*/

function chainToSwitch(val) {
  let answer = "";
  // Altere apenas o código abaixo desta linha
  switch(val) {
  case "bob": 
    answer = "Marley";
    break;
  case 42:
    answer = "The Answer";
    break;
  case 1:
    answer = "There is no #1";
    break;
  case 99:
    answer = "Missed me by this much!";
    break;
  case 7:
    answer = "Ate Nine";
    break;
  default:
    answer = "";
    
  }

  // Altere apenas o código acima desta linha
  return answer;
}

console.log(chainToSwitch("bob"));
console.log(chainToSwitch(42));
console.log(chainToSwitch(1));
console.log(chainToSwitch(99));
console.log(chainToSwitch(7));
console.log(chainToSwitch("John"));
console.log(chainToSwitch(156));