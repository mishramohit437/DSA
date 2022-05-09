// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

 

// Example 1:


// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
// Example 2:

// Input: height = [4,2,0,3,2,5]
// Output: 9
 

// Constraints:

// n == height.length
// 1 <= n <= 2 * 104
// 0 <= height[i] <= 105

const bruteForceSolution = (nums) => {
    let res= 0;

    for(let i=1;i<nums.length-1;i++) {
        let leftmax = nums[i];
        for(let j=0;j<i;j++) {
            leftmax = Math.max(leftmax,nums[j]);
        }
        let rightMax = nums[i];
        for(let j=i+1;j<nums.length;j++) {
            rightMax = Math.max(rightMax,nums[j]);
        }
        res += Math.min(leftmax,rightMax)-nums[i];
    }
    return res;
}


const usingTwoPointer = (height) => {
    let left =0;
    let leftMax = 0;
    let right = height.length-1;
    let rightMax = 0;
    let res =0;
    while(left<=right) {
        if( height[left] <= height[right] ) {
            if(leftMax < height[left]) leftMax = height[left];
            else res += leftMax-height[left];
            left++;
        } else {
            if(rightMax < height[right]) rightMax = height[right];
            else res += rightMax-height[right];
            right--;
        }
    }
    return res;
}
console.log(usingTwoPointer([0,1,0,2,1,0,1,3,2,1,2,1]));