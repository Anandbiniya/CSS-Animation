///Nested functio's Scope
//Block scope-variable Declared insidea pair of curly braves cannot be access from outside the block
//functional scope-variables declared inside the function cannoyut be acces from the out side of the function
//Global scope-Globally scoped variable can be acces inside a block or function

//Nested function scope-
// let a = 10;
// function outer() {
//   let b = 20;
//   function inner() {
//     let c = 30;
//     console.log(a, b, c);
//     //when we checking the console .the c will check first in inner function if it is present it will print then check b and it is also not presnt in inner function it will go one level up and check so it will present and print it and as well check a it is not present in  innner and outer function also it will go one more up and check it preszent theres so it will pprint thjere
//     //this is example of lexical scope
//   }
//   inner();
// }
// outer();

///Closures
function outer() {
  let counter = 0;
  function inner() {
    counter++;
    console.log(counter);
  }
  return inner;
  //when we return inner function not only it will return the function it will return the bundle of the function here the bundle scope is counter so it will return the counter with function so like this times function will remeber the value of it's bundle scope
}
const fn = outer();
fn();
//when we invoke the fn()//counter will be one but the value will be gonna remember same

fn();
//the out put here is 2 because the function will remeber the previous one and work accordingly that
//in java script when we return function from another function ,we are effectively returning a combination of the function defination along with the function's scope.This would let the function defination have an association persitent memory which could hold live data between executions.that combination of the function and its cope chain called a closure in js
//the inner function have a access to the outer function variable even the outer function code is finsihed executing

//function currying
//currying is a process in functional programming in which we transform a function with multiple arguments into a sequence of nesting functions that take one argument at a time.
function sum(a, b, c) {
  return a + b + c;
}
console.log(sum(2, 3, 5));
//sum(2,3,5)=>sum(2)(3)(5)

function curry(fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return fn(a, b, c);
      };
    };
  };
}
const curriedSum = curry(sum);
console.log(curriedSum(2)(3)(5));
//Currying is a checking method to make sure that you get everything you need before you proceed
//It helps you to avoid passing the same variable again and again
// It divides your function into multiple smaller functions that can handle one responsibility.

//this
//The Java script this key word which is used in function ,refers to the object it belongs to it makes function reusable by letting you decide the objecrt value.

function sayMyName(name) {
  console.log(`My name is ${name}`);
}
sayMyName("Vijay");

//how to determine this?
//There are 4 ways to invoke function in java script and determine the value this key word

//Implict binding
//Implict binding rule will tell you what this refers to most of the time
const person = {
  name: "Vishwas",
  sayMyname: function () {
    console.log(`My name is ${this.name}`);
  },
};
person.sayMyname();
//Implict binding rule state that when a function invokes with .notation the object to the left of the . is what this key word is refering

//explict binding
const person1 = {
  name: "kru",
};
function sayYourName() {
  console.log(`My name is ${this.name}`);
}

//explict binding
sayYourName.call(person1);

//new binding
function Man(name) {
  //this is equal to {}
  //and we can add property to the object using this.
  this.name = name;
}
const Man1 = new Man("amith");
// new keyword in JavaScript is used to create an instance of an object that has a constructor function.

const man2 = new Man("jay");

//Default Binding
// Default binding refers to how this is the global context whenever a function is invoked without any of these other rules. If we aren't using a dot and we aren't using call(), apply(), or bind(), our this will be our global object. Your global context depends on where you're working.

//Order of precendece of this key word
//New binding   next explict binding next implict binding next defaukt binding

//Prototype
function mainFamily(fName, lName) {
  this.firstName = fName;
  this.lastName = lName;
}
const parent1 = new mainFamily("leon", "grace");
const parent2 = new mainFamily("dica", "dimo");

parent1.getFullName = function () {
  return `${this.firstName}  ${this.lastName}`;
};
console.log(parent1.getFullName());
//here we cant acces to the parentr two it will give error here prototype will comes into picture
mainFamily.prototype.getFullName = function () {
  return `${this.firstName}  ${this.lastName}`;
};

//in Java script every function  has a property called prototype that points to an object we can make use of that prototype object that determine all our sharable properties

console.log(parent2.getFullName());
console.log(parent1.getFullName());
//when we use prototype we can access the key and give the values too

//uses of prototype
//pprototype is to share properties and methods accorss instaces
//other uses is inheritence

//inheritence
function oldMan(fName, lName) {
  this.firstName = fName;
  this.lastName = lName;
}
//we have to inerite property and methods from oldman
//old man has a propert called firstname,last name and method called get superpower
//and super hero has another property called issuperhero and fightcrime method also he has

oldMan.prototype.getsuperPowers = function () {
  return `${this.firstName}  ${this.lastName}`;
};
function superHero(fName, lName) {
  //when we pass arguments here we can have acces to firstname and last name but we need to use call method
  oldMan.call(this, fName, lName);
  this.isUperHero = true;
}
superHero.prototype.fightCrime = function () {
  console.log(`fightig crime`);
};
superHero.prototype = Object.create(oldMan.prototype); //doubyut on this
//here we can access the get super power

const batman = new superHero("bruce", "wayne");
superHero.prototype.constructor = superHero;
console.log(batman.getsuperPowers());

////class key word
//creating a class
class jay {
  constructor(fname, lname) {
    this.firstname = fname;
    this.lastname = lname;
  }
  //how to add methods
  sayBYname() {
    return `${this.firstname}   ${this.lastname}`;
  }
}
//how to create instence of class
const classjay = new jay("lwon", "ohu");
console.log(classjay.sayBYname());

//inheritence in class
//how to inereited in class using extend and super key words
class spiderhero extends jay {
  constructor(fname, lname) {
    super(fname, lname);
    this.issuper = true;
  }
  fightcrimes() {
    console.log("fighting");
  }
}
const flashman = new spiderhero("wally", "barry");
console.log(flashman.sayBYname());

//Iterables and Iterators
//Iterations in java script


