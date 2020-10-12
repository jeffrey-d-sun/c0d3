/*
Write a function called solution that replicates Array.prototype.reduce and call it cReduce.

Callback takes 4 input parameters, accumulator, element, index and original array. documentation

result = [5,8,7].cReduce( (acc, e, i, arr) => {
  console.log(acc, e, i, arr)
  return acc + e + i
}, 'hi')

// console.log will be called 3 times:
//    'hi', 5, 0, original array
//    'hi50', 8, 1, original array
//    'hi5081', 7, 2, original array
// result will be 'hi508172'

It is best practice to pass in 2 arguments into reduce function.
Therefore, for this challenge, you can assume that when your function, cReduce, will always be called with 2 arguments: a function and initial value.
*/

const solution = () => {
  Array.prototype.cReduce = function(cb, acc = this[0], i = acc || 0) {
    if (i === this.length) return acc
    acc = cb(acc, this[i], i, this)
    return this.cReduce(cb, acc, i+1)
  }
}

solution();

const sum = [1, 2, 3].cReduce((acc, cur) => {
  return acc + cur
}, 0)

const str = ['hi, ', 'my name is ', 'jeff'].cReduce((acc, cur) => {
  return acc + cur
}, '')

console.log(sum) // 6
console.log(str) // 'hi, my name is jeff'