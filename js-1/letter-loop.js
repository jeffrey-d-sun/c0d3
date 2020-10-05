/*
Write a function called solution that takes in 2 parameters, a string and a function, and returns a function.

When the returned function is called for the first time, the input function will be called with the first character of the string.

When the returned function is called for the second time, the input function will be called with the second character of the string.

After the input function is called with the last character of the string, calling the returned function will repeat #1, then #2, etc.

fun = solution('hel2', (e) => {
  console.log(e)
})
fun() // prints-> 'h'
fun() // prints-> 'e'
fun() // prints-> 'l'
fun() // prints-> '2'
fun() // prints-> 'h'
fun() // prints-> 'e'
*/

const solution = (str, fn) => {
  let counter = 0
  return () => {
    if (counter === str.length) {
      counter = 0
    }
    fn(str[counter])
    counter += 1
  }
}

const cb = solution('hel2', (e) => {
  console.log(e)
})
cb() // prints-> 'h'
cb() // prints-> 'e'
cb() // prints-> 'l'
cb() // prints-> '2'
cb() // prints-> 'h'
cb() // prints-> 'e'