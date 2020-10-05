/*
Write a function called solution that takes in 2 parameters, a number and a function.

Solution should execute the input function (which returns a number) after first input parameter milliseconds.

The input function should be run again after waiting the returned number of milliseconds

solution(2000, () => {
  // This function will be run 2000ms after solution is called,
  //   and after that, it will be run after another 3000ms
  console.log('hello')
  return 3000
})
*/

const solution = (num, fn) => {
  let time
  setTimeout(() => {
    time = fn()
    setTimeout(fn, time)
  }, num)
}

const print3000 = () => {
  console.log('hii')
  return 3000
}

// solution(2000, print3000)
// prints 'hii' on 3000ms mark
// prints 'hii' on 5000ms mark