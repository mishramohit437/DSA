// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]


// [1,2,3,4]  find suffix and prefix then multiply with each other
//     i
// (i-1)  (i+1)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 const productExceptSelf = function(nums) { 
    let product = [1];

    // make prefix 

    for(let i =1;i<nums.length;i++) {
        product[i] = product[i-1]*nums[i-1]
    }

    //let us take suffix
    let suffix = 1;
    for(let i =nums.length-1;i>=0;i--) {
        product[i] *= suffix;
        suffix *= nums[i];
    }

    return product;
     
 }

 // second approch using two array 

 const productExceptSelfSecond = function(nums) {
     let prefix = [1];
     let suffix = [];
     let product = [];
     suffix[nums.length-1] = 1;
     
    //  now make prefix array

    for(let i=1;i<nums.length;i++) {
        prefix[i] = prefix[i-1]*nums[i-1];
    }

    // // now make sufix of the array
    for(let i=nums.length-2;i>=0;i--) {
        suffix[i] = suffix[i+1]*nums[i+1];
    }
     
    for(let i=0;i<nums.length;i++) {
        product[i] = prefix[i] * suffix[i];
    }
    return product;
 }
 console.log(productExceptSelfSecond([1,2,3,4]));
 console.log(productExceptSelf([1,2,3,4]));
 