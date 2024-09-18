/* 
Input: nums = [3,2,1,5,6,4], k = 2
Output: 5
*/

var findKthLargest = function(nums, k) {
    let maxHeap = []

    function insertIntoHeap(value){
        maxHeap.push(value);
        maxHeap.sort((a,b) => a -b);
        if(maxHeap.length > k){
            maxHeap.shift()
        }
    }

    for(let i = 0; i< nums.length; i++){
        insertIntoHeap(nums[i])
    }

    return maxHeap[0];
};