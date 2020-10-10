/*
Write a function called solution that that takes in an array of functions and a number, and calls each function input milliseconds after another

const func = () => {
  console.log('hello')
}
solution([func,func,func], 300) 
// console.log('hello') will be run after 300ms
// console.log('hello') will be run after 300ms
// console.log('hello') will be run after 300ms
*/

const solution = (arr, num) => {
  arr.forEach((fn, index) => {
    setTimeout(fn, time * (index + 1))
  })
}