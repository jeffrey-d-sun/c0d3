/*
Write a function called solution that takes in 2 parameters, a string and a function,
and returns combined result of the function being called with every character in the string.
*/


const letterMap = (str, fn, i=0, res='') => {
  if (i === str.length) return res;
  res += fn(str[i])
  return letterMap(str, fn, i+1, res)
}


/*
const fun1 = (e) => {
  return '9'
}
const result1 = letterMap('hello', fun1) // "99999"
console.log(result1)

const fun2 = (e) => {
  return e + '123'
}
const result2 = letterMap('blah', fun2) // "b123l123a123h123"
console.log(result2)
*/