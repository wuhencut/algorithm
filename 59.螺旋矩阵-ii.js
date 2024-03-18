/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let startX = 0,
    startY = 0;
  let count = 1;
  let mid = n >> 1;
  let loop = n >> 1;
  let offset = 1;
  let res = Array(n)
    .fill(0)
    .map(() => Array(n).fill(0));

  while (loop) {
    loop--;
    let row = startX,
      col = startY;
    for (; n - offset > col; col++) {
      res[row][col] = count++;
    }
    for (; n - offset > row; row++) {
      res[row][col] = count++;
    }

    for (; col > startY; col--) {
      res[row][col] = count++;
    }

    for (; row > startX; row--) {
      res[row][col] = count++;
    }
    startX++;
    startY++;
    offset++;
  }
  if (n % 2 === 1) {
    res[mid][mid] = count;
  }

  return res;
};
// @lc code=end
