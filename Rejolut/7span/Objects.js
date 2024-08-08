// var obj = {
//   a: 1,
//   b: 2,
//   c: 3
// }

// for(let [key, val] of Object.entries(obj)){
//   console.log(key, val)
// }

// function checkOccur(arr) {
//   const obj = {};
//   for (let i = 0; i < arr.length; i++) {
//     const res = arr[i];
//     if (obj[res]) {
//       obj[res]++;
//     } else {
//       obj[res] = 1;
//     }
//   }
// }

// var arr = [1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 10, , 55, 5, 5, 5, 5, 5, 5];
// checkOccur(arr);

// ====================== REFERENTIAL EQUALITY ====================
// We check rederence or instance of object
// const a = {
//     name: 'amit'
// }
// const b = {
//     name: 'amit'
// }
// Even though values of a and b are same
// But a has diff memeory space and b have diff
// So here we are checking for reference
// that's why a object is not equal to b object

// ======================== SHALLOW EQUALITY ========================
// We just check for object's 1st level of equality
// we dont check for nested equality

//========================  DEEP EQUALITY  ==========================
// In deep equality we also check for nested level equality

// function shallowEqual(object1, object2) {
//   const keys1 = Object.keys(object1);
//   const keys2 = Object.keys(object2);
//   console.log(keys1);
//   if (keys1.length !== keys2.length) {
//     return false;
//   }

//   for (let key of keys1) {
//     if (object1[key] !== object2[key]) {
//       return false;
//     }
//   }

//   return true;
// }

// const hero1 = {
//   name: "Batman",
//   realName: "Bruce Wayne",
// };
// const hero2 = {
//   name: "Batman",
//   realName: "Bruce Wayne",
// };
// const hero3 = {
//   name: "Joker",
// };

// console.log(shallowEqual(hero1, hero2)); // => true
// shallowEqual(hero1, hero3); // => false

const a = {
  name: "amit",
  city: {
    pin: 135,
    state: {
      add: "coloney",
    },
  },
  emptype: "Engg",
  game: "cricket",
};
const b = {
  name: "amit",
};
console.log(Object.keys(a));
console.log(a.name === b.name);
console.log(a.length);
Object.keys(a).map((i) => console.log(i.value));
//====================================================
// Assigning one object to another
// Object.assign(target object, source object);
// Object.assign(b, a);
// console.log(b);
//====================================================
// Object.keys(obj name)
// It returns an array with all keys of object

//=========================================================================
//                  EXPANSION JS INTERVIEW
//=========================================================================

// const obj1 = { a: 1, b: 2 };
// const obj2 = obj1;
// const obj2 = { ...obj1 };
// obj2.a = 4;
// console.log(obj1);

const arr = [
  { id: 1, name: "Bob" },
  { id: 2, name: "Harry" },
];
// let res = {};
// for (let i = 0; i < arr.length; i++) {
//   res[arr[i].id] = arr[i].name;
// }
// console.log(res);

var object = arr.reduce(
  (obj, item) => Object.assign(obj, { [item.id]: item.name }),
  {}
);

console.log(object);

// Output
// {'1': 'Bob', '2': 'Harry'}

// const arr1 = [
//   { employeeId: 5, name: "Mark" },
//   { employeeId: 10, name: "Peter" }
// ];

// const arr2 = [
//   { employeeCode: "emp101", employeeId: 10 },
//   { employeeCode: "emp102", employeeId: 5 }
// ];

// Output
// [
//  {"employeeId":10, employeeCode":"emp101", "name": "Peter"},
//  {"employeeId":5, employeeCode": "emp102", "name":"Mark"}
// ]

////    UNIFY INTERVIEW
// const student = {
//   name: "sudhakar",
//   english: 50,
//   hindi: 60,
//   maths: 75,
// };

// Output: const result = {
//   name: "sudhakar",
//   marks: [
//     { subject: "english", score: 50 },
//     { subject: "hindi", score: 60 },
//     { subject: "maths", score: 75 },
//   ],
// };

// function studentMarks(obj) {
//   let marks = [];
//   let newObj = {};
//   for (let [key, value] of Object.entries(obj)) {
//     if (key == "name") {
//       newObj["name"] = value;
//     } else {
//       marks.push({ subject: key, score: value });
//     }
//   }
//   newObj["marks"] = marks;
//   return newObj;
// }
// console.log(studentMarks(student));
