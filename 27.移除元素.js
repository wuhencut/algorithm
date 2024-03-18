/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

// 双循环 O(n^2)
// var removeElement1 = function (nums, val) {
//   let size = nums.length;
//   //
//   /**
//    * 这里把size写成nums.length会出现问题：
//    * 当把数据往前移动一位后，最后面的数据其实是不需要管的，所以size要-1
//    * 不然当遇到[2,2,3,3]的时候，前后一致，其实在遇到第一个3的时候已经要结束了，
//    * 但是size是4，所以进入了死循环
//    */
//   for (let i = 0; i < size; i++) {
//     if (nums[i] === val) {
//       // 后面的都往前移一位
//       for (let j = i + 1; j < size; j++) {
//         nums[j - 1] = nums[j];
//       }
//       // 因为i后面的下标都往前移了一位，防止漏算，i也要往前进一位
//       i--;
//       size--; // 数组大小-1
//     }
//   }
//   return size;
// };

// O(n)
var removeElement = function (nums, val) {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[index] = nums[i];
      index++;
    }
  }
  return index;
};

const nums = [2, 3, 3, 2],
  val = 3;
const size = removeElement(nums, val);
console.log('size', size);
// 不重要，不重要
console.log('nums', nums);
