function mapWithReduce(arr, callback) {
  // Решение ...
}

function doubleIt(element) {
  return element * 2;
}

const elements = [322, 1337, "foo", -21, "bar"];

console.log(elements.map((el) => doubleIt(el))); // для проверки
console.log(mapWithReduce(elements, mapWithReduce));
