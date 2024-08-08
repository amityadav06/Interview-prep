const arr = [1, 2, 3, 4, 5, 6];
// const res = arr.filter((element, index)=>{
//     return element % 2 == 0;
// })
// console.log(res);

Array.prototype.myfilter = function(callBackFun){
    let output = [];
    this.forEach((element, index)=>{
        if(callBackFun(element, index, this)){
            output.push(element)
        }
    })
    return output
}

const res = arr.myfilter((element, index)=>{
    return element % 2 == 0;
})
console.log(res);