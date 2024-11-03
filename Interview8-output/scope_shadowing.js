// var x = 1;
// function foo() {
//     var x = 2;
//     console.log(x);
// }
// foo();
// console.log(x);


// let a = 5;
// if (true) {
//     let a = 10;
//     console.log(a);
// }
// console.log(a);



// function outer() {
//     var y = 1;
//     function inner() {
//         var y = 2;
//         console.log(y);
//     }
//     inner();
//     console.log(y);
// }
// outer();



// const z = 100;
// function test() {
//     console.log(z);
//     const z = 200; // Will this line throw an error?
// }
// test();




// var a = 1;
// function testScope() {
//     var a = 2;
//     if (true) {
//         var a = 3;
//         console.log(a);
//     }
//     console.log(a);
// }
// testScope();




// let outer = 'outer';
// function scopeTest() {
//     let outer = 'inner';
//     console.log(outer);
// }
// scopeTest();
// console.log(outer);



// function firstFunction() {
//     let a = 10;
//     secondFunction();
// }

// function secondFunction() {
//     console.log(a);
// }
// firstFunction();



// function outer() {
//     let x = 10;
//     function inner() {
//         console.log(x);
//     }
//     return inner;
// }
// const innerFunc = outer();
// innerFunc();




// var x = 1;
// function outerFunc() {
//     var x = 2;
//     function innerFunc() {
//         var x = 3;
//         console.log(x);
//     }
//     innerFunc();
// }
// outerFunc();
// console.log(x);



// let name = 'Global';
// function greet() {
//     let name = 'Local';
//     console.log('Hello, ' + name);
// }
// greet();
// console.log('Hello, ' + name);



// var a = 'first';
// if (true) {
//     var a = 'second';
//     console.log(a);
// }
// console.log(a);




// let value = 1;
// function outer() {
//     let value = 2;
//     function inner() {
//         console.log(value);
//     }
//     inner();
// }
// outer();




// const num = 42;
// function example() {
//     const num = 50;
//     console.log(num);
// }
// example();
// console.log(num);




// function test() {
//     var x = 10;
//     if (true) {
//         var x = 20;
//         console.log(x);
//     }
//     console.log(x);
// }
// test();




// let a = 'outer';
// function scopeExample() {
//     let a = 'inner';
//     console.log(a);
// }
// scopeExample();
// console.log(a);




// var outerVar = 'outer';
// function outerFunc() {
//     var innerVar = 'inner';
//     function innerFunc() {
//         console.log(innerVar);
//     }
//     innerFunc();
// }
// outerFunc();




// var count = 0;
// function increment() {
//     count++;
//     console.log(count);
// }
// increment();
// increment();



// let outer = 1;
// function func() {
//     let outer = 2;
//     return function innerFunc() {
//         console.log(outer);
//     };
// }
// const inner = func();
// inner();



// var y = 5;
// function outer() {
//     var y = 10;
//     function inner() {
//         console.log(y);
//     }
//     inner();
// }
// outer();
// console.log(y);



// const outer = 'Hello';
// function test() {
//     const outer = 'World';
//     console.log(outer);
// }
// test();
// console.log(outer);



// var x = 10;
// (function() {
//     var x = 20;
//     console.log(x);
// })();
// console.log(x);



// let a = 'global';
// (function() {
//     let a = 'local';
//     console.log(a);
// })();
// console.log(a);



// (function() {
//     var message = 'Hello from IIFE';
//     console.log(message);
// })();
// console.log(message); // Will this line throw an error?




// var num = 5;
// (function() {
//     var num = 10;
//     console.log(num);
// })();
// console.log(num);



// const outer = 'outer';
// (function() {
//     const outer = 'inner';
//     console.log(outer);
// })();
// console.log(outer);
