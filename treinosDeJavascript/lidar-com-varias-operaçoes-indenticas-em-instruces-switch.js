/*Lidar com várias opções idênticas em instruções switch

Se a instrução break for omitida de uma instrução case de um switch, as instruções case seguintes serão executadas até que seja encontrado um break. Se você tem várias entradas com a mesma saída, você pode representá-las em uma instrução switch da seguinte forma:

let result = "";
switch(val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}

Todos os casos para 1, 2 e 3 vão produzir o mesmo resultado.

Escreva uma instrução para definir answer para os seguintes intervalos:
1-3 - Low
4-6 - Mid
7-9 - High

Observação: você precisará ter uma instrução case para cada número no intervalo.

sequentialSizes(1) deve retornar a string Low

sequentialSizes(2) deve retornar a string Low

sequentialSizes(3) deve retornar a string Low

sequentialSizes(4) deve retornar a string Mid

sequentialSizes(5) deve retornar a string Mid

sequentialSizes(6) deve retornar a string Mid

sequentialSizes(7) deve retornar a string High

sequentialSizes(8) deve retornar a string High

sequentialSizes(9) deve retornar a string High

Você deve ter nove instruções case
*/
function sequentialSizes(val) {
  let answer = "";
  // Altere apenas o código abaixo desta linha
  switch(val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8: 
    case 9:
      answer = "High"; 
  }


  // Altere apenas o código acima desta linha
  return answer;
}

console.log(sequentialSizes(1));
console.log(sequentialSizes(2));
console.log(sequentialSizes(3));
console.log(sequentialSizes(4));
console.log(sequentialSizes(5));
console.log(sequentialSizes(6));
console.log(sequentialSizes(7));
console.log(sequentialSizes(8));
console.log(sequentialSizes(9));