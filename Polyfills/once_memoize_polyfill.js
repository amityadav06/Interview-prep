// once - it will be called only once
function once(func, context){
    let output;

    return function(){
        if(func){
            output = func.apply(context || this, arguments);
            func = null;
        }

        return output;
    }
}

const hello = once((a,b) => console.log('hello', a, b))
hello();
hello();
hello();
hello();

// Memozie function in javascript


function myMemoize(fu, context){
    const res = {};
    return function(...args){
        var argsCache = JSON.stringify(args);
        if(!res[argsCache]){
            res[argsCache] = fn.call(context || this, ...args)
        }
        return res[argsCache]
    }
}

const slowSquare = (num1, num2) => {
    for(let i = 1; i <= 10000000; i++){}
    return num1 * num2
}

const memoizedFunction = myMemoize(slowSquare)

console.time('First call');
console.log(memoizedFunction(9467, 7649));
console.timeEnd('First call')

console.time('Second call');
console.log(memoizedFunction(9467, 7649));
console.timeEnd('Second call')


// without memoize time
// const slowSquare = (num1, num2) => {
//     for(let i = 1; i <= 10000000; i++){}
//     return num1 * num2
// }

// console.time('First call');
// console.log(slowSquare(9467, 7649));
// console.timeEnd('First call')

// console.time('Second call');
// console.log(slowSquare(9467, 7649));
// console.timeEnd('Second call')