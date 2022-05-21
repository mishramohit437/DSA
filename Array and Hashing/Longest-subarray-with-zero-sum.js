// Problem Description
// Given an array of integers A, find and return whether the given array contains a non-empty subarray with a sum equal to 0.

// If the given array contains a sub-array with sum zero return 1, else return 0.



// Problem Constraints
// 1 <= |A| <= 100000

// -10^9 <= A[i] <= 10^9



// Input Format
// The only argument given is the integer array A.



// Output Format
// Return whether the given array contains a subarray with a sum equal to 0.



// Example Input
// Input 1:

//  A = [1, 2, 3, 4, 5]
// Input 2:

//  A = [-1, 1]


// Example Output
// Output 1:

//  0
// Output 2:

//  1

const checkSubarrayForZeroSum = (arr) => {
    let mysumSet = new Set();
    let result = 0;
    for(let num of arr) {
        result += num;
        if(result === 0 || mysumSet.has(result)) return 1;
        else mysumSet.add(result);
    }
    return 0;
}

console.log(checkSubarrayForZeroSum([1, 2, 3, 4, 5]));
console.log(checkSubarrayForZeroSum([1, 2, -2, 3, 4]));