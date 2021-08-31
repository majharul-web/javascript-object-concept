// file name: call-bind-apply.js

/* all method 1st parameter indicate this and then countable value */
const student1 = {
  id: 12,
  name: 'jony',
  balance: 5000,
  treatCost(amount, boksis, tax) {
    this.balance = this.balance - (amount + boksis + tax);
    console.log(this);
  },
};

const student2 = {
  id: 19,
  name: 'sima',
  balance: 3000,
};
// general call==> now this-->student1
student1.treatCost(500);

// use bind: bind call contain another variable and then call ==> now this-->student2
const student2Treat = student1.treatCost.bind(student2, 500, 200, 100);
student2Treat();

// use call ==> now this-->student2
student1.treatCost.call(student2, 300, 200, 120);

// use apply: apply contain an array in multiple parameter  ==> now this-->student2
const par = [400, 600, 120];
student1.treatCost.apply(student2, par);
