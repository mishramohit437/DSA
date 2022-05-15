// https://leetcode.com/problems/permutation-in-string/
// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.
// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").

const checkInclusion = (s1,s2) => {
    let map = {};

    for(let char of s1) {
        map[char] = (map[char]||0)+1;
    }

    let l=0;
    let i=0;
    let count = s1.length;
    while(i<s2.length) {
        let element = s2[i];
        if(map[element]) {
            if(count === s1.length) l =i;
            count--;
            map[element]--;
            if(count === 0 ) return true;
            i++;
        } else {
            if( count === s1.length ) {
                i++
            } else {
                count++;
                map[l]++;
                l++;
            }
        }
    }
    return false;
 }

 console.log(checkInclusion('ab','eidbaooo'));
 console.log(checkInclusion('ab','eidboaoo'));

                        //   l
//  s1 = ab             s2=eidbaooo    map = { a:1,b:1}  count =1
//                            i
