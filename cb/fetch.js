//Using promises with AN API
// fetch("https://dog.ceo/api/breeds/list/all")
//   .then((res) => {
//     return res.json(); //we parsed as a JSON
//     //.then also returning another promise
//   })
//   //if the above then returning another romise then we have to chain another .then meod
//   .then((data) => {
//     console.log(data);
//   });

//Using async await

async function start() {
  const res = await fetch("https://dog.ceo/api/breeds/list/all");
  //await will wait untill the promise return the result
  const data = await res.json(); //will convert it into readble format and we are awiting the data so we can wait untill the data comes
  //what is res.json is doing?
  createBreedList(data.message);
}
start();
//creating select element
function createBreedList(breedList) {
  //the below code is will be append inside the div tag so we got brred element and we added select tag to this with javascript
  document.getElementById(
    "breed"
  ).innerHTML = `  <select onchange="loadByBreed(this.value)">
 
  <option>Choose a dog breed</option>
  ${Object.keys(breedList)
    //Object keys takes an object and return a an array
    .map((breed) => {
      return `<option>${breed}</option>`;
    })
    //why we are using this.value insted using value
    .join("")}
    
</select>`;
}

async function loadByBreed(breed) {
  if (breed != "Choose a dog breed") {
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
    const data = await response.json();
    console.log(data);
  }
}
