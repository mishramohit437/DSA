// Given an integer A.

// Compute and return the square root of A.

// If A is not a perfect square, return floor(sqrt(A)).

// DO NOT USE SQRT FUNCTION FROM THE STANDARD LIBRARY.

// NOTE: Do not use the sqrt function from the standard library. Users are expected to solve this in O(log(A)) time.

var sqrt = function(num){ 
    let left = 1;
    let right = num;
    let ans =0;
    while(left<=right){
        let mid = Math.floor((left+right)/2);
        let sq = mid*mid;
        if(sq<=num) {
            ans=mid;
            left = mid+1;
        } else {
            right = mid-1;
        }
    }
    return ans;
}

console.log(sqrt(10));