// file name: object-method.js -->
const person = {
  name1: 'samir',
  age: 15,
  job: 'programer',
  experience: '3 year',
  district: 'dhaka',
  hobby: 'sports',
};

/* getting all properties */
const prop = Object.keys(person);
console.log(prop);

/* getting all values */
const values = Object.values(person);
console.log(values);

/* getting all data in pair array */
const entries = Object.entries(person);
console.log(entries);

// use seal:only update data but do not add or delete data of object
const newPerson1 = Object.seal(person);
person.district = 'foridpur';
console.log(newPerson1);

// use freeze:only update data but do not add or delete data of object
const newPerson2 = Object.freeze(person);
person.district = 'foridpur';
console.log(newPerson2);
