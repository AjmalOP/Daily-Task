// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

// Example 1:

// Input: 
// n = 10 
// ["call","call","call"]
// Output: [10,11,12]
// Explanation: 
// counter() = 10 // The first time counter() is called, it returns n.
// counter() = 11 // Returns 1 more than the previous time.
// counter() = 12 // Returns 1 more than the previous time.
// Example 2:

// Input: 
// n = -2
// ["call","call","call","call","call"]
// Output: [-2,-1,0,1,2]
// Explanation: counter() initially returns -2. Then increases after each sebsequent call.
// 

// n = 10 ;
// const calls = ["call","call","call","call","call"]
// let out = []
// if(n>=-1000 && n<=1000 && calls.length<=1000){
//     for(let i=0; i<calls.length; i++){
//         if(calls[i]==="call"){
//             out.push(n+i)
//         }
//     }
// }

// var createCounter = function(n) {
//     n = 10 ;
//     const calls = ["call","call","call","call","call"]
//     return function() {
//         if(n>=-1000 && n<=1000 && calls.length<=1000){
//             calls.forEach((item,i,arr)=>item==="call"?arr[i]=n+i:item)
//         }console.log(arr);
//     };
    
// };
// createCounter(10)

var createCounter = function(n) {
    let counter = n
    return function (){
        return counter++
    }
}