//<!-- Write a sum method which can be invoked either ways.
//a. console.log(sum(2,3)); // Outputs 5
//b. console.log(sum(2)(3)); // Outputs 5 -->

// functions along with its lexical scope ic called closure
/* function outer(a,b){
    return function inner(c){
        return a+c;
    } 
}
var res = outer(7)(3);
console.log(res); */

//What is the output of this? Specify the reason.
/* var b = 3;
 (function(){
 var z = y = 3;
 })();
 console.log(y);
 console.log("z defined? " + (typeof z !== 'undefined'));
 console.log("y defined? " + (typeof y !== 'undefined')); */

 // 8. What is the output? Reason?
 var myObject = 
 {
    foo: "bar",
    func: function() 
    {
        var self = this;
        console.log("outer func: this.foo = " + this.foo);  // window
        console.log("outer func: self.foo = " + self.foo);  // bar
        (function() 
            {
                console.log(this);
                console.log(self);
            console.log("inner func: this.foo = " + this.foo);  // 
            console.log("inner func: self.foo = " + self.foo);  // bar
            return 1;
            }()
        );
    }
 };
 myObject.func();