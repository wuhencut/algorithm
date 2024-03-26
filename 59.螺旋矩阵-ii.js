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
    startY = 0,
    mid = n >> 1,
    count = 1,
    offset = 1,
    loop = n >> 1;

  const res = Array(n)
    .fill(0)
    .map((item) => Array(n).fill(0));
  while (loop) {
    loop--;
    let row = startX,
      col = startY;
    // 横向 从左到右 col < n - offset 应该更好理解
    while (col < n - offset) {
      res[row][col] = count;
      count++;
      col++;
    }

    // 纵向 从上到下
    while (row < n - offset) {
      res[row][col] = count;
      row++;
      count++;
    }

    // 横向从右到左
    while (col > startY) {
      res[row][col] = count;
      count++;
      col--;
    }

    // 纵向，从下到上
    while (row > startX) {
      res[row][col] = count;
      row--;
      count++;
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
