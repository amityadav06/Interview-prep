const dummyAPI = (time)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(time)
        }, time);
    })
}

const taskArray = [
    dummyAPI(1000),    // api 1
    dummyAPI(3000),    // api 2
    dummyAPI(5000)     // api 3
];

const allPromisePolyfill = (taskArray) =>{
    return new Promise((resolve, reject)=>{
        const output = [];
        taskArray.forEach((currentPromise, index)=>{
            currentPromise.then((data)=>{
                output[index] = data;
                if(index === taskArray.length - 1) resolve(output)
            }).catch((err)=>{
                reject(err)
            })
        })
    })
}

allPromisePolyfill(taskArray).then((data)=>{
    console.log(`the output is ${data}`);
}).catch((err)=>{
    console.log(`the error is ${err}`);
})









