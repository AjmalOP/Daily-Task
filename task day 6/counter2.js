// LEET CODE PROBLEM 2665 : https://leetcode.com/problems/counter-ii/

var createCounter = function(init) {
    let count = init ;
    return{
        increment : ()=> count +=1,
        reset : () => count = init,
        decrement : ()=> count -=1
    }
};

var createCounter = function(init) {
    const count = init ;
    return{
        increment : ()=> init +=1,
        reset : () => init = count,
        decrement : ()=> init -=1
    }
};