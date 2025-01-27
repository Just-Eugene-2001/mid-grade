function isPalindrome(str) {
  const len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log("довод: ", isPalindrome("довод"));
console.log("рыба: ", isPalindrome("рыба"));
console.log("kekkek: ", isPalindrome("kekkek"));

// Временная сложность: O(n)
// Цикл выполняется n/2, что упрощается до n.

// Пространственная сложность: O(1)
// Количество памяти не зависит от размера входных данных.
