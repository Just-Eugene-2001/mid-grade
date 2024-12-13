function getNext() {
  // Редактировать можно только внутреннюю часть этой функции
  let state = 0;

  return () => {
    return state++;
  }
}

const next = getNext();

console.log(next()); // 0
console.log(next()); // 1
console.log(next()); // 2
console.log(next()); // 3
