const obj = { a: 2, b: 3 };

obj.a = 5;

// console.log(obj);

obj.c = 8;

// console.log(obj); // { a: 5, b: 3, c: 8 }

delete obj.a;
console.log(obj); // { b: 3, c: 8 }

