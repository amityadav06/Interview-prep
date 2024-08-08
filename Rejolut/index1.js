// const main = document.getElementById("main");
// main.addEventListener("click", (event) => {
//   console.log(event.target.id);
// });

// const div2 = document.getElementById("div2");
// const ele = document.createElement("div");
// ele.innerText = "hello";
// div2.parentNode.insertBefore(ele, div2);
// =============================================================================
// let str1 = "Mary";
// let str2 = "Army";

// str1  = str1.toLowerCase().split("").sort().join();
// str2 = str2.toLowerCase().split("").sort().join();
// if(str1 === str2){
//   console.log("is ana");
// }else{
//   console.log("not ana")
// }
// =============================================================================
// var x = 23;
// (function(){
//   var x = 43;
//   (function random(){
//       x++;
//       console.log(x);
//       var x = 21;
//    })();
//  })();
// =============================================================================
// var sulphuricAcid = (function(){
//   var corrosive = true;
//   var pH = 2;
//   return {
//             property: function(){
//                 console.log(`Corrosive : ${corrosive}`);
//                 console.log(`pH acidic : ${pH < 7}`);
//                 }
//           };
// })();
// console.log(sulphuricAcid.pH);
// sulphuricAcid.property();
// ============================================================================
// Create a for loop that iterates up to
//  100 while outputting "fizz" at multiples of 3,
//  "buzz" at multiples of 5 and "fizzbuzz" at multiples
//  of 3 and 5.

// for (let i = 0; i <= 100; i++) {
//   i % 3 === 0
//     ? i % 5 === 0
//       ? console.log("fizzbuzz")
//       : console.log("fizz")
//     : i % 5 === 0
//     ? console.log("buzz")
//     : console.log(i);
//   // console.log(`${i} = ${num}`);
// }
// ==========================================================================
// function x(a){
//   return function y(b){
//     return a*b;
//   }
// }
// console.log(x(3)(6));
// ============================================================================
// var num = 10;
// if( typeof num === 'number' && num%1 === 0){
//   console.log("is Number");
// }else{
//   console.log("not Number");
// }
// ============================================================================

// Given a string, reverse each word in the sentence?
// var string = "Welcome to this Javascript Guide!";

// var strRe = string.split(" ").reverse().join(" ");
// console.log(strRe);
// =========================================================================

// var arr = [1,2,3,4,5,6];
// var filArr = arr.filter((ele)=> ele%2===0 );
// console.log(filArr);
// ========================================================================

//=========================================================================
// var arr = [1,2,3,4,5];
// function sumAdd(arr){
//   return arr
// }
// Array.prototype.sumAdd = sumAdd ;
// console.log(arr.sumAdd(arr));

// Own Filter Function
// function fun(arr,i){
//     if(arr[i]%2 === 0){
//       return arr[i];
//   }
//   return 0;
// }
// function OwnFilter(fun){
//     let arr = this;
//     // console.log(arr);
//      var copyArr = [];
//      var ele;
//      for(let i=0;i<arr.length;i++){
//         ele = fun(arr,i);
//         if(ele){
//           copyArr.push(ele);
//         }
//      }
//      return copyArr;
// }
// Array.prototype.OwnFilter = OwnFilter;
// // [1,2,3,4,].OwnFilter(fun);
// console.log([1,2,4,5,6].OwnFilter(fun));
// let str = "Test";
// let std = "User";

// // console.log(str.introduce()); // Hi! I'm Test. Nice to meet you
// // console.log(std.introduce()); // Hi! I'm User. Nice to meet you

// function introduce(){
//   console.log(`Hi! I'm ${this}. Nice to meet you`);
// }
// String.prototype.introduce = introduce;
// console.log(std.introduce());

// ======================================================================================================
// function to input 2 integers and find if the two numbers have
// the same frequency of digits
// sameFrequency(12345123, 43215312); // true
// sameFrequency(432132, 432123); // true
// sameFrequency(11122, 11121); // false
// function sameFrequency(num1, num2) {
//  console.log("call");
//   let strMap1 = new Map();
//   let strMap2 = new Map();

//   let str1 = String(num1).split("");
//   let str2 = String(num2).split("");
//   str1.map((ele) => {
//     if (strMap1.has(Number(ele))) {
//       let val = strMap1.get(Number(ele));
//       strMap1.set(Number(ele), val + 1);
//     } else {
//       strMap1.set(Number(ele), 1);
//     }
//     return 0;
//   });
//   str2.map((ele) => {
//     if (strMap2.has(Number(ele))) {
//       let val = strMap2.get(Number(ele));
//       strMap2.set(Number(ele), val + 1);
//     } else {
//       strMap2.set(Number(ele), 1);
//     }
//     return 0;
//   });

//   let newarr = str1.map((ele) => {
//     let val = Number(ele);
//     if (strMap1.get(val) !== strMap2.get(val)) {
//       return false;
//     } else return true;
//   });

//   if (newarr.includes(false)) {
//     console.log("false");
//   } else {
//     console.log("true");
//   }
// }

// sameFrequency(11122, 11121);
// sameFrequency(12345123, 43215311);
