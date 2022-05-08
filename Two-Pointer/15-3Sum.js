
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

 

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

var threeSum = function(nums) {
    let result = [];
    if( nums.length < 3 ) return result;
    nums.sort((a,b)=>a-b);
    for(let i=0;i<nums.length-2;i++) {
            
        if(i >0 & nums[i] === nums[i-1]) continue;
           let left = i+1;
            let right = nums.length-1;
            while(left<right) {
                let sum = nums[left]+nums[right]+nums[i];
                if(sum === 0 )  {
                    result.push([nums[left],nums[right],nums[i]]);
                    while (left < right && nums[left] == nums[left + 1]) {
                        left++;
                    }
                    while (left < right && nums[right] == nums[right - 1]) {
                        right--;
                    }
                    left++;
                    right--;
                }
                else if(sum>0) right--;
                else left++;
            } 
        
    }
    return result;
};
console.log(threeSum([-1,0,1,2,-1,-4]));