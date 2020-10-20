/*
 * @param {object} obj1
 * @param {object} obj2
 * @return {object}

  Given object of key: string values and an object of key: function values, call the functions in 2nd object, using the values in 1st object as function params

  Given object of key-string values and an object of key - function values, call the functions in 2nd object (if possible) using the values in 1st object as function params. Return new object.

  solution ({
    "name": "drake",
    "age": "33",
    "power": 'finessing',
    "color": "platinum"
  }, {
    "name": (e) => { return e + "kendrick" },
    "power": (e) => { return "motivating" + e }
  });

  // will return : 
    {
        "name": "drakekendrick",
        "age": "33",
        "power": "motivatingfinessing",
        "color": "platinum"
    }
 **/

const solution = (obj1, obj2) => {
  return Object.keys(obj1).reduce((res, key) => {
    if (obj2.hasOwnProperty(key)) {
      res[key] = obj2[key](key)
    }
    return res
  }, obj1)
}

console.log(solution ({
  "name": "drake",
  "age": "33",
  "power": 'finessing',
  "color": "platinum"
}, {
  "name": (e) => { return e + "kendrick" },
  "power": (e) => { return "motivating" + e }
}));

/*
  {
      "name": "drakekendrick",
      "age": "33",
      "power": "motivatingfinessing",
      "color": "platinum"
  }
*/