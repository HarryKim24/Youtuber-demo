const array = [1, 2, 3, 4, 5];

const forEachArray = array.forEach(function(a, b, c) {
  return a * 2;
})

const mapArray = array.map(function(a, b, c) {
  return a * 2;
})

console.log(`return forEach: ${forEachArray}`);
console.log(`return map: ${mapArray}`);