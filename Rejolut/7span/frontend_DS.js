//======================================================================
//                         CHECK NESTED OBJECT
//======================================================================

//var person = {
//   name: "hello",
//   age: 29,
// };

// function isObject(data1) {
//   return data1 !== null && !(data1 instanceof Array) && data1 instanceof Object;
// }

// function checkIfNested(data) {
//   var isoBj = true;
//   for (var elem in data) {
//     var val = data[elem];
//     var result = isObject(val);
//     if (!result) {
//       isoBj = false;
//     }
//   }
//   return isoBj;
// }

// var result = checkIfNested(person);

// console.log(result);

//========================================================================
//                      PRIME CHECK
//========================================================================
// function isPrime(n) {
//   let flag = true;
//   if (n < 2) {
//     return false;
//   } else {
//     for (let i = 2; i < n; i++) {
//       if (n % i == 0) {
//         flag = false;
//       }
//     }
//     if (flag) {
//       console.log(`${n} is a prime number`);
//     } else {
//       console.log(`${n} is not a prime number`);
//     }
//   }
//   return flag;
// }
// isPrime(2);

//========================================================================
//          SORT ARRAY WITHOUT SORTING ALGO
//========================================================================

// let arr = [10, 10, 1, 4, 4, 100, 0];
// let min = 0,
//   max = 100;
// let n = arr.length;

// function sortArr(arr, n, min, max) {
//   // Count of elements in given range
//   let m = max - min + 1;

//   // Count frequencies of all elements
//   let c = new Array(m);
//   c.fill(0);
//   for (let i = 0; i < n; i++) {
//     c[arr[i]]++;
//   }
//   // c = [1,1,0,2,0,0,0,0,0,0,2]
//   // Traverse through range. For every
//   // element, print it its count times.
//   let res = [];
//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < c[i]; j++) {
//       //   console.log(i + min + " ");
//       res.push(i);
//     }
//   }
//   return res;
// }

// const a = sortArr(arr, n, min, max);
// console.log(a);

//=========================================================================================
//                      PAIR TARGET SUM
//=========================================================================================

// const arr = [5, 4, 2, 2, 2, 2, 2, 3];
// function getPairsCount(n, sum) {
//   let hm = new Map();
//   for (let i = 0; i < n; i++) {
//     if (!hm.has(arr[i])) {
//       hm.set(arr[i], 0);
//     }
//     hm.set(arr[i], hm.get(arr[i]) + 1);
//   }
//   console.log(Math.max(...hm.values()));

//   let count = 0;
//   for (let i = 0; i < n; i++) {
//     if (hm.get(sum - arr[i]) != undefined) {
//       count += hm.get(sum - arr[i]);
//     }
//     // if (sum - arr[i] == arr[i]) count--;
//   }
//   return count / 2;
// }
// let len = arr.length;
// console.log(getPairsCount(len, 7));

//==========================================================================
//              COIN PROBLEM
//===========================================================================

// function minCoins(coins, m, V) {
//   // Base case
//   if (V == 0) return 0;

//   // Initialize result
//   let res = Number.MAX_VALUE;
//   for (let i = 0; i < m; i++) {
//     if (coins[i] <= V) {
//       let sub_res = minCoins(coins, m, V - coins[i]);

//       if (sub_res != Number.MAX_VALUE && sub_res + 1 < res) res = sub_res + 1;
//     }
//   }
//   return res;
// }

// // Driver code
// let coins = [1, 5, 7, 9, 11];
// let m = coins.length;
// let V = 16;

// console.log("Minimum coins required is " + minCoins(coins, m, V));

//===========================================================================
//      RETURN MISSING NUMBER ARRAY
//===========================================================================

// const arr = [1, 3, 8, 9, 10];
// function findMissing(arr) {
//   let a = [];
//   for (let i = 0; i < 10; i++) {
//     if (!arr.includes(i)) {
//       a.push(i);
//     }
//   }
//   return a;
// }
// console.log(findMissing(arr));

