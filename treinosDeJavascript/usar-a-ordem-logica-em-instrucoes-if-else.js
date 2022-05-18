/*
orderMyLogic(4) deve retornar a string Less than 5

orderMyLogic(6) deve retornar a string Less than 10

orderMyLogic(11) deve retornar a string Greater than or equal to 10 */
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

console.log(orderMyLogic(4));
console.log(orderMyLogic(6));
console.log(orderMyLogic(11));