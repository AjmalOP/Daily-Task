// LEET CODE PROBLEM 2665 : https://leetcode.com/problems/is-object-empty/description/

var isEmpty = function(obj) {
    for(let x in obj) return false;
    return true
};