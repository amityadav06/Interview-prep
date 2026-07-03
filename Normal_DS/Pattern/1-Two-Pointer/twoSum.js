// Method 1 
// if array is sorted then only use this;

function twoSum (arr, target){
    let start = 0;
    let end = arr.length - 1

    // let arr1 = arr.sort((a, b) => a - b)

    while(start < end){
        if(arr1[start] + arr1[end] === target){
            return [start, end]
        }else if(arr1[start] + arr1[end] > target){
            end--
        }else{
            start++
        }
    }
    return [-1, -1]
}
// [1, 2, 7, 9, 22, 32, 61]
console.log(twoSum([22, 32, 1, 61, 7, 9, 2], 9));


function twoSum (arr, target){
    let map = new Map();

    for(let i = 0; i< arr.length; i++){
        if(map.has(target - arr[i])){
            return [map.get(target - arr[i]), i]
        }else{
            map.set(arr[i], i) // imp line, u need set i not 1
        }
    }
    return [-1, -1]
}
console.log(twoSum([22, 32, 1, 61, 7, 9, 2], 9));

//=======================================================
// 2 - Shift all zeros to the end of the array
//=======================================================
function shiftZeros(arr){
    let pos = 0;
    for (let i = 0;i<arr.length;i++){
        if(arr[i] !== 0){
            [arr[i], arr[pos]] = [arr[pos], arr[i]]
            pos++
        }
    }
    return arr
}
console.log(shiftZeros([0, 1, 0, 3, 12]));