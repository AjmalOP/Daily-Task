// LEET CODE PROBLEM 2609 : https://leetcode.com/problems/find-the-longest-balanced-substring-of-a-binary-string

var findTheLongestBalancedSubstring = function(s) {
    let zero = 0;
    let one = 0;
    let long = 0;
    for(i=0;i<s.length;i++)
    {
        if(s[i]==0)
        {
            if(s[i-1]==1)
            {
                zero = 0;
                one = 0;
                zero++;
            }
            else
            {
                zero++;
            }
        }
        if(s[i]==1)
        {
            one++
        }
        if(long<one&&long<zero)
        {
            long=Math.min(one,zero);
        }
    }
    return 2*long;
};