//==========================================================================
// Check frequency
//==========================================================================
// input string - aabttdss
// o/p - a2bt2ds2

// function checkFreq(str) {
//   let map = new Map();
//   for (let i = 0; i < str.length; i++) {
//     if (map.has(str[i])) {
//       map.set(str[i], map.get(str[i]) + 1);
//     } else {
//       map.set(str[i], 1);
//     }
//   }
//   let strr = "";
//   for (let [key, value] of map.entries()) {
//     if (value == 1) {
//       strr = strr + key;
//     } else {
//       strr = strr + (key + value);
//     }
//   }
//   console.log(strr);
// }
// console.log(checkFreq("xyzxyz"));

// ===========================================================================
//   Return unique elements from an array
// ===========================================================================

// Method - 1
// const arr1 = [1, 2, 1, 4, 5, 6, 71, 2, 4];

// function filterValues(arr) {
//   let temp = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (temp.includes(arr[i])) {
//       continue;
//     } else {
//       temp.push(arr[i]);
//     }
//   }
//   return temp;
// }
// console.log(filterValues(arr1));

// Method - 2
// const newSet = new Set(arr1)  // this will return unique values in object not in array

//==============================================================================
// Second largest
//==============================================================================
// method 1
// function secondLargest(arr) {
//     if (arr.length < 2) return null; // Handle arrays with less than 2 elements
  
//     let largest = -1;
//     let secondLargest = -1;
  
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] > largest) {
//         secondLargest = largest;
//         largest = arr[i];
//       } else if (arr[i] > secondLargest && arr[i] < largest) {
//         secondLargest = arr[i];
//       }
//     }
  
//     return secondLargest;
//   }
  
//   console.log(secondLargest([2, 3, 7, 1, 28, 29, 23])); // Output: 28
  
// method 2
// function secondLargest(arr) {
//     arr.sort((a, b) => b - a);
//     return arr[1];
//   }
//   console.log(secondLargest([2, 3, 7, 1, 28, 29, 23])); 

// ================================================================================================
// Flaten an array | Flipkart fontend interview question
// ================================================================================================
// [[[1,[1,1]],2,3],[4,5]] = [1, 1, 1, 2, 3, 4, 5]

// function flatArray(arr){
//     return arr.reduce((acc, curValue)=>{
//         if(Array.isArray(curValue)){
//             acc = acc.concat(flatArray(curValue))
//         }else{
//             acc.push(curValue)
//         }
//         return acc
//     },[])
// }
// console.log(flatArray([[[1,[1,1]],2,3],[4,5]]));

// Example Walkthrough:
// For the input [[[1,[1,1]],2,3],[4,5]]:
// The function starts by processing the outermost array.
// It encounters the first element [[1,[1,1]],2,3], which is an array, so it recursively calls flatArray on this element.
// The process continues, breaking down the nested arrays until all elements are flattened.
// The final result is [1, 1, 1, 2, 3, 4, 5].

// ================================================================================================
// Flaten Deeply nested object | Adobe Frontend Interview question
// ================================================================================================

// const obj = {
//     A: "12",
//     B: '23',
//     C: {
//         P: '25',
//         D: {
//             L: 45
//         },
//         O: [1,2]
//     }
// }

// output = {
//     a: '12',
//     b: '23',
//     c.p: '25',
//     c.d.l: 45,
//     c.o.0: 1,
//     c.o.1: 2
// }


// function flatObject(obj, name){
//     const finalObj = {};
//     const generateFlatObjects = (obj, name) =>{
//         for(let key in obj){
//             const newName = name+key;
//             const value = obj[key];
//             console.log('newName:',newName, "value:", value, "key:",key);
//             if(typeof value === 'object'){
//                 generateFlatObjects(value, newName+".")
//             }else{
//                 finalObj[newName] = value;
//             }
//         }
//     }
//     generateFlatObjects(obj, name);
//     return finalObj;
// }
// console.log(flatObject(obj, ""));


// different types of for loops and their differences
// type coercion from freecodecamp == vs ===