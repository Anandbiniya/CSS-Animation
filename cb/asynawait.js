//print hello after 2 sec using promises

const promise = new Promise((res, rej) => {
  res("hello");
});
promise.then((data) =>
  setTimeout(() => {
    console.log(data);
  }, 2000)
);

//async await
//The async key word is used to declare async functions
//Async function are functions that are instances of the asyncFunction constructor
//unlike normal functions,async functions always return a promis
//Normal function
function greet() {
  return "hello";
}
console.log(greet());
//it will return hello
//async function
//async function always return a promise
async function helloGreet() {
  return "hello";
}
console.log(helloGreet());

//await key word
//await keyword can be put infront of any async promise based function to pause your code untill that promise settles and return it results
//await only works inside async functions.Cannot use await in normal functions.

async function sayHello() {
  let promise1 = new Promise((res, rej) => {
    setTimeout(() => res("hello after 10"), 1000);
  });
  let result = await promise1;
  //here the await key word wait untill the resolve function executes
  console.log(result);
}
sayHello();

// Chaing promises VS async await

// How it is different better from call back promises
// Select a user from the database.
// Get services of the user from an API
// Calculate the service cost based on the services from the server.

//Call abck
function getUser(userId, callback) {
  console.log("Get user from the database.");
  setTimeout(() => {
    callback({
      userId: userId,
      username: "john",
    });
  }, 1000);
}

function getServices(user, callback) {
  console.log(`Get services of  ${user.username} from the API.`);
  setTimeout(() => {
    callback(["Email", "VPN", "CDN"]);
  }, 2 * 1000);
}

function getServiceCost(services, callback) {
  console.log(`Calculate service costs of ${services}.`);
  setTimeout(() => {
    callback(services.length * 100);
  }, 3 * 1000);
}

//sequential vs concurrent vs parallel execution

//sequential execution
function resolevHello() {
  return new promise((resolve) => {
    setTimeout(function () {
      resolve("hello");
    }, 2000);
  });
}

function resolveWOrld() {
  return new promise((resolve) => {
    setTimeout(function () {
      resolve("world");
    }, 1000);
  });
}
//summry for an interview
//The async and await keywords enable asynchrous,promise base behaviour to be written in a cleaner style,avoiding the need to explicity configure promise chain.
//async await introduced in ES2017
//async key word returns a promise
//await keyword-pause execution till the promise is resolved or rejected





