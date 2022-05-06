// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

 

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9

/**
 * @param {number[]} nums
 * @return {number}
 */
 const longestConsecutive = function(nums) {
    let set = new Set();
    //store element into set.

    for( let num of nums ) {
        set.add(num);
    }
    let longestSub = 0;

    for(let i=0;i<nums.length;i++) {
        let count = 0;
        if(!set.has(nums[i]-1)) {
            let ele = nums[i];
            while(set.has(ele)) {
                count++;
                ele++;
            }
        }
        longestSub = Math.max(longestSub,count);
    }
    return longestSub;
 }

console.log(longestConsecutive([100,4,200,1,3,2]));
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]));