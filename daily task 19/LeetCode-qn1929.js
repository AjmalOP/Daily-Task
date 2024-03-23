// LEET CODE PROBLEM 1929 : https://leetcode.com/problems/concatenation-of-array/description/
var getConcatenation = function(nums,array = []) {
    for(i=0;i<nums.length * 2;i++)
    {
        if(i<nums.length)
        {
            array[i] = nums[i];
        }
        else
        {
            array[i] = nums[i-nums.length]
        }
    }
    return array;
};
getConcatenation([1,3,2,1]);