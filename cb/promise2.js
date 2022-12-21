//.then() function
//chaing promises
//Both then and catch methods are return promises
//it means then and catch methoc can be chained in Java script
//

//Callbackhell
fetchCurrentUser("api/user", function (result) {
  fetchFollowerByUserId(`api/follower/${result.userId}`, function (result) {});
});

// Rewriting usingPromise
const ChainPromise = fetchChainPromise(`api.user`);
ChainPromise.then((res) => fetchFollowerByUser(`api/followe/${result}`)).then(
  (res) => fetchFollowerInteres(`api/user`)
);
// promises.all
// The Promise.all() method takes an iterable of promises as input and returns a single Promise.
// Query multiple APIs and perform some actions but only after all the API finshed loadng
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
// expected output: Array [3, 42, "foo"]

// Promise.allSettled()
// The Promise.allSettled() method takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when all of the input's promises settle (including when an empty iterable is passed), with an array of objects that describe the outcome of each promise.
const promise1settled = Promise.resolve(3);
const promise2settled = new Promise((resolve, reject) =>
  setTimeout(reject, 100, "foo")
);
const promisessettled = [promise1settled, promise2settled];

Promise.allSettled(promises).then((results) =>
  results.forEach((result) => console.log(result.status))
);

// expected output:
// "fulfilled"
// "rejected"

//Promise.race
// The Promise.race() method takes an iterable of promises as input and returns a single Promise. This returned promise settles with the eventual state of the first promise that settles.
const promise1race = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "one");
});

const promise2race = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "two");
});

Promise.race([promise1race, promise2race]).then((value) => {
  console.log(value);
  // Both resolve, but promise2 is faster
});
// expected output: "two"
