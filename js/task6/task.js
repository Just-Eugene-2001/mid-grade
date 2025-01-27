function mapWithReduce(arr, callback) {
  // Решение ...
  return arr.reduce((acc, current) => {
    acc.push(callback(current));
    return acc;
  }, [])
}

function doubleIt(element) {
  if (typeof(element) === 'string') {
    return element + element;
    // return element.repeat(2); // Это другой вариант, можно еще через for
  } else {
    return element * 2;
  }
}

const elements = [322, 1337, "foo", -21, "bar"];

console.log(elements.map((el) => doubleIt(el))); // для проверки
console.log(mapWithReduce(elements, doubleIt));

// filter
function isString (element) {
  return typeof element === "string"
}

function filterWithReduce(arr, callback) {
  return arr.reduce((acc, current) => {
    if (callback(current)) {
      acc.push(current);
    }
    return acc;
  }, [])
}

console.log(elements.filter((el) => isString(el)));
console.log(filterWithReduce(elements, isString));

// find
function findWithReduce(arr, callback) {
  return arr.reduce((acc, current) => {
    if (acc) {
      return acc;
    }
    if (callback(current)) {
      return current;
    }
  }, null)
}

console.log(elements.find((el) => isString(el)));
console.log(findWithReduce(elements, isString));

// some
function someWithReduce(arr, callback) {
  return arr.reduce((acc, current) => {
    if (callback(current)) {
      return true;
    }
    return acc
  }, false)
}

console.log(elements.some((el) => isString(el)));
console.log(someWithReduce(elements, isString));

// every
function everyWithReduce(arr, callback) {
  return arr.reduce((acc, current) => {
    if (!callback(current)) {
      return false;
    }
    return acc;
  }, true)
}

console.log(elements.every((el) => isString(el)));
console.log(everyWithReduce(elements, isString));
