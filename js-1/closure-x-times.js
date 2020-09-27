/*
Write a function called solution that takes in a number and a function and returns a function.

The returned function can only be called by input number of times.

Whenever the returned function is called, it returns what the input function returns.
After the returned function has been called up to the first parameter number of times, calling returned function will always return null.

example 1:
resf = solution(3, () => {
  return "hello"
})
result = resf() // "hello"
result = resf() // "hello"
result = resf() // "hello"
result = resf() // null
...
result = resf() // null

example 2:
resf = solution(1, () => {
  return 100
})
result = resf() // 100
result = resf() // null
...
result = resf() // null
*/

const solution = (num, fn) => {
  let counter = num
  return () => {
    if (counter === 0) return null
    counter--
    return fn()
  }
}

const sayHello = () => 'hii'
const cb = solution(3, sayHello)
console.log(cb()) // hii
console.log(cb()) // hii
console.log(cb()) // hii
console.log(cb()) // null