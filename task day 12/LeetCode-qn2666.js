// LEET CODE PROBLEM 2648 :https://leetcode.com/problems/allow-one-function-call/

var once = function(fn) {
    x = false
    return function(...args){
       if (x){
           return;
       }else{
           x = true ;
           return fn(...args)
       }
    }
};