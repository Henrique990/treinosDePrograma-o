function testLessOrEqual(val) {
  if (val <= 12) {  // Altere esta linha
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // Altere esta linha
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

console.log(testLessOrEqual(0));
console.log(testLessOrEqual(11));
console.log(testLessOrEqual(12));
console.log(testLessOrEqual(23));
console.log(testLessOrEqual(24));
console.log(testLessOrEqual(25));
console.log(testLessOrEqual(55));