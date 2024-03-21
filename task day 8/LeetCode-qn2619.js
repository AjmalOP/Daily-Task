// LEET CODE PROBLEM 2665 : https://leetcode.com/problems/array-prototype-last/

Array.prototype.last = function() {
    return this.length? this[this.length-1]: -1;
};