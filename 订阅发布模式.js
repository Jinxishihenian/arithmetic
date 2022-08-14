/**
 * wss
 * 订阅发布模式.
 */
class SingletonPublish {
  constructor() {
    this.listenList = {};
    this.instance = null;
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new SingletonPublish();
    }
    return this.instance;
  }

  // 订阅者添加实践.
  addListen(key, fn) {
    if (!this.listenList[key]) {
      this.listenList[key] = [];
    }
    this.listenList[key].push(fn);
  }

  // 发布者发布消息.
  trigger() {
    const key = Array.from(arguments).shift();
    const fns = this.listenList[key];
    if (!fns || fns.length === 0) {
      return false;
    }

    fns.forEach((fn) => {
      fn.apply(this, arguments);
    });
  }

  // 移除事件订阅事件.
  remove(key, fn) {
    const fns = this.listenList[key];
    if (!fns || fns.length === 0) {
      return;
    }
    if (!fn) {
      this.listenList[key] = [];
    } else {
      for (let i = 0; i < fns.length; i++) {
        if (fn === fns[i]) {
          fns.splice(i, 1);
        }
      }
    }
  }
}

export default SingletonPublish.getInstance();
