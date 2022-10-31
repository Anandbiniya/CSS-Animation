// Higher order functions are functions which take other function as a parameter or return a function as a value. The function passed as a parameter is called callback.



//call back
// A callback is a function which can be passed as parameter to other function. See the example below.
// here we are taking a function and passing function as a parameter into another function



const sum=(n)=>{
    return n**2

    // we are taking function and paramenter giveing as 2so 2**2==4 here 
}

//in the line no 16 we are passing the function as a parameter in twosum function\

const twosum=(sum,n)=>{
    return sum(n)*n

    // once 4 here it is multiplying with 2 so the answer is 8
}
//console.log(twosum(sum,2))

// HOF return function as a value
// example
const higherOrder = n => {
    const doSomething = m => {
      const doWhatEver = t => {
        return 2 * n + 3 * m + t
      }
      return doWhatEver
    }
    return doSomething
  }
  //console.log(higherOrder(2)(3)(10))
  function calculate(num1, num2, callbackFunction) {
    return callbackFunction(num1, num2);
}

function calcProduct(num1, num2) {
    return num1 * num2;
}

function calcSum(num1, num2) {
    return num1 + num2;
}
// alerts 75, the product of 5 and 15
console.log(calculate(5, 15, calcProduct));
// alerts 20, the sum of 5 and 15
console.log(calculate(5, 15, calcSum));


function sayHello() {
    console.log('Hello')
  }
 // setInterval(sayHello, 1000)
 function sayHello() {
    console.log('Hello')
  }
  setTimeout(sayHello, 2000) // it prints hello after it waits for 2 seconds.

//   Instead of writing regular loop, latest version of JavaScript introduced lots of built in methods which can help us to solve complicated problems. All builtin methods take callback function. In this section, we will see forEach, map, filter, reduce, find, every, some, and sort.

// forEach: Iterate an array elements. We use forEach only with arrays. It takes a callback function with elements, index parameter and array itself. The index and the array optional.

// example
let sum1 = 0;
 numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num+1))
console.log(sum1)

// -----------------------------

let sum3 = 0;

numbers.forEach(num => sum3 += num)

console.log(sum3)


// Map
// map: Iterate an array elements and modify the array elements. It takes a callback function with elements, index , array parameter and return a new array.
/*Arrow function and explicit return
const modifiedArray = arr.map((element,index) => element);
*/
//Example
const nms = [1, 2, 3, 4, 5]
const numbersSquare = nms.map((num) => num * num)

console.log(numbersSquare)
