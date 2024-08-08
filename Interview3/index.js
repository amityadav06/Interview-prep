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

// hey amy--------------------------------------------------------
/* let dog = 
    { 
        name: 'doggo',
        sayName (){ 
            console.log(this.name) 
        } 
    }
        
let sayName = dog.sayName 
sayName() */

//---------------------------------------------------------------
/* var name = {firstName: 'sarwan',lastName :'kumar'};
function say(){ 
    console.log('' + this.firstName + ' ' + this.lastName); 
}
say.call(name); */