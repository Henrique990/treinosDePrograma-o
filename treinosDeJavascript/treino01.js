a = "1.1" + "2.2"; // concatenação
b = (+1.1) + (+2.2); // soma
console.log(a); // 1.12.2
console.log(b); // 3.3
// Nota: Os parenteses são opcionais. 
// Exemplo:
a = "1.1" + 2.2; // concatenação
b = +1.1 + 2.2; // soma
console.log(a); // 1.12.2
console.log(b); // 3.3

//------------------------------------------------------------------------------

// usando parseInt()
// parseInt() converte um valor para inteiro.
console.log(`usando parseInt() ${parseInt(a)}`); // 1
console.log(`usando parseInt() ${parseInt(b)}`); // 3

//------------------------------------------------------------------------------

// usando parseFloat()
// parseFloat() converte um valor para float.
a = 1.111 + 2.222;
b = 111.111 + 222.222;
console.log(`usando parseFloat() ${parseFloat(a)}`); // usando parseFloat() 3.333
console.log(`usando parseFloat() ${parseFloat(b)}`); // usando parseFloat() 333.333