/*
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be 
done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
*/

function addBinary(a,b) {
    // let { n , x , y } = { n:a+b , x:'' , y:'' }
    // for(i=0;n>=1;i++){
    //     x += n%2
    //     n = Math.floor(n/2) 
    // }
    // for(j=x.length-1;j>=0;j--){
    //     y += x[j]
    // }
    // return y

    // return (a+b).toString(2)

    res = ''
    c = a = b
    while(c>=1){
        res = c%2 + res
        c = Math.floor(c/2)
    }
    return res
}
console.log(addBinary(5,9));