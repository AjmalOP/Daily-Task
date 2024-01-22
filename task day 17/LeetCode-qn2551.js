// LEET CODE PROBLEM 2551 : https://leetcode.com/problems/maximum-enemy-forts-that-can-be-captured/

var captureForts = function (forts, x = 0, j = 0) {
  for (i = 0; i < forts.length; i++) {
    if (forts[i]) {
      if (forts[i] === -forts[j]) {
        x = Math.max(x, i - j - 1);
      }
      j = i;
    }
  }
  return x;
};
