// LEET CODE PROBLEM 2441 : https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative

var findMaxK = function(nums) {
    z = []
    for( let x of nums){
        nums.filter((a)=>{
            a === -x? z.push(x):null
        })
    }
    return z.length?Math.max(...z):-1
};