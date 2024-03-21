// LEET CODE PROBLEM 2665 : https://leetcode.com/problems/array-reduce-transformation/

var reduce = function(nums, fn, init) {
    for(const x of nums){
        init = fn(init,x);
    }
    return init
};