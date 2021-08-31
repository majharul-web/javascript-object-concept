//file name: compare-object.js

const x = { a: 10, b: 15 };
const y = { b: 15, a: 10 };
const z = x;

// not work this way because object is reference type
if (x === y) {
  console.log('they r equal');
} else {
  console.log('they r not equal');
}

// not right way
if (JSON.stringify(x) === JSON.stringify(y)) {
  console.log('they r equal');
} else {
  console.log('they r not equal');
}

// right way
function compareObject(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  for (prop in obj1) {
    if (obj1[prop] !== obj2[prop]) {
      return false;
    } else {
      return true;
    }
  }
}
const isEqual = compareObject(x, y);
console.log(isEqual);
