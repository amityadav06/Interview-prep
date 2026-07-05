//                      Frontend Prep
//https://docs.google.com/document/d/1-55s4pTINem4c4WzJ1-M4s9-WzzmvMWoqB67l6LEfOs/edit?tab=t.0

//==========================================================================
//              QUESTIONS TrendLyne interview
//==========================================================================

// script in head vs end of body
// debounce
// how to prevent overflow in flex
// inline vs block vs inline  block
// meta viewport in mobile
// settimeojut (fn, 0) how this workds
// shallow vs deep copy
// virtaul dom how it works
// have you handle team what is the size what is your roels and responsilblity
// how to center div content
// map vs foreach


//==========================================================================
//              QUESTIONS TrendLyne Round 2 interview
//==========================================================================

// move zero to right
// memovise function in JS
// usefetch custom hook
// make json structure for employee table
// css flex grid media query, specificity order
// how react rendering works
// jwt which problem solves, why to use in http only cookie, does it access by FE
// local store and its purpose
// usememo usecallback
// hooks
// how to optimise images / sprite
// async await
// react keys
// prefetch vs preload vs preconnect vs prerender

//==========================================================================
//              QUESTIONS Publics sapient interview
//==========================================================================

// what if one mfe in react 16 and one in react 18 and we are getting error
// how to handle redux store and data sharing accros all mfes
// how to handle in sheel app if one of mfe got broke. whole app shold not get brolke
// react 18 , react 18 features
// RSC
// webpack is depricated with react 19. then how to use module federation
// with vite 

//==========================================================================
//              QUESTIONS Photon interview
//==========================================================================
// intro, deep vs shallow copy
// map, filter, reduce
// promises
// hoisting
// rest vs spread
// async await
// debug react app
// usememo exmaple code

//==========================================================================
//              QUESTIONS Bristlecone interview
//==========================================================================
// aoout and project
// project details what kind of it is
// how to share navbar in mfes
// most challenging task you have done
// how did you solve production bugs and how do you identify products bugs in which tool
// what is garbage collection
// how to prevent memory leakage
// what are memoisation in react
// give in which scenarios you optmise using memoisation
// closure and its real world usage
// event loop
// promises

// retun value after 3 sec from a function - promise
// retrun hello on all calls but on third call return hey - closure


//=======================================================
// Zensar Technical Interview Questions
//=======================================================

// useImperativeHandle(ref, createHandle, [deps])


//removeDuplicate([2,3,5,5,2,3,20,3]) 
// output [2,3,5,20]


// function removeDuplicate (arr){
//   let res = [];
  
//   for(let i = 0;i< arr.length;i++){
//     if(!res.includes(arr[i])){
//       res.push(arr[i])
//     }
  
//   }
  
//   return res;
// }

// console.log(removeDuplicate([2,3,5,5,2,3,20,3]))



// (() => {
// let x = (y = 10);
// })();
// console.log(typeof x, typeof y);

// var a = 1;
// function test() {
//  console.log(a);
//  var a = 2;
// }
// test();



// function example(a, b = a) {
//  console.log(a, b);
// }
// example(5);
// example(5, undefined);
// example(5, null);



// function foo(){
// console.log('hello');
// }
 
// foo.name = 'Manoj';
 
// console.log(foo.name)


// function foo(){}
// const foo = function(){}
// const foo = () => {}


// for(let i=0; i < 3; i++){
  
//   setTimeout(() => console.log(i), 0);
// }

// type Animal{
  
// }

// type Dog {
  
// }

// type common = Animal | Dog


//=======================================================
// newVision Interview Questions Round 1
//=======================================================

// function outer() {
//   console.log(foo);
//   function foo() {
//     return "A";
//   }
//   return function () {
//     console.log(foo());
//   };
// }
// const fn = outer();
// fn();

// function foo() {
//     return "A";
//   }
// A

