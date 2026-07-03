const expensive = () => {
    console.log('called resize');
}
// window.addEventListener('resize', expensive); // before


const throttle = (fn, limit) => {
    let isCalled = true
    return function(){
        let context = this;
        let args = arguments;
        if(isCalled){
            fn.apply(context, args)
            isCalled = false;
            setTimeout(() => {
                isCalled = true
            }, limit);
        }
    }
}
const betterExpensive = throttle(expensive, 300)
window.addEventListener('resize', betterExpensive)

/* 
These are tecniques to imporve the performance of the web page by limiting the number of times a function is called.

Debounce - in this no matter how many times the user fires the event, the attached function will be called only 
           after the specified time once the user has stopped firing the event.

Throttling - it is called no matter how many  the user has fired the event, the attached function will be called only
             once in a given timer interval.
*/

// const obj = { a: 1 }; Object.freeze(obj); obj.a = 999; obj.b = 2; console.log(obj)


// var x = 1; 
// function foo() 
// { console.log(x); 
// var x = 2; 
    
// } 
// foo();

// Object.create(null) vs {}
// React portal
// code spliting
// react lazy loading
// intersection observer api
// nextjs
// server components
// how to make direct db api call in next
// why do we use redux if we already have context api
// Promise.allSettled scaniro question
// typescript any vs unknown
// why we use next js
// accessablity for blind people
// prevention for xss or csrf