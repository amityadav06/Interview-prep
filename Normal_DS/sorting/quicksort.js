/* 
  QuickSort works on divide and conquer. In this we will take first element of array as pivot. 
  and then whichever elements are less than pivot we will push it into left array and whichever are
  greater than pivot will be pushed to right array, and this will be done recursively until array
  has only one element.
*/


// Ques 6: Implement Quick Sort in JavaScript
// Write a function to sort the given array nums in ascending order.

// Input: nums = [8,3,5,4,7,6,1,2]  ----->>>>>  Output: [1,2,3,4,5,6,7,8]

function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const pivot = arr[0];
    const left = [];
    const right = [];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  
    return [...quickSort(left), pivot, ...quickSort(right)];
  }
  console.log(quickSort([8,3,5,4,7,6,1,2]));
  
  
  // Time Complexity -
  // Average Case - O(nlog n)
  // Best Case - O(nlog n)
  // Worst Case - O(n^2)
  
  // Space Complexity -
  // Average Case - O(log n)
  // Worst Case - O(n)