// function outer() {
//   for (var i = 0; i < 3; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, 0);
//   }
// }
// outer();

// let count = 0;
// function repeat() {
//   if (count < 5) {
//     setTimeout(repeat, 1000);
//     console.log(count++);
//   }
// }
// repeat();

// const obj = {
//   value: 10,
//   show() {
//     setTimeout(function () {
//       console.log(this.value);
//     }.bind(this), 0);
//   }
// };
// obj.show();

// yourself
// project end to end
// 4 output based
// hoisting in js
// this keyword
// call bind apply
// error boundary
// react virtualisation
// react query


//=======================================================
//  Sutherland Interview Questions
//=======================================================

// introductino
// MFE - how to share different mfes, 
// if i have one mfe with all services and i want to use that in another mfe , the how will be using that
// have you used
// tanstack query - how do we do caching their
// tailwind css - how to do responsiveness
// different layouts in css
// RTK - fetchbasequery why we use it
// make custom hook for form
// how do we use HOC
// have you used cms ho do we load data their.

//=======================================================
//  Payoda - Apple Interview Questionsl
//=======================================================
// BOM VS DOM
// How virtual dome works in case list virtualization
// jwt authentication explain in detail


//=======================================================
//  IBM Interview Questionsl
//=======================================================

// Athos Commerece
// mynameisamit - MyNameIsAmit
// let array  = ["2A","3B","4C"]
// [AA,BBB,CCCC] return max = C
// toto api fetch and render list

//=======================================================
//  Bristlecone - client round 5 Oracle Interview Questions
//=======================================================
// very much focused on resume line by line for all company projects.
// whats your role in day to day in last company.
// what is strangular fig pattern you mentioned in resume.
// how do you did RBI modernisation project.
// how did you standardise library you mentioned in resume.

// only return value for first call and rest all calls return undefined.
//function once(fn, context){
//     let output;
//     let isCalled = false
    
//     return function(){
//         if(!isCalled){
//             output = fn.apply(context || this, arguments)
//             isCalled = true
//             return output
//         }
//         return undefined;
//     }
// }

// function add(a, b){
//     return a + b
// }
// const res = once(add);
// console.log(res(1, 2))
// console.log(res(1, 2))
// console.log(res(1, 2))
// console.log(res(1, 2))

// Given an integer array nums and an integer k, return the number of continuous subarrays whose sum equals k.
 
// Input: nums = [1, 2, 3], k = 3
// Output: 2
// Explanation: [1,2] and [3]

// function subarraySum(nums, k) {
//     const map = new Map();
//     map.set(0, 1); // empty prefix sum

//     let sum = 0;
//     let count = 0;

//     for (const num of nums) {
//         sum += num;

//         if (map.has(sum - k)) {
//             count += map.get(sum - k);
//         }

//         map.set(sum, (map.get(sum) || 0) + 1);
//     }

//     return count;
// }

// console.log(subarraySum([1, 2, 3], 3)); // 2

//=======================================================
//  Allshore Interview Questions - 1
//=======================================================

// explain microfrontend architecture of your project
// as a frontend dev what mistakes you have made and how you resolve
// how do you do code review
// how do you review PR
// explain redux architecute
// explain redux vs react query
// how do you upgrade react 16 to 18 wihtou 0 downtime
// how do you handle millions of cuncurrent users in fifa project
// how did you mangae state in fifa project
// have you mentored jounior dev
// explain rest API architecute
// what are web vitals
// how to debug mobile performance issue, page load performance issue and how to resolve
// debounce vs throttle
// how do you mock api in jest

//=========================================================
// Coforge Technical Interview Questions - Full stack MERN
//=========================================================

// intro
// const str = “javascriptinterview”
// Find longest substring that is non repeating characters - sliding winndow all unique chars
// Node js event loop
// Node js streams
// Node js clustering
// React fiber
// debounce vs throttle
// usememo vs usecallback