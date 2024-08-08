const str = "amit hello";
const res = str.split(" ");
console.log(res);
console.log(res.reverse().join(","));

// let i = 0;
// const strnew = "";
// var temp;
// let j = str.length;

// while (i < str.length && j > 0) {
//   let a = str.charAt(i);
//   let b = str.charAt(j);
//   if (a !== b) {
//     temp = a;
//     console.log(temp);
//     a = b;
//     console.log(b);

//     b = temp;
//   }
//   i++;
//   j--;
// }

// var x = { foo: 1 };
// var output = (function () {
//   delete x.foo;
//   return x.foo;
// })();
// console.log(output);

// for (let i = 0; i <= 60; i++) {
//   const countId = setInterval(() => {
//     let count = 0;
//     console.log(count++);
//   }, 1000);
//   clearInterval(countId);
// }

let switcheroo;
switch ("abc") {
  case "abc":
    switcheroo = "step 1";
  case "def":
    switcheroo = "step 2";
  default:
    switcheroo = "step 3";
}
console.log(switcheroo);

const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function () {
    console.log("Index: " + i + ", element: " + arr[i]);
  }, 3000);
}
// 4 4 4 4
