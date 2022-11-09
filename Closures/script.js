function closer(){
    var c=0
    function inner(){
        c++
        // return c
    }
    return inner;

}
const outerfun=closer()
console.log(outerfun)



function x(b){
    
    function y(){
     
        console.log(a)

    }
    var a=1;
    return y;
   
}
var z=x()
console.log(z)
z()

// Advantages of closures
// module pattern,function currying,memoization
let nums = [1, 2, 3]
let numbers = [1, 2, 3]

console.log(nums == numbers)  // false
// Long Literal Strings:
// Long Literal Strings
// A string could be a single character or paragraph or a page. If the string length is too big it does not fit in one line. We can use the backslash character (\) at the end of each line to indicate that the string will continue on the next line. Example:
const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."



console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break
console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a backslash  symbol (\\)') // To write a backslash
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')



let country = 'Finland'
console.log(country.substr(3, 1))
// && ampersand operator example

const check0 = 4 > 3 && 10 > 5         // true && true -> true
const checka = 4 > 3 && 10 < 5         // true && false -> false
const checke = 4 < 3 && 10 < 5         // false && false -> false

// || pipe or operator, example

const check = 4 > 3 || 10 > 5         // true  || true -> true
const check1 = 4 > 3 || 10 < 5         // true  || false -> true
const check3 = 4 < 3 || 10 < 5         // false || false -> false

//! Negation examples

let check2 = 4 > 3                     // true
let check4 = !(4 > 3)                  //  false
let isLightOn = true
let isLightOff = !isLightOn           // false
let isMarried = !false                // true
// Operator precedence determines how operators are parsed concerning each other. Operators with higher precedence become the operands of operators with lower precedence.
console.log(3 + 4 * 5); // 3 + 20
// expected output: 23

console.log(4 * 3 ** 2); // 4 * 9
// expected output: 36

let a;
let b;

console.log(a = b = 6);
// expected output: 5,why because it is assigning a is assigning to b and b assigning to 5



