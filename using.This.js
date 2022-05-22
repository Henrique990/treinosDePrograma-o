// Quando não estiver no modo estrito o this apontará para o objeto global.
function thisNaoEstrito() {
    console.log(this);
}

// Em modo estrito, o valor de this permanece seja qual for o definido ao entrar no contexto de execução,
// a seguir, this por padrão será indefinido. (undefined)
function thisEstrito() {
    'use strict';
    console.log(this);
}

// Como método de um objeto
const o = {
    prop: 100,
    f: function() {
        return this.prop;
    }
}

// console.log(o.f()); // 100

// Funções Arrow (seta)
// Nas arrow functions ( funções setas ) o this é definido lexicalmente, isto é, seu valor é definido pelo contexto de
// execução onde está inserido. Em um código global, this assume o objeto global:

// CONTEXTO DE CRIAÇÃO: GLOBAL
// const arrowFunctionThis = () => { console.log(this); }


// CONTEXTO DE CRIAÇÃO: OBJETO // ERRADO
// const arrowFunctionThis = {
//     prop: 150,
//     arrow: () => { console.log(this); }
// }


// CONTEXTO DE CRIAÇÃO: OBJETO // CORRETO
const obj1 = {
    exemplo1: "exemplo1",
    mostraThis: function() {
        console.log( (() => this)())
}
}
console.log(obj1.mostraThis());