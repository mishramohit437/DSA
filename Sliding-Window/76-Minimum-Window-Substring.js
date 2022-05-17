// 76. Minimum Window Substring
// Hard

// 10259

// 535

// Add to List

// Share
// Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.

// A substring is a contiguous sequence of characters within the string.

 

// Example 1:

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
// Example 2:

// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.
// Example 3:

// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 var minWindow = function(s, t) {
    let map = {};
    let window = {};
     let l =0;
     let r=0;
     let maxLength = Infinity;
     let have = 0;
     
     
     let startIndex = null;
     let endIndex = null;
     
     if(t === '' ) return '';
 
     for(let char of t) {
         map[char] = ( map[char]||0)+1
     }
     
     while(r<s.length) {
         let char = s[r];
         
         window[char] = (window[char] ||0)+1;
         if(map.hasOwnProperty(char) && window[char] === map[char]) {
             have++;
         }
         while(have === Object.keys(map).length) {
             if(r-l+1 < maxLength) {
                 maxLength = r-l+1;
                 startIndex = l;
                 endIndex = r;
             }
             window[s[l]]--;
             if(map.hasOwnProperty(s[l]) && window[s[l]] !== map[s[l]]) {
                 have--;
             }
             l++;
         }
         r++;
     }
     if(maxLength !== Infinity ) {
         return s.substring(startIndex,endIndex+1);
     } else {
          return '';
     }
 };
 

 console.log(minWindow('ADOBECODEBANC','ABC'));