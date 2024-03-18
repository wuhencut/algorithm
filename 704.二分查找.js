/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 左闭右闭
var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    let mid = left + ((right - left) >> 1);
    if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
};

// 左闭右开
// var search = function (nums, target) {
//   let mid,
//     left = 0,
//     right = nums.length - 1;
//   while (left < right) {
//     mid = left + ((right - left) >> 1);
//     if (nums[mid] > target) {
//       right = mid;
//     } else if (nums[mid] < target) {
//       left = mid + 1;
//     } else {
//       return mid;
//     }
//   }
//   return -1;
// };

let nums = [-1, 0, 3, 5, 9, 12],
  target = 111;

const index = search(nums, target);

console.log('index', index);
// @lc code=end
