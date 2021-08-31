// file name: object-loop.js  -->
const person = {
  name1: 'samir',
  age: 15,
  job: 'programer',
  experience: '3 year',
  district: 'dhaka',
  hobby: 'sports',
};

// use for in loop for objects
for (const prop in person) {
  /* show all properties and all value */
  console.log(prop, person[prop]);
}

// use keys and for of loop in keys array

const keys = Object.keys(person);
for (key of keys) {
  console.log(key, person[key]);
}
