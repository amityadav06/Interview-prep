let p1 = function(time){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(time)
        }, time);
    })
}

let p2 = function(time){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('failed')
        }, time);
    })
}

let p3 = function(time){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(time)
        }, time);
    })
}

Promise.allSettled([p1(1000), p2(2000), p3(3000)])
    .then((data) => {
        console.log(data);
        
    })
    .catch((error)=> {
        console.log(error);
        
    })
