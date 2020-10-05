/*
Write a function called solution that takes in 2 parameters, a string and a letter,
and returns the number of times the character shows up in the string

result = solution('abc', 'a') // 1
result = solution('bccbccb', 'b') // 3
*/

const letterCount = (str, letter, i=0, count=0) => {
  if (i === str.length) return count;
  if (str[i] === letter) count += 1
  return letterCount(str, letter, i+1, count)
}

console.log(letterCount('abc', 'a')) // 1
console.log(letterCount('bccbccb', 'b')) // 3