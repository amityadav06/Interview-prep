//==================================================================
// By Roadside Coder
//==================================================================

//==================================================================
// Call
//==================================================================

const user = {
    firstName: "Amit",
    lastName: 'Yadav'
}

function printName(s1, s2, s3){
    console.log(this.firstName + " " + this.lastName + " " + s1 + " " + s2 + " " + s3);
}

Function.prototype.myCall = function(context, ...args){
    if(typeof this !== 'function'){
        throw new Error('Its not callable')
    }
    context.fn = this;
    context.fn(...args)
}

printName.myCall(user, 'Delhi', 'Mumbai', 'Agra')

//==================================================================
// Apply
//==================================================================

Function.prototype.myApply = function(context, args){
    if(typeof this !== 'function'){
        throw new Error('Its not callable')
    }
    if(!Array.isArray(args)){
        throw new Error('Arguments are not in array')
    }
    context.fn = this;
    context.fn(...args)
}

printName.myApply(user, ['Delhi', 'Mumbai', 'Agra'])

//==================================================================
// Bind
//==================================================================


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