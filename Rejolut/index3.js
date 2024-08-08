let a = [1, 2, 10, 10, 10, 12, 10, 12, 22, 22];
output = [10];

function checkRepat(a) {
  let arr = new Set();
  let res = {};
  for (let i = 0; i < a.length; i++) {
    if (res[a[i]] !== undefined) {
      arr.add(a[i]);
    } else {
      res[a[i]] = 1;
    }
  }
  return arr;
}
console.log(checkRepat(a));

// let a =[1,2,10,12,10,22]
// output = [10]

// res ={1: 3,10:2};

// a = [1,1,10,10,22];
// res ={ 1:2, 10:2, 22:1}

// function res = (a) => {
// let obj = {};
// a.forEach({
// e=> if(!obj[e]) {
// obj[e] = 1
// }
// else {
// const freq = obj[e];
// obj[e] =  freq++;
// }
// });
// returnb obj;
// }

//==========================================================================
//==========================================================================

// Assuming n is an integer and is 0 or greater
// function factorial(n) {
//   var i,
//     result = BigInt(1);

//   for (i = BigInt(2); i <= n; i++) {
//     result *= i;
//   }
//   return result;
// }

// console.log(factorial(5));
// console.log(factorial(200));

// console.log(factorial(69n));
// console.log(factorial(200n));

//==========================================================================
//==========================================================================

// Two arrays are given. Find common elements from
// them.
// arr1 = [1,2,5,3,7,9] aar = [2, 3, 10, 22, 0];
// output = [2, 3]

// function findCommon(arr, aar) {
//   let res = [];
//   for (let i = 0; i < aar.length; i++) {
//     if (arr.includes(aar[i])) {
//       res.push(aar[i]);
//     }
//   }
//   return res;
// }
// console.log(findCommon([1, 2, 5, 3, 3, 3, 3, 3, 3], [2, 3, 10, 22, 0]));
