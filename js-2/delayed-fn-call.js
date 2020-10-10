/*
Write a function called solution that takes in an array of functions and a number, and calls every function input milliseconds later

const func = () => {
  console.log('hello')
}
solution([func,func,func], 300) 
// console.log('hello') will be run 3 times, after 300ms
*/

const solution = (arr, num) => {
  setTimeout(() => {
    arr.forEach(fn => fn())
  }, num)
}

const func = () => {
  console.log('hello')
}
console.log(solution([func,func,func], 300))