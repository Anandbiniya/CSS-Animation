// var obj = {
//   a: "apple",
//   b: "cat",
//   c: {
//     // d: "guy",
//     e: "far",
//   },
// };
// //console.log(obj);
// const news = Object.create(obj);
// news.a = "anand";
// news.b = "fd";
// news.c = {d:"dev",e:"deva"};

//local storage&&session storage
//JSON ALl methods
//Shallow copy Deep copy
//Differnce between Async await and then catch
//Hoisting

// //difference betwween JSON and Java script
// //Java script Object Notation and it is a syntax for storing and exchanging data.
// var obj = '{"result":true, "count":42}';
// console.log(JSON.parse(obj));
// //parse method will convert JSON to Stringfy

// // The JSON.stringify() method converts a JavaScript value to a JSON string, optionally replacing values if a replacer function is specified or optionally including only the specified properties if a replacer array is specified.

// // console.log(JSON.stringify({ x: 5, y: 6 }));
// // // expected output: "{"x":5,"y":6}"

// // console.log(
// //   JSON.stringify([new Number(3), new String("false"), new Boolean(false)])
// // );
// // // expected output: "[3,"false",false]"

// // console.log(JSON.stringify({ x: [10, undefined, function () {}, Symbol("")] }));
// // // expected output: "{"x":[10,null,null,null]}"

// // console.log(JSON.stringify(new Date(2006, 0, 2, 15, 4, 5)));
// // // expected output: ""2006-01-02T15:04:05.000Z""
// var obj1={
//     a:1,
//     b:2
// }
// var str=true
// function  chelema(){
// return "hi"
// }
// console.log(JSON.stringify(obj1))
// console.log(JSON.stringify(str))
// var s=chelema()
// console.log(JSON.stringify(s))

function chelema() {
  return "hi";
}
console.log(JSON.stringify(chelema()));
// {
//     "hello"
// }

