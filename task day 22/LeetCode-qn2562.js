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
