function multiply(a, c) {
  return function outer(b) {
    return function inner(d) {
      return a * b * d;
    };
  };
}
const res = multiply(3)(2)(5);
console.log(res);

// OBJECT DESTRUCTURING
const classDetail = {
  students: 50,
  tables: 20,
  chairs: 3,
};
const { students, tables, chairs } = classDetail;
console.log(students);

// REST OPERATOR
function restOperator(a, ...b) {
  console.log(a, b);
}
restOperator(1, 2, 3, 4, 5);

// SPREAD OPERATOR

// Objects
// What happend when you type in browser
// Promises
// async await
// How to browser renders the page
// JS engine parse html page then show DOM

// primoses
const prom = new Promise((resolve, reject) => {
  setTimeout(() => {
    let roll = [1, 2, 3, 4];
    resolve(roll);
    reject("error is comin");
  }, 2000);
});
prom
  .then((num) => {
    console.log(num);
  })
  .catch((error) => {
    console.log(error);
  });
