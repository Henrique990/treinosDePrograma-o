/*
*Jogar golfe de código

No jogo de golfe, cada buraco tem um par, significando o número médio de strokes que se espera que golfista faça a fim de derrubar a bola no buraco para completar a jogada. Dependendo da distância acima ou abaixo de par que seu número de strokes estiver, há diferentes apelidos.

Sua função receberá os argumentos par e strokes. Retorne a string correta de acordo com esta tabela que lista os strokes em ordem de prioridade; superior (mais alta) para o final (mais baixo):


Strokes:	     Retorno:
    1	        "Hole-in-one!"
<= par - 2	  "Eagle"
par - 1	      "Birdie"
par	          "Par"
par + 1	      "Bogey"
par + 2	      "Double Bogey"
>= par + 3	  "Go Home!"

par e strokes sempre será um número e positivo. Nós adicionamos um array com todos os nomes para sua conveniência.


golfScore(4, 1) deve retornar a string Hole-in-one!

golfScore(4, 2) deve retornar a string Eagle

golfScore(5, 2) deve retornar a string Eagle

golfScore(4, 3) deve retornar a string Birdie

golfScore(4, 4) deve retornar a string Par

golfScore(1, 1) deve retornar a string Hole-in-one!

golfScore(5, 5) deve retornar a string Par

golfScore(4, 5) deve retornar a string Bogey

golfScore(4, 6) deve retornar a string Double Bogey

golfScore(4, 7) deve retornar a string Go Home!

golfScore(5, 9) deve retornar a string Go Home!

 */

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Altere apenas o código abaixo desta linha

  // Primeira forma de resolver o exercicio

/*   if ( strokes == 1 ) {
    return names[0];
  } else if ( strokes <= (par - 2) ) {
    return names[1];
  } else if ( strokes === par - 1) {
    return names[2];
  } else if ( strokes === par ) {
    return names[3];
  } else if ( strokes === par + 1 ) {
    return names[4];
  } else if ( strokes === par + 2 ) {
    return names[5];
  } else if ( strokes >= par + 3 ) {
    return names[6];
  }

    return "Change Me";

 */

  // Segunda forma de resolver o exercicio
  
  return strokes === 1
    ? names[0]
    : strokes <= par - 2
    ? names[1]
    : strokes === par - 1
    ? names [2]
    : strokes === par
    ? names[3]
    : strokes === par + 1
    ? names[4]
    : strokes === par + 2
    ? names[5]
    : names[6];


  // Altere apenas o código acima desta linha
}

console.log(golfScore(4, 1));
console.log(golfScore(4, 2));
console.log(golfScore(5, 2));
console.log(golfScore(4, 3));
console.log(golfScore(4, 4));
console.log(golfScore(1, 1));
console.log(golfScore(5, 5));
console.log(golfScore(4, 5));
console.log(golfScore(4, 6));
console.log(golfScore(4, 7));
console.log(golfScore(5, 9));

