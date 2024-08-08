//------------------------------------Closures with SetTimeout--------------------------------------

function x(){
    var i = 1;
    setTimeout(()=>{
        console.log(i);
    },5000);
}
x();

function x(){
    for(var i = 1;i<=5;i++){
        setTimeout(()=>{
            console.log(i);
        },1000)
    }
}
x()
//-------------------------------------------Closures--------------------------------------------------

/* function z(){
var b = 900;
console.log(b);
   return function x(){
        var a = 7;
        return function y(){
            console.log(a,b);
        }
    }
}
const c = z();
console.log(c); */

/* function a(){
    var b = 10;
    return function y(){
        console.log(b);
    }
}
const c = a();
console.log(c);
c(); */
//--------------------------------Lexical Environment and Lexical Scope-----------------------
/* 
function a(){
    var b = 10;
    c();
    function c(){
        console.log(b);
    }
}
a(); */

//---------------------------------How JS code works behind the seen HOISTING-------------------------------------------------
/* getName();
console.log(x);
console.log(getName);
var x = 7;
function getName(){
    console.log("Namaste Javascript");
}
getName();
console.log(x);
console.log(getName); */

// --------------------------------How Function works in Variable Environment--------------------

/* var x = 1;
a();
b();
console.log(x);

function a(){
    var x = 10;
    console.log(x);
}

function b(){
    var x = 100;
    console.log(x);
} */



/* ---------------------- Example for interview ------------------------------------- */

function simpleFun(){
    for(let i = 1;i<=5;i++){
        function complexFun(x){
            setTimeout(()=>{
                console.log(x);
            },x * 1000)
        }
        complexFun(i)
    }
    console.log('Hello from simple function');
}
simpleFun()

function simpleFun(){
    for(var i = 1;i<=5;i++){
        setTimeout(()=>{
            console.log(i);
        },i * 1000)
    }
    console.log('Hello from simple function');
}
simpleFun()

function simpleFun(){
    for(let i = 1;i<=5;i++){
        setTimeout(()=>{
            console.log(i);
        },i * 1000)
    }
    console.log('Hello from simple function');
}
simpleFun()