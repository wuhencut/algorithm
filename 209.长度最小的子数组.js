/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let slow = 0,
    fast = 0,
    sum = 0,
    min = Infinity,
    length = nums.length;

  // 两根指针一根快一根慢
  while (fast < length) {
    sum += nums[fast];
    // 为什么要循环？
    // 因为index3 +index4 - index start 可能还是大于 target，所以要循环到小于target再right++
    while (sum >= target) {
      // min被不断赋值，不断取消的值
      min = Math.min(min, fast - slow + 1);
      sum -= nums[slow];
      slow++;
    }
    fast++;
  }
  return min;
};
// @lc code=end

const target = 7,
  nums = [2, 3, 1, 2, 4, 3];
const length = minSubArrayLen(target, nums);

console.log('length', length);
