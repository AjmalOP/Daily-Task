// LEET CODE PROBLEM 2578 : https://leetcode.com/problems/split-with-minimum-sum

var splitNum = function(num) {
    var sorted = num.toString().split("").sort();
    var x = "";
    var y = "";
    for(i=0;i<sorted.length;i++)
    {
        if(i%2==0)
        {
            x= x+sorted[i]
        }
        else
        {
            y= y+sorted[i]
        }
    }
    return Number(x)+Number(y)
};
