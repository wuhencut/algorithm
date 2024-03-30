/**
 * 链式调用
 * sum(1,2)(3,4)(2,3) 输出15
 */

function sum(a, b) {
  let result = a + b;

  function add(c, d) {
    result += c + d;
    return add;
  }

  add.valueOf = function () {
    return result;
  };

  return add;
}

const val = sum(1, 2)(3, 4)(2, 3);

console.log('val', val.valueOf());
