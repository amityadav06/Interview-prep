function rotateArray(arr, k) {
    const n = arr.length;
    k = k % n;  // Normalize k to be within the bounds of the array length

    if (k === 0) return arr;  // No rotation needed if k is 0

    // Helper function to reverse a portion of the array
    function reverse(start, end) {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]]; // Swap elements
            start++;
            end--;
        }
    }

    // Reverse the whole array
    reverse(0, n - 1);

    // Reverse the first k elements
    reverse(0, k - 1);

    // Reverse the rest of the array
    reverse(k, n - 1);

    return arr;
}

// Example usage:
const arr = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
console.log(rotateArray(arr, k));  // Output: [5, 6, 7, 1, 2, 3, 4]


/* 

How It Works

Reverse the Entire Array: This step changes the array from [1, 2, 3, 4, 5, 6, 7] to [7, 6, 5, 4, 3, 2, 1].
Reverse the First k Elements: Reversing the first 3 elements [7, 6, 5] results in [5, 6, 7, 4, 3, 2, 1].
Reverse the Remaining Elements: Reversing the remaining elements [4, 3, 2, 1] results in [5, 6, 7, 1, 2, 3, 4].
This approach ensures that the array is rotated efficiently and in-place with a time complexity of O(n) and 
space complexity of O(1).

*/