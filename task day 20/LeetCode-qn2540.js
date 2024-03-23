 
var getCommon = function(nums1, nums2,i=0,k=0)
{
    while (i < nums1.length && k < nums2.length)
    {
        while (i < nums1.length && nums1[i] < nums2[k])
        {
            i++;
        }
        while (k < nums2.length && nums2[k] < nums1[i])
        {
            k++;
        }
        if (nums1[i] == nums2[k])
        {
            return nums1[i]
        }
    }
    return -1
};
   
getCommon([1,2,3], [2,4]);
