// Big o notation
//The worst case complexity of an algorith
//Big-O notation describes the complexity of an algorith using algebric terms
//It has two more important characteristics
//It is expressed in terms of the input
//It focuses on the bigger picture with out getting caught up in the minute dtails

//Big-O time complexity
function summation(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log(summation(4));
//we have 3 main state ment to execute 10/12/14
//  so the total execution is n+2(n stands for input)
//If focus on the bigger picture without getting caught u p in the minute details
//Here the +2 can be unappropriate so we can drop so it will become n
//the worst case time complexity
// O(n)=Linear:An algorithm has linear complexity if the time taken increases linearly with the increase in the number of inputs.

function suumation1(n) {
  return (n * (n + 1)) / 2;
}
// console.log(suumation1(n));
//  TIme complexity O(1):constant
// Irrespective of what value of n is line two is executed only one

//If there is two nested loop time complexity is quadratic
// O(n2)_Quadtric
//if there is three nested loop it is called cubic(O(n3))
//If input size reduces by half every Iteration called (O(logn))-LOgarithmic

//Space somplexity
//if the algorithm does not need extra memory or memory need does not depend on the input side the space complexity is constant
// exampple:sorting
// Linear space complexity extrax space need grow when input size grows
//Logarithmic:extra space needed grows but not the same rate as input size

//time complexity for an object
//insert(O(1))
//Remove(O(1))
//acces the value given key(O(1))
//search(O(n))
//object.keys(O(n))
//Object.values(O(n))
//object.entries(O(n))

//Arrays time complexity

//Insert/Remove at end -(O(1))
//Insert /Remove at beginneing(O(n))
//access(O(1))
//search(O(n))

//push/pop(O(1))
//split,slice/conct,unshift,shift(O(n))
//forEach/map/filter/reduce(O(n))
let n = [1, 2, 3];
function fib(n) {
  let fibs = [0, 1];
  for (let i = 2; i < n; i++) {
    fibs[i] = fibs[i - 1] + fibs[i - 2];
    console.log(fibs[i]);
  }
  //return fibs;
}
fib(2);
