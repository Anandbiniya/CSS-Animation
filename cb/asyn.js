//Topics to cover
//Timeout and intervals

//call backs
//Promises
//async await
//Event Loop

//what and why of async Java script
//in its most basic form Java script is a synchronous,blocking,single threaded language

// synchronou
// If we have two functions which log messages to the console,code executes top down,with only one line executing at any given time.

//Blocking
//No matter how long a previous process takes,the subseqyuent process wont kick off untill the former is completed

//Java scipt is single threaded
//a thread  is a simply a process that your java script programm can use to run a task
//Each thread can only do one task at a time

//Async Java script-How?
//.Just Javascript is not enough
//we need new pieces which are outside of Java script to help us to write asynchronous code which is where web browsers come into play.
//web browser define functions and API that allows us to registarte function that should not be exccuted synchronously,and should insted be invoked asynchronously when some kind of event occurs

//Timeouts and Intervals
//The tradintional methods Javascript has avilable for running code asynchronously
//after a set time period elasped or

//setTimeout
//the set timeout function executes a particular block of code once after a specified time has elapsed
//it takes two parameters
//first parameter function to run and second one duration wait before executing the code
function greeting(name) {
  console.log("hello" + name);
}

const timeid = setTimeout(greeting, 1000, "vishwas"); //why we are not using greet()here

//To clear timeout,you can use the clear Timeout method passing in indentifier returned by settimeout as a parameter
//console.log(timeid);
//clearTimeout(timeid);

//setTInterval
//The setInterval function repeadly runs the same code over and over again at regular intervals
// const interval = setInterval(greeting, 2000, "amith");

// clearInterval(interval);

//timers and intervals are not part of the Java script it self.They are implemented by the browser and setTimeout and setInterval are basically names given to that functionality in java script
//duration parameter is minimum delay not guranteed delay
//It is possible to achieve the same effect as setInterval with a recursive settimeout

//Call backs
//in java script functions are first class objects
//just like an object a function can be passed as an argument to a function
//a function can also be returend as values from other function

function greet(name) {
  console.log(`hello   ${name}`);
}
function Goodgreet(cb) {
  const name = "vishwas";
  cb(name);
}

function num(a) {
  console.log(a);
}
function add(cb) {
  cb(2);
}

//print hello after two seconds using call back

// diiference between call back and hof
//CALLBACKFUNCTION:Any function that is passed as an argument to another function is called call back function in java script
//HOF:The function which accepts a function as an argument or returns a function is called higher order function

//print hello after 2 seconds using setTimeout and call back
function Hola() {
  console.log("ji");
}

function holalo(cb) {
  cb();
}

setTimeout(holalo, 2000, Hola);




//Why we need call backs
//we have two call backs
//Synchronous call backs
//A call back which is executed immediately is called synchronous call back

console.log("start");

function getGreeting(name, cb) {
  cb(`Hello ${name}!`);
}

console.log("before getGreeting");

getGreeting("Maxim", (greeting) => {
  console.log(greeting);
});

console.log("end");
//The out put here first will come start
//then before greeting
//hello maxim why because   function executed here
//end

function greet1(name) {
  console.log(`hello   ${name}`);
}
function Goodgreet1(cb) {
  const name = "vishwas";
  cb(name);
}
Goodgreet1(greet1);

//Asynchronous call backs

//An asynchrous callback is a callback that is ofter used to continue or resume code execution after an asynchronous operation has completed
//callbacks are used to delay the execution of a function untill a particular time or event has occured
//data fetching takes time and we can only run the function we want to after the data has been not immediately

//examplse
function SayAsy(name) {
  console.log(`hello ${name}`);
}
setTimeout(SayAsy, 2000, "anand");

//another example
function callback() {
  document.getElementById("demo").innerHTML = "hello world";
}
//document.getElementById("btn").addEventListener("click", callback);


////2nd exaple
console.log("start");

function getGreetingAsync(name, cb) {
  setTimeout(() => {
    cb(`Hello ${name}!`);
  }, 0);
}

console.log("before getGreetingAsync");

getGreetingAsync("Maxim", (greeting) => {
  console.log(greeting);
});

console.log("end");

//first start
//second before getGreetingAsync
//third end because there is setime out The callback function will run only after the program has finished executing the code from top to bottom (even if the delay is 0ms).
//Hello Maxim!


//Problem with the call back pattern
// if you have multiples call back functions where each level depends on the result obtained from the previous level ,the nesting of functions become so deep that the code  becomes difficult to read and maintain
//that is called call back hell


// How can you tell if a callback is synchronous or asynchronous?


//sort the array
//we need to run the loop 
//comapre the index with values so find missing 