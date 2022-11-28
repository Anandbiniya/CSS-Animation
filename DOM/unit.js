// first we need to create a variable where we can store the input value of feel
let feet = document.getElementById("feet");
let Inch = document.getElementById("inch");

// feet.addEventListener("input", function () {
//   let f = this.value;
//   let i = f * 12;
//   Inch.value = i;
// });
// Inch.addEventListener("input", function () {
//   let i = this.value;
//   let f = i / 12;
//   if (!Number.isInteger(f)) {
//     f = f.toFixed(2);
//   }
//   feet.value = f;
// });
feet.addEventListener("input", feetfunction);
Inch.addEventListener("input", Inchfunction);
function feetfunction() {
  let f = this.value;
  let i = f * 12;
  Inch.value = i;
}
function Inchfunction() {
  let i = this.value;
  let f = i / 12;
  if (!Number.isInteger(f)) {
    f = f.toFixed(2);
  }
  feet.value = f;
}
