//============================================================================================
//                                    MERGE SORT - RoadSideCoder
//============================================================================================
/* Merge sort is a popular sorting algorithm known for its efficiency and stability. 
It follows the divide-and-conquer approach to sort a given array of elements.

Divide: Divide the list or array recursively into two halves until it can no more be divided.
Conquer: Each subarray is sorted individually using the merge sort algorithm.
Merge: The sorted subarrays are merged back together in sorted order. The process continues
until all elements from both subarrays have been merged. */

// Ques 5: Implement Merge Sort in JavaScript
// Write a function to sort the given array nums in ascending order.

// Input: nums = [8,3,5,4,7,6,1,2]  ----->>>>>  Output: [1,2,3,4,5,6,7,8]

function mergeSort(arr) {
    // O(log n)
    // base case
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
  
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
  
    return merge(left, right);
  }
  
  function merge(left, right) {
    // O(n)
    let sortedArr = [];
  
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        sortedArr.push(left.shift());
      } else {
        sortedArr.push(right.shift());
      }
    }
  
    return [...sortedArr, ...left, ...right];
  }
  
  // Time Complexity - O(nlog n)
  // Space Complexity - O(n)
  console.log(mergeSort([8, 3, 5, 4, 7, 6, 1, 2]));