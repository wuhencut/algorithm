/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */

/**
 * 这个算法能成立的前提是：原先数组就是从左到右非递减的，乱序的话不适用
 */
var sortedSquares = function (nums) {
  let size = nums.length;
  const newArr = Array(size).fill(0);
  // i,j用来从旧数组取值，k用来储值到新的数组
  let i = 0,
    j = size - 1,
    k = size - 1;
  while (i <= j) {
    // 挨个对比左边第一个和右边第一个
    const left = nums[i] * nums[i];
    const right = nums[j] * nums[j];
    if (left < right) {
      newArr[k] = right;
      // k存过了，取下一个
      k--;
      j--;
    } else {
      newArr[k] = left;
      k--;
      i++;
    }
  }

  return newArr;
};
// @lc code=end
