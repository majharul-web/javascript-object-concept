// file name:   -->

/* 1st way: object literal */
const student = {
  name: 'jony',
  roll: 10,
  class: 'six',
};
// console.log(student);

/* 2nd way:constructor(new keyword) */
const myObject = new Object(student);
// console.log(myObject);

/* 3rd way:Object.create method. */
const newObj = Object.create(student);
// console.log(newObj.name);

/* 3rd way:Class */

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getInfo() {
    console.log(`my name is ${this.name}
    my age${this.age}`);
  }
}
const info = new Person('rahim', 10);
console.log(info);
info.getInfo();

/* 4th way:function use before came class */
function myFunc(name, age) {
  this.name = name;
  this.age = age;
}
const man = new myFunc('slim', 15);
console.log(man);
