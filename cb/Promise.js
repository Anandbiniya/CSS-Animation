//Promise
//Promise
//Asynchronous operaions in java script
//Promise return value

const process = require("process");

//promis is said to be fulfilled
//promise is said to be rejected
//success calll back
//Failure call back
//Mdn:A promise is a proxy value not necessarily known when the promise is created.It allows you to associate handlers with an asynchronous actions eventual success value or failure reason

// A promise is a proxy  for a value?
//means might get or not get the value

//not necessrily known when the promise is created
//not sure whethere will get value or not

//allows you to associate handlers with an asynchronous actions eventual successs value or failure reason
//we have to something when it is fulfilled or rejected

//Promise is an object in java script
//A promise always in one of the three states
//fulfilled,rejected,pending

//why Promise
//Promise help us to deal with asynchronous code in far more simpler way compared to call backs

//How to creata promise&&//How to fulfill or reject promise

// print hello world using promises after 2 seconds

const promise = new Promise((res, rej) => {
  //we have created a promise with constructors using new and promise and passes two value res,rej
  setTimeout(() => {
    res("hello");
  }, 2000);
});
//when we use response we have to use .then
//when we use reject we have to use .catch
promise.then((data) => {
  console.log(data);
});

// The reject function is used to trigger an error. When you use then, you can give 2 functions. The first function is used when the promise exits successfully. The second function is used when the promise encounters an error.

const promise1 = new Promise((res, rej) => {
  setTimeout(() => {
    rej("We are rejected");
  }, 2000);
});

promise1
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

//   You can call resolve and reject multiple times, but this is useless. Once a promise is finished, it can't restart.

const promise2 = new Promise((res, rej) => {
  setTimeout(() => {
    res("hello 1");
    res("hello 2");
    res("hello 3");
    res("hello 4");
  }, 2000);
});
promise2.then((data) => {
  console.log(data);

  //it will print only once hello 1 after promise will not be restart because it is fulfilled
});

// Challenge 1: Promise Construtor
console.log("start");

const promiseInt1 = new Promise((resolve, reject) => {
  console.log(1);
});

console.log("end");
//the out put will be statr,1,end becuase this is synchrom=nous codeSynchronized code blocks are always executed sequentially from top to bottom.
// When we call new Promise(callback), the callback function will be executed immediately.

// Challenge 2: .then()

console.log("start");

const promiseint2 = new Promise((resolve, reject) => {
  console.log(1);
  resolve(2);
});

promiseint2.then((res) => {
  console.log(res);
});

console.log("end");
//the out put will be start ,1,end and 2 reason in java script code first synchronous code will execute first then asynchronous code

// Challenge 3: resolve()

console.log("start");

const promiseint3 = new Promise((resolve, reject) => {
  console.log(1);
  resolve(2);
  console.log(3);
});

promiseint3.then((res) => {
  console.log(res);
});

console.log("end");

//the out put will be start,1,3,end and 2
// Remember, the resolve method does not interrupt the execution of the function. The code behind it will still continue to execute.

// Challenge 4: resolve() isn’t called
console.log("start");

const promiseint4 = new Promise((resolve, reject) => {
  console.log(1);
});

promiseint4.then((res) => {
  console.log(2);
});

console.log("end");
//the out put will be start,1,end two wont be printed because it is did not call and it is always in pending state.

// Challenge 5: The One That’s There to Confuse You

console.log("start");

const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve("success");
  });

console.log("middle");

fn().then((res) => {
  console.log(res);
});

console.log("end");

//out put
//start
//middle
//1 because function executed here
//end
//sucess this is asynchronous function

// Challenge 6: The One With a Fulfilling Promise
console.log("start");

Promise.resolve(1).then((res) => {
  console.log(res);
});

Promise.resolve(2).then((res) => {
  console.log(res);
});

console.log("end");

//out put
//start
//end
//1.
//2
//this has some doubt

// Challenge 7: setTimeout vs Promise
console.log("start");

setTimeout(() => {
  console.log("setTimeout");
});

Promise.resolve().then(() => {
  console.log("resolve");
});

console.log("end");
//output will be
//what if two asynchronous function executes at he same time
// In JavaScript EventLoop, there is also the concept of priority.
// Tasks with higher priority are called microtasks. Includes: Promise, ObjectObserver, MutationObserver, process.nextTick, async/await .
// Tasks with lower priority are called macrotasks. Includes: setTimeout , setInterval and XHR
// Micro-promise,async/await/process.nextTick,mutation server
//MacroTask:setTimeout,setInterval,XHR
// Synchronous code==>MicroTask==>macro task

//
// So the output result is start , end , resolve and setTimeout.

// Challenge 8: Microtasks mix Macrotasks
const promiseMacro = new Promise((resolve, reject) => {
  console.log(1);
  setTimeout(() => {
    console.log("timerStart");
    resolve("success");
    console.log("timerEnd");
  }, 0);
  console.log(2);
});

promiseMacro.then((res) => {
  console.log(res);
});

console.log(4);

//first 1 will print because it is synchronous code and it is executing already
//2 set time out asynchronous code first will print all the synchronous code so hence 2 will be printed
//4
//now macro task will be printed
// there also in synchronous way timer start and then timer end
//But here is a trap: Since the current promise is still in the pending state, the code in this will not be executed at present.

// Challenge 9: Prioritise Between Microtasks and Macrotasks
// const timer1 = setTimeout(() => {
const timer1 = setTimeout(() => {
  console.log("timer1");

  const promiseinter = Promise.resolve().then(() => {
    console.log("promise1");
  });
}, 0);

const timer2 = setTimeout(() => {
  console.log("timer2");
}, 0);

//Execute all microtasks first
// Execute one macrotask
// Execute all (newly added) microtasks again
// Execute next macrotask
// Cycle through

// Challenge 10: A Typical Interview Question
console.log("start");

const promise1inter = Promise.resolve().then(() => {
  console.log("promise1");
  const timer2inter = setTimeout(() => {
    console.log("timer2");
  }, 0);
});

const timer1inter = setTimeout(() => {
  console.log("timer1");
  const promise2inter = Promise.resolve().then(() => {
    console.log("promise2");
  });
}, 0);

console.log("end");
//start
//promise1
//timer2
//end
//timer1
//promis2
