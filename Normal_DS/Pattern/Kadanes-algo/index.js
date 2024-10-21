function maxSubArray(arr) {
    if (arr.length === 0) return { maxSum: 0, subarray: [] }; // Handle empty array case
  
    // Initialize variables
    let maxSoFar = arr[0];
    let maxEndingHere = arr[0];
    let start = 0; // Start index of the current subarray
    let end = 0;   // End index of the current subarray
    let s = 0;     // Start index of the maximum subarray found so far
  
    // Iterate through the array   [34, -50, 42, 14, -5, 86];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > maxEndingHere + arr[i]) {
        maxEndingHere = arr[i];
        s = i; // Update start index of the new subarray
      } else {
        maxEndingHere += arr[i];
      }
  
      if (maxEndingHere > maxSoFar) {
        maxSoFar = maxEndingHere;
        start = s; // Update start index of the maximum subarray
        end = i;   // Update end index of the maximum subarray
      }
    }
  
    // Extract the subarray using the start and end indices
    const subarray = arr.slice(start, end + 1);
  
    return { maxSum: maxSoFar, subarray: subarray };
  }
  
  // Example usage
  const array = [34, -50, 42, 14, -5, 86];
  const result = maxSubArray(array);
  console.log('Maximum Sum:', result.maxSum); // Output: Maximum Sum: 137
  console.log('Subarray:', result.subarray); // Output: Subarray: [34, -50, 42, 14, -5, 86]
  



/* 
Kadane's Algorithm
Kadane's Algorithm is efficient for this problem with a time complexity of O(n), where n is the number of elements in the array. 
Here's how the algorithm works:

Initialize two variables:

maxSoFar: This keeps track of the maximum sum of the subarray found so far.
maxEndingHere: This keeps track of the maximum sum of the subarray that ends at the current position.
Iterate through the array and update maxEndingHere and maxSoFar accordingly:

For each element, update maxEndingHere to be the maximum of the current element itself or the sum of maxEndingHere and the current element.
Update maxSoFar to be the maximum of maxSoFar and maxEndingHere.
Return maxSoFar as it contains the result.
*/


function KadaneAlogMaxSum(arr){
  let sum = 0;
  let max = arr[0];

  for(let i = 0; i<arr.length; i++){
    sum = sum + arr[i];
    max = Math.max(max, sum);
    if(sum < 0){
      sum = 0
    }
  }

  return max;
}

const arr = [34, -50, 42, 14, -5, 86];
console.log(KadaneAlogMaxSum(arr));

// ============================================================================
// If you want max values subarray then this is the solution
// ============================================================================

function KadaneAlogMaxSum(arr) {
  let sum = 0;
  let max = arr[0];
  let start = 0;
  let end = 0;
  let tempStart = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (sum > max) {
      max = sum;
      start = tempStart;
      end = i;
    }

    if (sum < 0) {
      sum = 0;
      tempStart = i + 1; // Reset the temporary start index
    }
  }

  // Extracting the subarray
  const subarray = arr.slice(start, end + 1);
  return { max, subarray };
}

const arr1 = [34, -50, 42, 14, -5, 86];
const result1 = KadaneAlogMaxSum(arr1);
console.log(result1);
