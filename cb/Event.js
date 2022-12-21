//4 lectures
//1.recap about async programming ,different parts,synchronous code snippet

// Async Java script reacp
//Javascript is Synchronous ,blocking,single-threaded language
//To make asynchronouse programing possible ,Javascript alone is not enough we also need the web browser

//synchronous code
console.log("first");
console.log("second");
console.log("third");
//How call stack works

// The entire model referes to Java script runtime environment
// JS engine comprices a memory heap
//We need memory heap as a place to store and write information .
// The call stack helps us keep track of where we are in the code so that we can run the code in order.
//When writing code for the Web, there are a large number of Web APIs available. Below is a list of all the APIs and interfaces (object types) that you may be able to use while developing your Web app or site.

// Web APIs are typically used with JavaScript, although this doesn't always have to be the case. example DOM,CANVAS API,Fetch API,
// A callback queue is a queue of tasks that are executed after the current task. The callback queue is handled by the JavaScript engine after it has executed all tasks in the microtask queue.

//Event Loop
//event loop will check the call stack is empty and if its then push the item from the stack

//SYnchronous code snippet

console.log("first");
console.log("second");
console.log("third");

//global()Whenever the JavaScript engine receives a script file, it first creates a default Execution Context known as the Global Execution Context (GEC).
//first assume for 1 ms
//first log to the console and popped out from the tas
//second assumes 2ms
//second log to the console and popped out from the task
//function assume for 3ms
//third log to the console and pooped from the stack a
//and there is no code to execute so global also popped out

//Async setTImeout code
console.log("first");
setTimeout(() => {
  console.log("second");
}, 2000);
console.log("three");

//global scope and pushed on to the scope
//first assume in 1 ms
//console log to first  and popped out from the stack
//secodn assumes 2 ms to stack
//settimeout is not features presnt from Javascript.It is a webapi which we can call from Javascript
//so now the cb function and duration will handover to settimeOutwebapi which is browser feature
//Java script simply pops off the setTimeout function from the calls stack as far execution of line 2 is concerned

//web API start timer of two seconds background
//at three 3milli second
//third get log to the console and popped out
//once web api dont the thing it cannot directly push into call stack it pushes into call back queue
//Now the call back function waiting to be executed
//and the event Lop decides whethere the cb function push to call stack or not
//The event loop constanly check that the event loop is empty or not if it is empty then it pushes the item which is front in the call back quueu to the stack

//what the duration is 0 ms
console.log("first");
setTimeout(() => {
  console.log("second");
}, 0);
console.log("three");
//first three and second


//execution of promise in JavaScript

