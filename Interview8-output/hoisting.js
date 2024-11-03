console.log(x);
var x = 5;



function test() {
    console.log(y);
    var y = 10;
}
test();



function test() {
    console.log(y);
    var y = 10;
}
test();


function example() {
    console.log(z);
}
example();
var z = 20;


var b = 3;
function foo() {
    console.log(b);
    var b = 5;
}
foo();


console.log(typeof c);
var c = "Hello";


console.log(d);
let d = 15;


console.log(e);
var e = 25;
function bar() {
    var e = 30;
    console.log(e);
}
bar();


function outer() {
    inner();
    function inner() {
        console.log('Inner');
    }
}
outer();



console.log(f);
if (true) {
    var f = 40;
}



console.log(g);
var g = 50;
console.log(g);


function outerFunc() {
    console.log(h);
    var h = "Outer";
}
outerFunc();



console.log(i);
let i = 60;



console.log(j);
const j = 70;



var k = 80;
console.log(k);
function testK() {
    var k = 90;
    console.log(k);
}
testK();



var l;
console.log(l);
l = 100;



console.log(m);
var m = "Hello";
console.log(m);



function nFunc() {
    console.log(n);
}
nFunc();
var n = 110;



function testO() {
    console.log(o);
    var o = 120;
}
testO();



console.log(p);
function pFunc() {
    var p = 130;
    console.log(p);
}
pFunc();



var q = 140;
function testQ() {
    var q;
    console.log(q);
    q = 150;
}
testQ();



console.log(r);
if (false) {
    var r = 160;
}




var s = 170;
function testS() {
    console.log(s);
    var s = 180;
}
testS();



console.log(t);
t = 190;
var t;



console.log(u);
var u = 200;
function testU() {
    console.log(u);
    var u = 210;
}
testU();




var v = 220;
function testV() {
    console.log(v);
    v = 230;
}
testV();



console.log(w);
function testW() {
    var w = 240;
}
testW();




var x = 250;
function testX() {
    console.log(x);
    var x = 260;
}
testX();



var y = 270;
function testY() {
    console.log(y);
    var y = 280;
}
testY();


console.log(z);
let z = 290;

