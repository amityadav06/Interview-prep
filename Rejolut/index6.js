// find missing numbers from given array

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

// Flaten an array | Flipkart fontend interview question


// let output = {};
// let recurcie = (obj, name) =>{
//     for(let key in obj){
//         if(typeof obj[key] === 'object'){
//             recurcie(obj[key], name+"."+key)
//         }else{
//             output[name+"."+key] = obj[key]
//         }
//     }
// }
// recurcie(obj, 'obj');
// console.log(output);

const obj = {
    A: "12",
    B: '23',
    C: {
        P: '25',
        D: {
            L: 45
        },
        O: [1,2]
    }
}

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


// ============================================================================================================
//                QUESTINOS RELATED TO OBJECT INTERVIEWS
// =============================================================================================================
// 1 - make a function and multiply by 2 if its property is a number
let num = {
    a: 10,
    b: 2,
    title: 'my name'
}

function multiplyByTwo(obj){
    let newObj = {};
    for(key in obj){
        if(typeof obj[key] === 'number'){
            newObj[key] = obj[key] * 2;
        }else{
            newObj[key] = obj[key];
        }
    }
    console.log(newObj);
}

multiplyByTwo(num)

// ===============================================================================================================
// Output of the question
// ===============================================================================================================

const a = {}
const b = {key: 'b'}
const c = {key: 'c'};

a[b] = 123;
a[c] = 456;
console.log(a[b]);

// ===============================================================================================================
// What is json.stringify and json.parse
// ===============================================================================================================
const user = {
    name: 'Piyush',
    age: 24,
}
console.log(JSON.stringify(user));