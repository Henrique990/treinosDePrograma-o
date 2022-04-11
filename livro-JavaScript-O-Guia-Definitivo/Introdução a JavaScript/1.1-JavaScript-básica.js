// Livro O Guia Definitivo de JavaScript:
// Tudo que vem após barras normais fuplas é um comentário em linguagem natural.
// Leia os comentários atentamente: eles explical o código JavaScript.

// variável é um nome simbólico para um valor.	
// As variáveis são declaradas com a palavra-chave var:
var x; //-------------------------- Declara uma variável chamada x.

// Valores podem ser atribuídos ás variáveis com o sinal =
x = 0; //-------------------------- Agora a variável x tem o valor 0.
x //------------------------------- => 0: Uma variável é avaliada com seu valor.

// JavaScript aceita vários tipos de valores
x = 1; //-------------------------- Números.
x = 0.01; //----------------------- Apenos um tipo Number para inteiros e raais.
x = "hello world"; //-------------- Strings de texto entre aspas.
x = 'JavaScript'; //--------------- Apóstrofos também delimitam strings.
x = true; //----------------------- Valores Booleanos.
x = false; //---------------------- O outro valor booleano.
x = null; //----------------------- Null é um valor especial que significa "nenhum valor".
x = undefined; //------------------ undefined é um valor especial que significa "não definido".

// O TIPO DE DADOS MAIS IMPORTANTE DE JAVASCRIPT É O OBJETO.
// UM OBJETO É UMA COLEÇÃO DE PARES NOME/VALOR OU UMA STRING PARA MAPA DE VALORES.
var book = { //--------------------- Objetos são colocados entre chaves.
    topic: "JavaScript", //--------- A propriedade "topic" tem o valor "JavaScript".
    fat: true //-------------------- A propriedade "fat" tem o valor "true".
}; //------------------------------- A chave marva o fim do objeto.

// ACESSE AS PROPRIEDADES DE UM OBJETO COM . OU []:
book.topic //---------------------- => "JavaScript"
book["topic"] //------------------- => "JavaScript"
book.fat //------------------------ => "true"
book["fat"] //--------------------- => "true"
book.author = "Flanagan"; //------- Crie novas propriedades por meio do operador de atribuição.
book.author //--------------------- => "Flanagan"
book.contents = {}; //------------- {} é um objeto vazio sem qualquer propriedade.

// JAVASCRIPT TAMBÉM ACEITA ARRAYS (LISTAS INDEXADAS NUMERICAMENTE) DE VALORES.
