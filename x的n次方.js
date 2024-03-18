function function4(x, n) {
  // 如果 n 等于0，则返回1，因为任何数的0次方都等于1
  if (n === 0) return 1;
  // 如果 n 等于1，则返回 x，因为任何数的1次方都等于该数本身
  if (n === 1) return x;
  // 递归调用 function4，将 n 除以2并向下取整，得到的结果赋值给变量 t
  let t = function4(x, Math.floor(n / 2)); // 这里相对于function3，是把这个递归操作抽取出来
  // 打印变量 t 的值，用于调试或观察算法的运行过程
  console.log('t', t);
  // 检查 n 是否为奇数。如果 n 是奇数，那么 x 的 n 次方可以表示为 x 的 n/2 次方的平方乘以 x 本身
  if (n % 2 === 1) {
    // 如果 n 是奇数，则返回 t 的平方乘以 x
    return t * t * x;
  }
  // 如果 n 不是奇数（即 n 是偶数），则计算 t 的平��，并将结果赋值给变量 res
  const res = t * t;
  // 打印变量 res 的值，用于调试或观察算法的运行过程
  console.log('res', res);
  // 返回 res，即 x 的 n 次方的结果
  return res;
  // 返回 res，即 x 的 n 次方的结果
}

// function function4(x, n) {
//   let res = 1;
//   for (let i = 1; i <= n; i++) {
//     res *= x;
//   }
//   return res;
// }

const a = function4(2, 100);
console.log('a', a);
