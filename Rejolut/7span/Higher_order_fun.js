// HIGHER ORDER FUNCTION AND CALLBACK=================================
// function morning(names) {
//   return `Good morning ${names}`;
// }
// function afternoon(names) {
//   return `Good afternoon ${names}`;
// }
// function higherOrder(name, cb) {
//   const myName = "John";
//   console.log(`${cb(name)} What are you donig ${myName}`);
// }
// higherOrder("amit", morning);

//====================================================
//           CALCULATE AERA, CIRCUMFERENCE, DIAMETER
//====================================================

const radius = [3, 1, 2, 4];

const area = (radius) => {
  return Math.PI * radius * radius;
};

const circumference = (radius) => {
  return 2 * Math.PI * radius;
};


Array.prototype.calculate = function (cb) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(cb(this[i]));
  }
  return output;
};

// console.log(calculate(radius, area));
// console.log(calculate(radius, circumference));
// console.log(calculate(radius, diameter));
console.log(radius.calculate(area));
