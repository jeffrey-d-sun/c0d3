/*
Write a function called solution that takes in 2 parameters, a string and a letter,
and returns true if the character exists in the string, false if the character does not exist in the string.

result = solution('abc', 'a') // true
result = solution('abc', 'd') // false
*/

// solution approaches
// 1. loop and search using for loop
// 2. loop and search using recursion
// 3. use indexOf

const letterFind = (str, letter, i=0) => {
  if (i === str.length) return false;
  if (str[i] === letter) return true;
  return letterFind(str, letter, i+1)
}

console.log(letterFind('abc', 'a')) // true
console.log(letterFind('abc', 'd'))