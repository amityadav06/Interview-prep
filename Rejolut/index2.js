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

// ARRAY ITERATORS METHODS=============================================
// 1) forEach
// const arr = ["ind", "aus", "mumbai", "gazibaad", "bhind"];
// arr.forEach((ele) => {
//   let len = 0;
//   if (ele.length > len) {
//     len = ele.length;
//     console.log(len);
//     console.log(ele);
//   }
// });

// Longest String in an array==============================================
// function longest_string(arr) {
//   let max = arr[0].le=ngth;
//   arr.map((v) => (max = Math.max(max, v.length)));
//   result = arr.filter((v) => v.length == max);
//   return result;
// }

// console.log(longest_string(["aaaaaaaa", "aa", "aaa", "aaaaa", "aa"]));

// Frequency count======================================================
let counter = (str) => {
  return str.split("").reduce((total, letter) => {
    total[letter] ? total[letter]++ : (total[letter] = 1);
    return total;
  }, {});
};

const res = counter("aabsssd");
console.log(res);

// Reverse String uring recursion========================================
// function reverse(str) {
//   if (str === "") {
//     return "";
//   } else {
//     return reverse(str.substr(1)) + str.charAt(0);
//   }
// }
// console.log(reverse("hello world"));

// check anagrams======================================================
// function anagrams(str, abc) {
//   let one = str.toLowerCase().split("").sort().join();
//   let two = abc.toLowerCase().split("").sort().join();
//   if (one === two) {
//     console.log("yes");
//   } else {
//     console.log("no");
//   }
// }
// console.log(anagrams("Maryk", "Army"));

// check palindrome====================================================
// function palindrome(str) {
//   let res = str.split("").reverse().join("");
//   if (res === str) return `string is palindrome`;
//   else return `not`;
// }
// console.log(palindrome("madam"));

// // largest element in array============================================
// function largest(arr) {
//   let len = arr.length - 1;
//   const res = arr.sort((a, b) => a - b);
//   return res[len];
// }
// console.log(largest([4, 2, 10, 2, 5, 8, 9]));

// Balance paranthesis====================================================
// let isParenthesisMatching = (str) => {
//   let stack = [];

//   let open = {
//     "{": "}",
//     "[": "]",
//     "(": ")",
//   };

//   let closed = {
//     "}": true,
//     "]": true,
//     ")": true,
//   };

//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];

//     if (open[char]) {
//       stack.push(char);
//     } else if (closed[char]) {
//       if (open[stack.pop()] !== char) return false;
//     }
//   }
//   return stack.length === 0;
// };
// console.log(isParenthesisMatching("[{}]"));

// Number is integer or not
function chekcnum(x) {
  return typeof x === "number" && x % 1 === 0;
}
console.log(chekcnum(12));
