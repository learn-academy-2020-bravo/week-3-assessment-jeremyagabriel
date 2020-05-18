// ASSESSMENT 3: Coding Practical Questions


// --------------------1) Create a function that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// Non-recursive way (first attempt without research)
// Declare a function that takes in the length of how long the output array should be
const fibonacci = (arrLength) => {
  // Set empty array
  let array = []
  // Map through a series of X number of indexes
  Array(arrLength).fill().map((v,num)=> {
    // The first indexes will always equal one, unless you include zero which isn't expected in this output
    if (num === 0 || num === 1) return array.push(1)
    // All other indexes will be sum of the two previous index values into the array
    return array.push(array[num - 2] + array[num - 1])
  })
  // Return array holding all the pushed values
  return array
}

// Recursive way with research and still a lot of confusion lol. Will we go over recurion officially?
const fibonacciR = (num) => {
  // Set base condition
  if (num === 0 || num === 1) return [1]
  else if (num === 2) return [1, 1]
  // Set array as callback to same function with number minus one
  let array = fibonacciR(num - 1)
  array.push(array[num - 2] + array[num - 3])
  return array
}

console.log("Fibonacci Loop:", fibonacci(10))
console.log("Fibonacci Recursive:", fibonacciR(10))



// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 9, 7, 199]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

// Declare a function that takes in an array as an argument
const oddNumsSorted = (arr) => {
  return arr
    // Filter through array and only return values with typeof equal to "number"
    .filter(value => typeof value === "number")
    // Filter new array and return only values with modulo % 2 !==0
    .filter(num => num % 2 !== 0)
    // Use sort method to numerically sort the numbers and return
    .sort((a,b)=>a-b)
}

// Test function with above variables
console.log("Odds sorted:", oddNumsSorted(fullArr1))
console.log("Odds sorted:", oddNumsSorted(fullArr2))

// --------------------3) Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

var middleLetters1 = "hello"
// Expected output: “l”
var middleLetters2 = "rhinoceros"
// Expected output: “oc”

// Declare a function that takes in a string as an argument
const midLetterGen = (str) => {
  let midIndex = str.length / 2
  // Check length of of word, if odd, return substring letter with index equal to half of length
  if (str.length % 2 !== 0) {
    return str.substring(midIndex, midIndex + 1)
    // If even, return substring letters at index of half of length -1 and +1
  } else if (str.length % 2 === 0) {
    return str.substring(midIndex - 1, midIndex + 1)
  } else "error"
}

// Test function with above variables
console.log("Middle letter:", midLetterGen(middleLetters1))
console.log("Middle letter:", midLetterGen(middleLetters2))


// --------------------4) Create a CLASS to get the area of a sphere. Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)

class AreaOfSphere {
  // Class that takes in radius as an argument
  constructor(radius) {
    this.radius = radius
  }
  // Class method that calculates the area using the radius
  area() {
    return 4 * 3.14 * this.radius**2
  }
}

// Declare new instances of the parent class
var sphere1 = new AreaOfSphere(10)
var sphere2 = new AreaOfSphere(3.4)
var sphere3 = new AreaOfSphere(90)

console.log("Area of sphere:", sphere1.area())
console.log("Area of sphere:", sphere2.area())
console.log("Area of sphere:", sphere3.area())

// --------------------5) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []

// Declare a function that takes in an array
const sumArray = (arr) => {
  // Set variable at 0
  let base = 0
  // Map through array
  return arr.map(num => {
    // Add number to base
    base += num
    // Return new base
    return base
  })
}

console.log("Accumulating sum:", sumArray(numbersToAdd1))
console.log("Accumulating sum:", sumArray(numbersToAdd2))
console.log("Accumulating sum:", sumArray(numbersToAdd3))
