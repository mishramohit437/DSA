// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]


// Solution using object 

const topKFrequentElementUsingObject = (nums,k) => {
    let obj = {};

    //store all the element into the object

    for(let num of nums) {
        obj[num] = (obj[num]||0) + 1;
    }

    const finalArray = Object.entries(obj).sort((a,b)=>(b[1]-a[1]));

    let result = [];
    for(let i =0;i<k;i++) {
        result.push(finalArray[i][0]);
    }
    return result;
} 

const topKFrequentElementUsingMap = (nums,k) => {
    let map = new Map();

    //store all the element into the object
    for(let num of nums) {
        if(map.has(num)) {
            map.set(num,map.get(num)+1)
        } else {
            map.set(num,1);
        }
    }

    let finalArray = [...map.entries()].sort((a,b)=>(b[1]-a[1]));

    // Store the result
    let result = [];
    for(let i =0;i<k;i++) {
        result.push(finalArray[i][0]);
    }
    return result;
}
 
console.log(topKFrequentElementUsingMap([1,1,1,2,2,3],2));