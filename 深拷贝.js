/**
 *
 * @param {*} obj 深拷贝任何属性
 */
function cloneDeep(obj) {
  // 检查传入的对象是否为 null 或 undefined，如果是，则直接返回该值。
  if (obj === null || obj === undefined) {
    return obj;
  }

  // 检查传入的对象是否为数组，如果是，则使用 map 方法递归地克隆数组中的每个元素。
  if (Array.isArray(obj)) {
    return obj.map((item) => cloneDeep(item));
  }

  // 检查传入的对象是否为对象（排除数组和函数），如果是，则创建一个新对象，并递归地克隆每个属性。
  if (typeof obj === 'object') {
    const clonedObj = {};
    for (const [key, value] of Object.entries(obj)) {
      // 递归地克隆当前属性的值。
      clonedObj[key] = cloneDeep(value);
    }
    return clonedObj;
  }

  // 检查传入的对象是否为函数，如果是，则返回一个新的函数，该函数在调用时使用原始函数的 apply 方法，以保持原始函数的上下文和参数。
  if (typeof obj === 'function') {
    return function () {
      // 使用原始函数的 apply 方法，以保持原始函数的上下文和参数。
      return obj.apply(this, arguments);
    };
  }

  // 对于其他基本类型（如字符串、数字、布尔值），直接返回该值。
  return obj;
}

const _clonedObj = cloneDeep({
  a: 1,
  b: function () {
    console.log(22);
  },
});

console.log('_clonedObj', _clonedObj);
