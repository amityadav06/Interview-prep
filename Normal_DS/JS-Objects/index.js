//--------------------------------------------------------------------------------------------------------------------------------
// 1 - Deep Clone an Object: Write a function to deep clone an object. How would you handle circular references?
//--------------------------------------------------------------------------------------------------------------------------------


//--------------------------------------------------------------------------------------------------------------------------------
// 2 - Merge Two Objects: Given two objects, write a function that merges them. If there are conflicting keys, 
// the values from the second object should overwrite those from the first.
//--------------------------------------------------------------------------------------------------------------------------------


//--------------------------------------------------------------------------------------------------------------------------------
// 3 - Count the Occurrences of Values: Write a function that counts the occurrences of each value in an object
// and returns a new object with these counts.
//--------------------------------------------------------------------------------------------------------------------------------


//--------------------------------------------------------------------------------------------------------------------------------
// 4 - Flatten an Object: Write a function that flattens a nested object. For example,
//  { a: { b: { c: 1 } } } should become { 'a.b.c': 1 }.        adobe Interview question
//--------------------------------------------------------------------------------------------------------------------------------

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

//--------------------------------------------------------------------------------------------------------------------------------
// 5 - Check for Key Existence: Write a function that checks if a nested key exists in an object.
//--------------------------------------------------------------------------------------------------------------------------------


//--------------------------------------------------------------------------------------------------------------------------------
// 6 - Remove Empty Properties: Write a function that removes properties with falsy values 
// (like null, undefined, false, 0, or empty strings) from an object.       Cashify Interview question
//--------------------------------------------------------------------------------------------------------------------------------

// function deleteFalseValues(obj, seen = new WeakSet()) {
//     // Handle circular references
//     if (seen.has(obj)) return {};
//     seen.add(obj);

//     // Initialize the output object
//     let output = {};

//     for (let key in obj) {
//         let value = obj[key];

//         // Check if value is an object and not null
//         if (value && typeof value === 'object') {
//             // If it's an array, filter it
//             if (Array.isArray(value)) {
//                 const filteredArray = value.filter(item => item !== '' && item !== false && item !== null && item !== 0);
//                 if (filteredArray.length > 0) {
//                     output[key] = filteredArray;
//                 }
//             } else {
//                 // It's a regular object, so we call deleteFalseValues recursively
//                 const nestedOutput = deleteFalseValues(value, seen);
//                 if (Object.keys(nestedOutput).length > 0) {
//                     output[key] = nestedOutput;
//                 }
//             }
//         } else {
//             // Check for falsy values
//             if (value !== '' && value !== false && value !== null && value !== 0) {
//                 output[key] = value;
//             }
//         }
//     }

//     return output;
// }

// // Test the function
// const obj = {
//     a: null,
//     b: false,
//     c: true,
//     d: 0,
//     e: 1,
//     f: '',
//     g: 'a',
//     h: [null, false, '', true, 1, 'a'],
//     i: { j: 0, k: false, l: 'a' }
// };

// console.log(deleteFalseValues(obj));

//--------------------------------------------------------------------------------------------------------------------------------
// 7 - Find the Maximum Depth of an Object: Write a function that returns the maximum depth of a nested object.
//--------------------------------------------------------------------------------------------------------------------------------


//--------------------------------------------------------------------------------------------------------------------------------

// 8 - Convert Object to Query String: Write a function that converts an object into a query string format 
// suitable for a URL.
//--------------------------------------------------------------------------------------------------------------------------------

// function objectToQueryString(obj) {
//     const params = Object.keys(obj).map(key => {
//         const value = encodeURIComponent(obj[key]);
//         return `${encodeURIComponent(key)}=${value}`;
//     });
//     return params.join('&');
// }

// // Example usage:
// const queryObj = {
//     name: "John Doe",
//     age: 30,
//     city: "New York"
// };

// const queryString = objectToQueryString(queryObj);
// console.log(queryString); // Output: "name=John%20Doe&age=30&city=New%20York"


//--------------------------------------------------------------------------------------------------------------------------------
// 9 - Transform Object Values: Write a function that takes an object and a callback function, and applies 
// the callback to each value in the object.
//--------------------------------------------------------------------------------------------------------------------------------

// function applyCallbackToValues(obj, cb){
//     let result = {};
//     for(const key in obj){
//         if(obj.hasOwnProperty(key)){
//             result[key] = cb(obj[key])
//         }
//     }
//     return result;
// }

// const obj = { a: 1, b: 2, c: 3 };
// function double(value){
//     return value * 2;
// }
// const doubled = applyCallbackToValues(obj, double);
// console.log(doubled);

//--------------------------------------------------------------------------------------------------------------------------------
// 10 - Find Missing Keys in an Object: Given an object and an array of required keys, write a
//  function that returns the missing keys.
//--------------------------------------------------------------------------------------------------------------------------------


// function findMissingKeys(obj, arr){
//     const res = arr.filter((item) => {
//         return !(item in obj)
//     })
//     return res;
// }

// const myObject = {
//     name: 'Alice',
//     age: 25,
//     city: 'Wonderland'
//   };
  
//   const requiredKeys = ['name', 'age', 'country', 'city', 'app'];
  
//   const missing = findMissingKeys(myObject, requiredKeys);
//   console.log(missing);