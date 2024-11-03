//----------------------------------------------------------------------------
// 1
//----------------------------------------------------------------------------
function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}
const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());



//----------------------------------------------------------------------------
// 2
//----------------------------------------------------------------------------
function outer() {
    let outerVar = "I'm outside!";
    return function inner() {
        console.log(outerVar);
    };
}
const innerFunc = outer();
innerFunc();




//----------------------------------------------------------------------------
// 3
//----------------------------------------------------------------------------
function makeCounter() {
    let count = 0;
    return {
        increment: function() {
            count++;
            return count;
        },
        reset: function() {
            count = 0;
        }
    };
}
const counter = makeCounter();
console.log(counter.increment());
counter.reset();
console.log(counter.increment());




//----------------------------------------------------------------------------
// 4
//----------------------------------------------------------------------------
function createFunctions() {
    const funcs = [];
    for (var i = 0; i < 3; i++) {
        funcs.push(function() {
            console.log(i);
        });
    }
    return funcs;
}
const functions = createFunctions();
functions[0]();
functions[1]();
functions[2]();



//----------------------------------------------------------------------------
// 5
//----------------------------------------------------------------------------
function outer() {
    let value = 42;
    return function() {
        return value;
    };
}
const getValue = outer();
console.log(getValue());



//----------------------------------------------------------------------------
// 6
//----------------------------------------------------------------------------
function outer() {
    let counter = 0;
    return function inner() {
        counter++;
        return counter;
    };
}
const fn1 = outer();
const fn2 = outer();
console.log(fn1());
console.log(fn1());
console.log(fn2());



//----------------------------------------------------------------------------
// 7
//----------------------------------------------------------------------------
function makeMultiplier(multiplier) {
    return function(x) {
        return x * multiplier;
    };
}
const double = makeMultiplier(2);
const triple = makeMultiplier(3);
console.log(double(5));
console.log(triple(5));




//----------------------------------------------------------------------------
// 8
//----------------------------------------------------------------------------
function createClosure() {
    let name = "Closure";
    return function() {
        console.log(name);
        name = "Updated Closure";
    };
}
const closure = createClosure();
closure();
closure();



//----------------------------------------------------------------------------
// 9
//----------------------------------------------------------------------------
function outerFunction() {
    var a = 1;
    function innerFunction() {
        var b = 2;
        return a + b;
    }
    return innerFunction;
}
const inner = outerFunction();
console.log(inner());




//----------------------------------------------------------------------------
// 10
//----------------------------------------------------------------------------
function outer() {
    let x = 1;
    return function inner() {
        return x++;
    };
}
const fn1 = outer();
console.log(fn1());
console.log(fn1());
console.log(fn1());




//----------------------------------------------------------------------------
// 11
//----------------------------------------------------------------------------
function createIncrementer() {
    let count = 0;
    return {
        increment: function() {
            count++;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
}
const incrementer = createIncrementer();
console.log(incrementer.increment());
console.log(incrementer.getCount());




//----------------------------------------------------------------------------
//12
//----------------------------------------------------------------------------
function counter() {
    let count = 0;
    return {
        increment: function() {
            count++;
        },
        getCount: function() {
            return count;
        }
    };
}
const c1 = counter();
c1.increment();
c1.increment();
console.log(c1.getCount());
const c2 = counter();
console.log(c2.getCount());



//----------------------------------------------------------------------------
// 13
//----------------------------------------------------------------------------
function outer() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}
const fnA = outer();
const fnB = outer();
console.log(fnA());
console.log(fnA());
console.log(fnB());



//----------------------------------------------------------------------------
// 14
//----------------------------------------------------------------------------
function createArray() {
    const arr = [];
    for (var i = 0; i < 3; i++) {
        arr.push(function() {
            return i;
        });
    }
    return arr;
}
const array = createArray();
console.log(array[0]());
console.log(array[1]());
console.log(array[2]());



//----------------------------------------------------------------------------
// 15
//----------------------------------------------------------------------------
function makeCounter() {
    let count = 0;
    return {
        increment() {
            count++;
            return count;
        },
        decrement() {
            count--;
            return count;
        }
    };
}
const counter = makeCounter();
console.log(counter.increment());
console.log(counter.decrement());




//----------------------------------------------------------------------------
// 16
//----------------------------------------------------------------------------
function outerFunction1() {
    var a = 10;
    function innerFunction() {
        console.log(a);
    }
    a++;
    return innerFunction;
}
let fn = outerFunction1();
fn();




//----------------------------------------------------------------------------
// 17
//----------------------------------------------------------------------------
function makeFunction() {
    let value = 0;
    return function() {
        value += 1;
        return value;
    };
}
const f1 = makeFunction();
const f2 = makeFunction();
console.log(f1());
console.log(f2());




//----------------------------------------------------------------------------
// 18
//----------------------------------------------------------------------------
function createClosure() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}
const closure1 = createClosure();
const closure2 = createClosure();
console.log(closure1());
console.log(closure2());



//----------------------------------------------------------------------------
// 19
//----------------------------------------------------------------------------
function createCounter() {
    let count = 0;
    return function() {
        return count++;
    };
}
const counter1 = createCounter();
const counter2 = createCounter();
console.log(counter1());
console.log(counter1());
console.log(counter2());


//----------------------------------------------------------------------------
// 20
//----------------------------------------------------------------------------
function outer() {
    let x = 1;
    return function inner() {
        let x = 2;
        return x;
    };
}
const fn = outer();
console.log(fn());



//----------------------------------------------------------------------------
//
//----------------------------------------------------------------------------