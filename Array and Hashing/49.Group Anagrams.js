// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

const groupAnagrams = (strs) => {
    let result = [];
    let map = new Map();

    for(let str of strs ) {
        let sortedValue = str.split("").sort().join("");
        if(map.has(sortedValue)) {
            map.get(sortedValue).push(str);
        } else {
            map.set(sortedValue,[str]);
        }
    }

    for(let [key,value] of map ) {
        result.push(value);
    }
    return result;
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));