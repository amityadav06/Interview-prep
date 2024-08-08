const dummyAPI = (time)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(time)
        }, time);
    })
}

const taskArray = [dummyAPI(1000), dummyAPI(3000), dummyAPI(5000)];

const promisePolyfill = (taskArray) =>{
    return new Promise((resolve, reject)=>{
        const output = [];
        taskArray.forEach((promise, index)=>{
            promise.then((data)=>{
                output[index] = data;
                if(index === taskArray.length - 1) resolve(output)
            }).catch((err)=>{
                reject(err)
            })
        })
    })
}

promisePolyfill(taskArray).then((data)=>{
    console.log(`the output is ${data}`);
}).catch((err)=>{
    console.log(`the error is ${err}`);
})









