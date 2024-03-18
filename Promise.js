class MyPromise {
  constructor(fn) {
    this.status = 'pending';
    this.resCbs = [];
    this.rejCbs = [];

    const resolve = (val) => {
      if (this.status === 'pending') {
        this.status = 'resolved';
        this.resCbs.forEach((cb) => cb(val));
      }
    };

    const reject = (val) => {
      if (this.status === 'pending') {
        this.status = 'rejected';
        this.rejCbs.forEach((cb) => cb(val));
        s;
      }
    };

    try {
      fn(resolve, reject);
    } catch (error) {
      reject?.(error);
    }
  }

  then(onResolve, onReject) {
    return new MyPromise((resolve, reject) => {
      if (this.status === 'pending') {
        this.resCbs.push((val) => {
          try {
            // 使用setTimeout时，onResolve函数的执行会被延迟。这意味着，即使onResolve返回的是一个MyPromise实例，你也不会立即调用then方法来处理这个Promise。相反，你会将then方法的调用放入事件队列中，等待当前执行栈清空后再执行。这样，你可以确保onResolve函数在Promise解析后再执行，这更接近原生Promise的行为。
            setTimeout(() => {
              const res = onResolve(val);
              if (res instanceof MyPromise) {
                res.then(resolve, reject);
              } else {
                resolve(val);
              }
            }, 0);
          } catch (error) {
            reject?.(error);
          }
        });

        this.rejCbs.push((val) => {
          try {
            const res = onReject(val);
            if (res instanceof MyPromise) {
              res.then(resolve, reject);
            } else {
              reject(val);
            }
          } catch (error) {
            reject(val);
          }
        });
      }
    });
  }
}

const a = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});

a.then((val) => {
  console.log(val);
  return new MyPromise((resolve, reject) => {
    setTimeout(() => {
      resolve(val + 1);
    }, 1000);
  });
})
  .then((val) => {
    console.log(val);
    return new MyPromise((resolve, reject) => {
      setTimeout(() => {
        resolve(val + 1);
      }, 1000);
    });
  })
  .then((val) => {
    console.log(val);
  });
