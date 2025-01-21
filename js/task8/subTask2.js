function sortArray(arr) {
  return arr.sort((a, b) => (a > b ? 1 : -1));
}

const elements = "с большой силой приходит большая ответственность".split("");
console.log(sortArray(elements));
