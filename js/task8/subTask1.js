function findElement(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

const elements = "i am lord voldemort".split(" ");

console.log(elements, findElement(elements, "lord"));

// Временная сложность: O(n)
// В худшем случае, когда искомый элемент находится в конце массива или отсутствует вовсе, алгоритм пройдет по всем элементам массива.

// Пространственная сложность: O(1)
// Количество памяти не зависит от размера входных данных.
