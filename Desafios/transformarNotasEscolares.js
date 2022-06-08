/**
 * Crie um algoritmo que transforme as notas do sistema numerico para o sistema de notas em caracteres tipo
 * A, B, C, D, E, F.
 * 
 * Exemplo:
 * * de 90 para cima -> A
 * * entre 80 - 89 -> B
 * * entre 70 - 79 -> C
 * * entre 60 - 69 -> D
 * * menor que 60 -> F
 * =
 */

let score = 50
let scoreA = score >= 90 && score <= 100
let scoreB = score >= 80 && score <= 89
let scoreC = score >= 70 && score <= 79
let scoreD = score >= 60 && score <= 69
let scoreF = score < 60 && score >= 0

if ( scoreA ) (
    console.log()
)
