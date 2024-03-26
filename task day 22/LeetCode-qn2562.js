// LEET CODE PROBLEM 2562 : https://leetcode.com/problems/find-the-array-concatenation-value/

var findTheArrayConcVal = function(nums,x=0) {
    while(nums.length)
    {
        if(nums.length==1)
        {
            x = x+nums.shift();
        }
        else
        {
            x = x+Number(nums.shift()+""+nums.pop())
        }
    }
    return x;
};
