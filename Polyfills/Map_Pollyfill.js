const arr = [1, 2, 3, 4, 5];
// const res = arr.map((item)=>{
//     return item * 2;
// })
// console.log(res);

Array.prototype.myMap = function(callBackFun){
    let output = [];
    this.forEach((element, index)=>{
        output.push(callBackFun(element, index, this))
    })
    return output;
}
const res = arr.myMap((item, index)=>{
    return item * 2;
})
console.log(res);