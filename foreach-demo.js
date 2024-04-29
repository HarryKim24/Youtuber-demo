const array = [1, 2, 3, 4, 5];

array.forEach(function(a, b, c) {
  console.log(`a: ${a}, b: ${b}, c: ${c}`);
});

let map = new Map();
map.set(1, "one");
map.set(2, "two");
map.set(3, "three");

map.forEach(function(a, b, c) {
  console.log(`a: ${a}, b: ${b}, c: ${c}`);
})
