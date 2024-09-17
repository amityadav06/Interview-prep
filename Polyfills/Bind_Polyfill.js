const user = {
    firstName: "Amit",
    lastName: 'Yadav'
}

function printName(s1, s2, s3){
    console.log(this.firstName + " " + this.lastName + " " + s1 + " " + s2 + " " + s3);
}
// const res = printName.bind(user, 'delhi', 'mumbai');
// res('agra');

Function.prototype.myBind = function(...args){
    let obj = this;
    let params = args.slice(1);
    return function(...args2){
        obj.apply(args[0], [...params, ...args2])
    }
}

const res = printName.myBind(user, 'delhi', 'mumbai');
res('agra')

// Polyfills
/*   
Map, filter, reduce, foreach, find
Call, bind, apply
once, memoize
promise, promise.all
debounce, throttle
flatArray, flatObject
string split
setTimeout, setInterval
*/