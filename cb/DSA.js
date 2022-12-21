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


//DSA  &&Time complexity
let arr1=[0,0,2,3,4,1,3,4,5]

// find repeating numbers

let newarr1=[]

let obj1={}

for(let valu of arr1){
  if(obj[valu]){
    
  }
}



