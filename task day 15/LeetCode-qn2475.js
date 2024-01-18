// LEET CODE PROBLEM 2475 : https://leetcode.com/problems/number-of-unequal-triplets-in-array/


var unequalTriplets = function(nums,count = 0) {
    for(let i=0 ;i<nums.length-2 ;i++){
        for(let j=i+1 ;j<nums.length-1 ;j++){
           for(let k=j+1 ;k<nums.length ;k++){
               if(i<j && j<k){
                   if(nums[i] !== nums[j] && nums[i] !== nums[k] && nums[j] !== nums[k]){
                       count ++
                   }
               }
            } 
        }
    }
    return count
};