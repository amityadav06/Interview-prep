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