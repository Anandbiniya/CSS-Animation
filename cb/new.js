//print an hello after two seconds using call back and setTimeout

function sayHello() {
  console.log("hello");
}

function greeting(cb) {
  cb();
}

setTimeout(greeting, 2000, sayHello);
setTimeout(sayHello, 2000);
//----------
function delay(cb) {
  setTimeout(cb, 2000);
}
function sayHello1() {
  console.log("hello");
}
delay(sayHello1);

//create setinterval using settimeout
function delay(cb) {
  setTimeout(() => {
    cb();
    delay(cb);
  }, 2000);
}
//Recursive

