function testLessThan(val) {
  if (val < 25) {  // Altere esta linha
    return "Under 25";
  }

  if (val < 55) {  // Altere esta linha
    return "Under 55";
  }

  return "55 or Over";
}

console.log(testLessThan(0));
console.log(testLessThan(24));
console.log(testLessThan(25));
console.log(testLessThan(54));
console.log(testLessThan(55));
console.log(testLessThan(99));