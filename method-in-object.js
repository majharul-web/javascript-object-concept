// file name: method-in-object.js  -->

const studentInfo = {
  name: 'sima',
  prevBalance: 2500,
  roll: 10,
  friends: ['mina', 'rima', 'jony', 'masum'],
  marks: { bangla: 78, english: 45, math: 85, cgpa: 3.85 },
  result: function () {
    console.log(`student name:${this.name},her restult:${this.marks.cgpa}`);
  },
  getTreat: function (treats, boksis) {
    const balance = this.prevBalance - (treats + boksis);
    return balance;
  },
};

// console.log(studentInfo.result());
const newBalance = studentInfo.getTreat(700, 120);
console.log(newBalance);
const newBalance2 = studentInfo.getTreat(1000, 120);
console.log(newBalance2);
