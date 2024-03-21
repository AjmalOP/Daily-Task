// LEET CODE PROBLEM 2475 : https://leetcode.com/problems/minimum-cuts-to-divide-a-circle/

var numberOfCuts = function (n) {
  const num = n === 1 ? 0 : n % 2 ? n : n / 2;
  return num;
};
