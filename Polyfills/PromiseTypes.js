const p1 = new Promise(function(resolve, reject){
    setTimeout(()=> resolve("P1 resolve"), 3000)
})
const p2 = new Promise(function(resolve, reject){
    setTimeout(()=> resolve("P2 resolve"), 1000)
})
const p3 = new Promise(function(resolve, reject){
    // setTimeout(()=> resolve("P3 resolve"), 2000)
    setTimeout(()=> reject("P3 reject"), 2000)
})

// Promise.all([p1, p2, p3])
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.error(err)
// })

Promise.allSettled([p1, p2, p3])
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.error(err)
})

Promise.race([p1, p2, p3])
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.error(err)
})

Promise.any([p1, p2, p3])
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.error(err)
})