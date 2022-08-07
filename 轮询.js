function myInterval(callback, interval = 2000) {
  let timer
  let isStop = false
  const stop = () => {
    isStop = true
    clearTimeout(timer)
  }
  const start = async () => {
    isStop = false
    await loop()
  }
  const loop = async () => {
    try {
      // 控制反转,将关闭的方法交给回调函数.
      await callback(stop)
    } catch (err) {
      console.error('轮询出错：', err)
      // 强制关闭轮询.
      stop()
      // 测试环境打开.
      // throw new Error('轮询出错：', err)
    }
    if (isStop) return
    return (timer = setTimeout(loop, interval))
  }
  return {
    start,
    stop
  }
}

export default myInterval;
