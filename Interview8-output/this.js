// 1
// function test() {
//     console.log(this);
// }
// test();

// 2
// const obj = {
//     value: 42,
//     getValue: function() {
//         return this.value;
//     }
// };
// console.log(obj.getValue());

// 3
// const obj = { a: 1, b: function() { return this.a; } };
// const fn = obj.b;
// console.log(fn());

// 4
// const obj = {
//     value: 100,
//     method: function() {
//         const inner = () => {
//             console.log(this.value);
//         };
//         inner();
//     }
// };
// obj.method();

// 5
// function Foo() {
//     this.value = 1;
//     setTimeout(function() {
//         console.log(this.value);
//     }, 100);
// }
// new Foo();

// 6
// const obj = {
//     name: 'Alice',
//     greet: function() {
//         console.log('Hello, ' + this.name);
//     }
// };
// const greet = obj.greet;
// greet();

// 7
// const obj = {
//     x: 10,
//     getX: function() {
//         return this.x;
//     }
// };
// const getX = obj.getX;
// console.log(getX());


// 8
// const obj = {
//     value: 2,
//     multiply: function(factor) {
//         return this.value * factor;
//     }
// };
// console.log(obj.multiply(3));


// 9
// const person = {
//     name: 'John',
//     sayName: function() {
//         console.log(this.name);
//     }
// };
// setTimeout(person.sayName, 100);


// 10
// function Bar() {
//     this.value = 5;
// }
// Bar.prototype.getValue = function() {
//     return this.value;
// };
// const bar = new Bar();
// console.log(bar.getValue());


// 11
// const obj = {
//     num: 20,
//     getNum: function() {
//         return () => this.num;
//     }
// };
// const numFunc = obj.getNum();
// console.log(numFunc());


// 12
// const obj1 = {
//     val: 10,
//     show: function() {
//         console.log(this.val);
//     }
// };
// const obj2 = { val: 20 };
// obj1.show.call(obj2);


// 13
// const fn = function() {
//     console.log(this);
// };
// fn();


// 14
// const obj = {
//     value: 1,
//     log: () => {
//         console.log(this.value);
//     }
// };
// obj.log();


// 15
// function testThis() {
//     console.log(this);
// }
// const test = testThis.bind({ key: 'value' });
// test();


// 16
// const obj = {
//     a: 1,
//     b: function() {
//         return this.a + this.c();
//     },
//     c: () => {
//         return 2;
//     }
// };
// console.log(obj.b());


// 17
// const obj = {
//     name: 'Doe',
//     say: function() {
//         console.log(this.name);
//     }
// };
// const say = obj.say;
// say();


// 18
// const obj = {
//     value: 1,
//     add: function() {
//         const increment = () => {
//             this.value++;
//         };
//         increment();
//     }
// };
// obj.add();
// console.log(obj.value);


// 19
// const user = {
//     name: 'Bob',
//     greet: function() {
//         console.log(`Hi, I'm ${this.name}`);
//     }
// };
// const greet = user.greet;
// greet();


// 20
// const obj = {
//     a: 1,
//     b: {
//         a: 2,
//         getA: function() {
//             return this.a;
//         }
//     }
// };
// console.log(obj.b.getA());


// 21
// function outer() {
//     this.value = 10;
//     inner();
// }
// function inner() {
//     console.log(this.value);
// }
// new outer();


// 22
// const obj = {
//     a: 1,
//     func: function() {
//         return function() {
//             return this.a;
//         };
//     }
// };
// const fn = obj.func();
// console.log(fn());


// 23
// const obj = {
//     value: 1,
//     getValue: function() {
//         return this.value;
//     }
// };
// const getValue = obj.getValue.bind({ value: 2 });
// console.log(getValue());


// 24
// const foo = {
//     bar: 1,
//     baz: function() {
//         console.log(this.bar);
//     }
// };
// const baz = foo.baz;
// baz();


// 25
// const obj = {
//     value: 3,
//     multiply: function(factor) {
//         return this.value * factor;
//     }
// };
// const multiply = obj.multiply;
// console.log(multiply(2));


// 26
// const obj = {
//     x: 10,
//     getX: function() {
//         return () => this.x;
//     }
// };
// const getX = obj.getX();
// console.log(getX());


// 27
// const obj = {
//     count: 0,
//     increment: function() {
//         this.count++;
//         setTimeout(() => console.log(this.count), 1000);
//     }
// };
// obj.increment();


// 28
// const obj = {
//     prop: 'value',
//     method: function() {
//         console.log(this.prop);
//     }
// };
// const method = obj.method;
// method();


// 29
// function Person() {
//     this.age = 0;
//     setInterval(function() {
//         this.age++;
//     }, 1000);
// }
// const p = new Person();
// setTimeout(() => console.log(p.age), 3000);


// 30
// const obj = {
//     value: 42,
//     method: function() {
//         console.log(this.value);
//     }
// };
// const reference = obj.method;
// reference();


// 31
// const obj = {
//     value: 42,
//     getValue: function() {
//         return (() => this.value)();
//     }
// };
// console.log(obj.getValue());


// 32
// (function() {
//     console.log(this);
// })();


// 33
// const obj = {
//     name: 'Alice',
//     greet: function() {
//         return (() => 'Hello, ' + this.name)();
//     }
// };
// console.log(obj.greet());


// 34
// (function() {
//     this.value = 1;
// })();
// console.log(typeof value);


// 35
// const obj = {
//     a: 1,
//     func: function() {
//         (function() {
//             console.log(this.a);
//         })();
//     }
// };
// obj.func();


// 36
// const obj = {
//     value: 5,
//     logValue: function() {
//         setTimeout(function() {
//             console.log(this.value);
//         }, 100);
//     }
// };
// obj.logValue();


// 37
// const obj = {
//     value: 10,
//     log: function() {
//         console.log(this.value);
//         setTimeout(() => {
//             console.log(this.value);
//         }, 100);
//     }
// };
// obj.log();


// 38
// const obj = {
//     count: 0,
//     increment: function() {
//         setTimeout(() => {
//             this.count++;
//             console.log(this.count);
//         }, 1000);
//     }
// };
// obj.increment();


// 39
// const obj = {
//     num: 3,
//     start: function() {
//         setTimeout(function() {
//             console.log(this.num);
//         }, 500);
//     }
// };
// obj.start();


// 40
// const obj = {
//     name: 'John',
//     greet: function() {
//         setTimeout(function() {
//             console.log('Hello, ' + this.name);
//         }, 100);
//     }
// };
// obj.greet();


// 41
// const obj = {
//     value: 1,
//     start: function() {
//         setInterval(function() {
//             console.log(this.value);
//         }, 1000);
//     }
// };
// obj.start();


// 42
// const counter = {
//     count: 0,
//     start: function() {
//         setInterval(() => {
//             this.count++;
//             console.log(this.count);
//         }, 500);
//     }
// };
// counter.start();


// 43
// const obj = {
//     value: 'A',
//     printValue: function() {
//         setInterval(function() {
//             console.log(this.value);
//         }, 1000);
//     }
// };
// obj.printValue();


// 44
// const obj = {
//     a: 5,
//     b: function() {
//         setInterval(function() {
//             console.log(this.a);
//         }, 200);
//     }
// };
// obj.b();


// 45
// const obj = {
//     count: 0,
//     start: function() {
//         setInterval(() => {
//             this.count++;
//             console.log(this.count);
//         }, 1000);
//     }
// };
// obj.start();
