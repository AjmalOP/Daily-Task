https://leetcode.com/problems/alternating-digit-sum/descript

var alternateDigitSum = function (n) {
  let count = 0;
  n = n.toString().split("");
  for (let x in n) {
    count += x % 2 ? Number(-n[x]) : Number(n[x]);
  }
  return count;
};
