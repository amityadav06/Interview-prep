/* (function(){
    console.log(1);
    setTimeout(function(){
        console.log(2)
    },1000);
    setTimeout(function(){
        console.log(3)
    },0);
    console.log(4);
    return 1;
})(); */

const a = document.getElementById("1").value;
const b = document.getElementById("2").value;
const btn = document.getElementById("btn");


let res = 0;
btn.addEventListener("click",()=>{
    //const b = a.split(",")
    a.addEventListener("click", (e)=>{
        console.log(e.target.value);
        console.log(typeof(a)); 
    })
     
})
/*
var name = [ "john" ]; 
name.unshift( "charlie" ); 
name.unshift( "joseph", "Jane" ); 
console.log(name);
*/
/* var printMethod = { 
    hello: "world", 
    func: function() {
            var self = this;
            console.log("First Output : this.hello = " + this.hello);   //world
            console.log("Second output: self.hello = " + self.hello);   // world
                (function() {
                    console.log("Third Output: this.hello = " + this.hello); // undefined
                    console.log("Fourth output: self.hello = " + self.hello); // error
                }()); 
        } 
    };
          
printMethod.func(); */
 
/* var a =  123;
var b = "123";
if(a == b ){
    console.log("both are equal");
}else{
    console.log("not equal");
}



if(a === b ){
    console.log("both are equal");
}else{
    console.log("not equal");
} */

/* var v = 123;
if(v == isNaN()){
    console.log(true);
}
else{
    console.log(false);
} */


/* function x(){
    var a = 10;
    return function y(){
        var c = 20;
        console.log(a);
    }
}
const res = x();
console.log(res);
res();

const result = () => {

} */

