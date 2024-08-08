// In loops 'this' will refer to array we attach to map, filter and reduce
// this we need to remember whhile writing the polyfill of these loop methods


Array.prototype.myReduce = function(callBackfun, initialValue){
    // here this refers to array = [1, 2, 3, 4, 5]
    // if its empty, null or undeined then we will throw error
    if(!this){
        throw new Error('Array is not defined')
    }
    let array = this;
    let index = 0;
    let accumulator
    let n = array.length;

    if(!n){
        if(initialValue){
            return initialValue;
        }else{
            throw new Error("You need to pass intial value if array is empty")
        }
    }

    if(initialValue){
        accumulator = initialValue
    }else{
        accumulator = array[0];
        index++;
    }

    while( index < n ){
        accumulator = callBackfun(accumulator, array[index], index, array);
        index++;
    }
    return accumulator;
}

const arr = [1, 2, 3, 4, 5]
const res = arr.myReduce((acc, index)=>{
    return acc + index;
})
console.log(res);