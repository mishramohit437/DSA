// Given a string s, find the length of the longest substring without repeating characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

const logestSubsctringNaive = (str) => {
    let logestSubsctring = 0;
    for(let i=0;i<str.length;i++) {
        var visted = new Array(256);

        for(let j=i;j<str.length;j++) {
            if(visted[str.charAt(j)] === true) break;
            else visted[str.charAt(j)] = true; logestSubsctring = Math.max(logestSubsctring,j-i+1);
        }
    }
    return logestSubsctring;
}

const logestSubsctringUsingSlidingWindow = (str) => {
    let seen = {};
    let start = 0;
    let logestSubstring = 0;

    for(let i=0;i<str.length;i++) {
        let char = str[i];
        if(seen[char]) {
            start = Math.max(start,seen[char]);
        }
        logestSubstring = Math.max(logestSubstring,i-start+1);
        seen[char] = i+1;
    }
    return logestSubstring;
}
console.log(logestSubsctringNaive('abcabcbb'));
console.log(logestSubsctringUsingSlidingWindow('abcabcbb'));