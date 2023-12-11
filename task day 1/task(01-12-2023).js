// Given a string and an array of index numbers, return the characters of the string rearranged to be in the order specified by the accompanying array.

// Ex:  scramble('abcd', [0,3,1,2]) -> 'acdb'

const string = "abcd";
const array = [0,3,1,2];
let txt = ""

for(i=0;i<string.length;i++){
    for(j=0;j<array.length;j++){
        if(i==array[j]){
            txt += string[j]
            break
        }
    }
}
console.log(txt);