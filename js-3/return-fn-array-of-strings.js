/*
  Write a function called solution that takes in an array of strings and returns a function.

  The returned function will return an object with only keys that exist in the input array.

  const resp = solution(['apollo', 'bella', 'cinderella'])
  console.log(resp({'apple': 25, 'apollo': 45, 'cindy': 84})) // will console.log this object: {"apollo": 45}

  console.log(resp({orange: 80, 'apollo': 95})) // will console.log this object: {'apollo': 95}

  console.log(resp({iron: 'man', billy: 'joel'})) // will console.log this object: {}

 * @param {array} arr {object} obj
 * @return {object} obj
 */

const solution = (arr) => {
  return (obj) => {
    return arr.reduce((acc, key) => {
      if (obj.hasOwnProperty(key)) {
        acc[key] = obj[key]
      }
      return acc
    }, {})
  }
}

const resp = solution(['apollo', 'bella', 'cinderella'])
console.log(resp({'apple': 25, 'apollo': 45, 'cindy': 84})) // will console.log this object: {"apollo": 45}

console.log(resp({orange: 80, 'apollo': 95})) // will console.log this object: {'apollo': 95}

console.log(resp({iron: 'man', billy: 'joel'})) // will console.log this object: {}