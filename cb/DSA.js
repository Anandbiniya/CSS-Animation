let arr = [1, 4, 5, 6, 7];

//nlogn
let new_arr = [];
let max = 0;

let obj = {};
for (let val of arr) {
  obj[val] = true;
  if (max < val) {
    max = val;
  }
}
for (let i = 1; i < max; i++) {
  if (!obj[i]) {
    new_arr.push(i);
  }
}
console.log(new_arr);

// while (i < arr.length) {
//   let num = i + 1;
//   console.log(arr[i], i);
//   while (arr[i] > num) {
//     new_arr.push(num);

//     num++;
//   }
//   i++;
//   console.log(new_arr);
// }
//

//DSA  &&Time complexity
