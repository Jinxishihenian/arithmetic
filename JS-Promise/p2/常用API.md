### Promise简介

本质上Promise是一个函数返回的对象.
- 1.prmoise 是一种'对象类型',用于表示一个异步操作的最终完成(或失败)以及其结果值.
- 2.它是由函数返回的.
- 3.所以本质上是函数返回的对象.
  这句话想表达的重点是:
  Promise并不是魔法,是通过封装异步逻辑后,返回的一个特殊的对象.这对象上挂了.then,.catch等方法,允许你对异步结果做进一步处理.
  换句话说(更加口语化):
  Promise不是一个'异步过程',它是你从一个函数中拿回来的控制,你可以用这个控制器(即Promise对象)来监听异步操作的结果.

  ps:
    在使用Promise的实际开发中,我们更通常通过函数返回Promise,而不是直接new一个Promise在外头用.

### API(实例方法).
1. .then 函数会返回一个和原来不同的新的Promise
2. .catch 捕获错误
3. .finally 无论错误还是正确都会统一执行.
### (静态方法).
1. Promise.all 静态方法接受一个可迭代的Promise作为输入,并返回一个Promise.
  正确时,当所有Promise都满足时返回结果数组,异常时只会返回第一个错误.
  与Promise.allSettled不同的是对异常处理的不同(当发生异常时依旧返回结果,甚至异常结果)
2. Promise.allSettled
3. Promise.any  (处理并发,执行时机,当任意一个元素有成功时) 任意一个满足,直接返回,所有被拒绝则拒绝,应用场景容错机制(下载镜像).
4. Promise.ract (处理并发,执行时机,当一个元素有结果时(谁先完成谁先执行)),应用场景(超时控制,竞态条件),
5. Promise.reject()  创建已拒绝的Promise.
6. Promise.resolve() 创建已解决的Promise.
7. Promise.try 统一处理同步和异步函数的错误
8. Promise.withResolvers 外部控制Promise的解析状态