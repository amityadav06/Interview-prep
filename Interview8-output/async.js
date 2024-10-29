// 1
// console.log(1);
// setTimeout(() => console.log(2), 0);
// console.log(3);

// 2
// Promise.resolve()
//     .then(() => console.log(1))
//     .then(() => console.log(2));
// console.log(3);

// 3
// async function foo() {
//     return 42;
// }
// foo().then(console.log);

// 4
// async function bar() {
//     console.log(1);
//     await Promise.resolve();
//     console.log(2);
// }
// bar();

// 5
// console.log(1);
// setTimeout(() => console.log(2), 100);
// new Promise((resolve) => {
//     console.log(3);
//     resolve();
// }).then(() => console.log(4));

// 6
// async function test() {
//     console.log(1);
//     await Promise.resolve();
//     console.log(2);
// }
// test();
// console.log(3);

// 7
// const promise = new Promise((resolve) => {
//     console.log(1);
//     resolve(2);
// });
// promise.then((res) => console.log(res));
// console.log(3);


// 8
// async function f() {
//     console.log(1);
//     return Promise.resolve(2);
// }
// f().then(console.log);
// console.log(3);


// 9
// const p = new Promise((resolve) => {
//     setTimeout(() => resolve(1), 100);
// });
// p.then((res) => console.log(res));
// console.log(2);


// 10
// async function example() {
//     const value = await Promise.resolve(5);
//     console.log(value);
// }
// example();
// console.log(10);


// 11
// console.log(1);
// setTimeout(() => console.log(2), 0);
// setTimeout(() => console.log(3), 100);
// console.log(4);


// 12
// console.log(1);
// setTimeout(() => console.log(2), 0);
// Promise.resolve().then(() => console.log(3));
// console.log(4);


// 13
// setInterval(() => {
//     console.log('Hello');
// }, 100);
// console.log('World');


// 14
// setTimeout(() => console.log('A'), 0);
// setTimeout(() => console.log('B'), 0);
// console.log('C');


// 15
// let count = 0;
// const interval = setInterval(() => {
//     count++;
//     console.log(count);
//     if (count === 5) clearInterval(interval);
// }, 100);


// 16
// console.log(1);
// setTimeout(() => console.log(2), 0);
// Promise.resolve().then(() => console.log(3));
// console.log(4);


// 17
// async function getData() {
//     return 'Data';
// }
// getData().then(data => console.log(data));
// console.log('Fetching...');


// 18
// console.log('Start');
// setTimeout(() => console.log('Timeout'), 0);
// Promise.resolve().then(() => console.log('Promise'));
// console.log('End');


// 19
// async function f() {
//     await new Promise(resolve => setTimeout(resolve, 100));
//     console.log(1);
// }
// f();
// console.log(2);


// 20
// async function a() {
//     return Promise.resolve(5);
// }
// a().then(res => console.log(res + 5));
// console.log(10);


// 21
// async function outer() {
//     console.log(1);
//     await inner();
//     console.log(2);
// }
// async function inner() {
//     console.log(3);
//     return Promise.resolve();
// }
// outer();


// 22
// setTimeout(() => {
//     console.log('Timeout');
// }, 50);
// setTimeout(() => {
//     console.log('Another Timeout');
// }, 0);
// console.log('Synchronous log');


// 23
// console.log('A');
// setTimeout(() => {
//     console.log('B');
//     Promise.resolve().then(() => console.log('C'));
// }, 0);
// console.log('D');


// 24
// let p = Promise.resolve();
// p.then(() => console.log('Promise 1'));
// p.then(() => console.log('Promise 2'));
// console.log('Synchronous');


// 25
// async function func() {
//     console.log('First');
//     await Promise.resolve();
//     console.log('Second');
// }
// func();
// console.log('Third');


// 26
// console.log('Start');
// Promise.resolve()
//     .then(() => {
//         console.log('Middle');
//         return Promise.resolve();
//     })
//     .then(() => console.log('End'));


// 27
// async function process() {
//     console.log('Processing...');
//     await new Promise(resolve => setTimeout(resolve, 100));
//     console.log('Done');
// }
// process();
// console.log('After process');


// 28
// console.log('Before');
// setTimeout(() => {
//     console.log('Inside Timeout');
// }, 0);
// Promise.resolve().then(() => console.log('Inside Promise'));
// console.log('After');


// 29
// console.log('One');
// setTimeout(() => console.log('Two'), 0);
// setTimeout(() => console.log('Three'), 0);
// console.log('Four');


// 30
// async function load() {
//     console.log('Loading...');
//     await new Promise(resolve => setTimeout(resolve, 200));
//     console.log('Loaded');
// }
// load();
// console.log('Not waiting for load');
