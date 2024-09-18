function PromisePolyfill(executor){
    let onResolve;
    let onReject;
    let isFullfilled = false;
    let isRejected = false;
    let isCalled = false;
    let value;

    function resolve(val){
        isFullfilled = true;
        value = val;

        if(typeof onResolve === 'function'){
            onResolve(val)
            isCalled = true;
        }
    }

    function reject(val){
        isRejected = true;
        value = val;
        if(typeof onReject === 'function'){
            onReject(val)
            isCalled = true;
        }      
    }

    this.then = function(callback){
        onResolve = callback;
        if(isFullfilled && !isCalled){
            isCalled = true;
            onResolve(value)
        }
        return this;
    }

    this.catch = function(callback){
        onReject = callback
        if(isRejected && !isCalled){
            isCalled = true;
            onReject(value)
        }
        return this;
    }

    try {
        executor(resolve, reject)
    } catch (error) {
        reject(error)
    }

}

const examplePolyfill = new PromisePolyfill((resolve, reject) => {
    setTimeout(() => {
        resolve(2)
    }, 2000);
})

examplePolyfill.then((data) => {
    console.log(data);
    return data
}).catch((err) => {
    console.log(err);
})