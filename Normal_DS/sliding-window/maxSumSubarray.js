// Find maximum sum sub array with window size k

function maxSumSubarray(arr, k){
    let i = 0;
    let j = 0;
    let windowSum = 0;
    let maxSum = 0;

    while(j < arr.length){
        windowSum = windowSum + arr[j];

        if(j - i + 1 < k){
            j++;
        }else if(j - i + 1 === k){
            // if we hit the window size
            maxSum = Math.max(maxSum, windowSum);
            windowSum = windowSum - arr[i];
            i++;
            j++
        }
    }

    return maxSum
}

// Example usage:
const arr = [2, 1, 5, 1, 3, 2];
const k = 3;
console.log(maxSumSubarray(arr, k)); // Output: 9