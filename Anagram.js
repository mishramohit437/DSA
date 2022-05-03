// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    let obj1 ={};
    let obj2 = {};
    if(s.length !== t.length ) return false;
    for(let char of s) {
        obj1[char] = (obj1[char] || 0)+1
    }
    
    for(let char of t) {
        obj2[char] = (obj2[char] || 0)+1
    }
    
    for(let key in obj1) {
        if(!obj2[key]) return false;
        if(obj2[key]!==obj1[key]) return false;
    }
    return true;
};

console.log(isAnagram("anagram", "nagaram"));