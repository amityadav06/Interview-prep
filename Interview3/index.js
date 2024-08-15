/* 
var one = document.getElementById("inp");
var two = document.getElementById("input");
var btn = document.getElementById("btn");
btn.addEventListener("click",()=>{
    var inp1 = document.getElementById("1").value;
    var inp2 = document.getElementById("2").value;
    var res = inp1 + inp2;
    alert(res);
    if(inp1 == "" || inp2 == ""){
        one.innerHTML = "input filed is empty"
    }
    var res = inp1.split("");
    if(res[0] == " "){
        one.innerHTML = "space is invalid "
    }
    if(!isNaN(res[0])){
        one.innerHTML = "input field can not start with number";
    }

 })
 */
//-------------------------------------------------------------------

/* SyntaxError coz name is html elment property you can not use like this
// use username instead var name

var name = [ "john" ]; 
name.unshift("charlie");
name.unshift( "joseph", "Jane" );
console.log(name); */
//["joseph", "Jane","charlie" , "john" ]

//--------------------------------------------------------------------------

/* function greet (person)
{ 
    console.log(person)
    if (person == { name: 'amy' }) 
    { return 'hey amy' } 
    else 
    { return 'hey arnold' }
}
console.log(greet({ name: 'amy' })) */
// When we compare two objects (including array and function), it compare the memory reference not the actual
// values, even person and { name: 'anu } has same values but they both are different inctances with different
// memory reference so its false

// hey amy--------------------------------------------------------
/* let dog = { 
    namee: 'doggo',
    sayName (){ 
        console.log(this.namee) 
        return this.namee
    } 
}
        
let a = dog.sayName */
// a()   // undefined
// When you assign a method from an object to a variable and then call it, 
// the this context is lost. As a result, the method no longer has access 
// to the original object's properties, leading to undefined being logged 
// and returned. To preserve the this context, you can use bind, call, or 
// apply methods to explicitly set the context when invoking the function.
// a.call(dog)
// a.apply(dog)
// let newA = a.bind(dog)
// newA()

//---------------------------------------------------------------
/* var obj = {firstName: 'sarwan',lastName :'kumar'};
function say(){ 
    console.log('' + this.firstName + ' ' + this.lastName); 
}
say.call(obj); */

// ------------------------------------------------------------- Advance interview
// var length = 4; 
// function callback() {
//     console.log(this.length); 
// } 
// const object = { 
//     length: 5, 
//     method() { 
//         arguments[0](); 
//     }
// }; 
// object.method(callback, 1, 2);