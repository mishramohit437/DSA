// https://leetcode.com/problems/valid-parentheses/
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) { 
    let stack = [];
    for(let i=0;i<s.length;i++) {
        let char = s[i];
        if( char === '{') {
            stack.push('}');
        } else if(char === '(')  {
            stack.push(')');
        } else if( char === '[') {
            stack.push(']');
        } else if( char !== stack.pop()) {
            return false;
        }
    }
    return stack.length === 0;
 }

 console.log(isValid('()'));
 console.log(isValid('()[]{}'));
 console.log(isValid('(]'));