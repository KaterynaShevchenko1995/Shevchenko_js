function checkWord(word) {
  const regex = /^[^aA]{6,}$/;
  return regex.test(word);
}

// Тести
console.log(checkWord("Wonderful"));// буде true
console.log(checkWord("Joyful"));// буде true

console.log(checkWord("Happiness"));// буде false (є "a")
console.log(checkWord("Time"));// буде false (менше 6 символів)
console.log(checkWord("Task"));// буде false (є "a")
console.log(checkWord("Apple"));// буде false (є "A")
