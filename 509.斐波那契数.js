/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// function fib_recursive(n) {
//   if (n <= 1) {
//     return n;
//   } else {
//     return fib_recursive(n - 1) + fib_recursive(n - 2);
//   }
// }

// 方法二：动态规划
function fib_recursive(n) {
  let fib_values = [0, 1].concat(Array(n - 1).fill(0));
  for (let i = 2; i <= n; i++) {
    fib_values[i] = fib_values[i - 1] + fib_values[i - 2];
  }
  console.log('fib_values', fib_values);
  return fib_values[n];
}

const a = fib_recursive(10000000);
console.log(a);
// @lc code=end
