/**
 * @name: 循环队列
 * @description: 队列的加强版——循环队列
 */

class LoopQueue {
  // 由于循环队列会浪费一个长度，所以数组实际长度是capacity+1
  constructor (capacity = 10) {
    this.data = new Array(capacity + 1)
    // 指向队首所在的索引
    this.front = 0
    // 指向队尾的下一个索引
    this.tail = 0
    this.size = 0
  }

  // 获取循环队列总容量
  getCapacity () {
    return this.data.length - 1
  }

  // 是否为空
  isEmpty () {
    return this.front === this.tail
  }

  // 获取循环队列大小
  getSize () {
    return this.size
  }

  // 元素入队
  enqueue (e) {
    if ((this.tail + 1) % this.data.length === this.front) {
      this.resize(this.getCapacity() * 2)
    }
    this.data[this.tail] = e
    this.tail = (this.tail + 1) % this.data.length
    this.size++
  }

  // 元素出队
  dequeue () {
    if (this.isEmpty()) {
      throw new Error('Cannot dequeue from an empty queue')
    }
    // 保存出队元素
    let ret = this.data[this.front]
    this.data[this.front] = null
    this.front = (this.front + 1) % this.data.length
    this.size--
    if (this.size === this.getCapacity() / 4 && this.getCapacity() / 2 !== 0) {
      // 缩容
      this.resize(this.getCapacity() / 2)
    }
    return ret
  }

  getFront () {
    if (this.isEmpty()) {
      throw new Error('queue is empty')
    }
    return this.data[this.front]
  }

  // 扩容函数
  resize (newCapacity) {
    let newData = new Array(newCapacity + 1)
    for (let i = 0; i < this.size; i++) {
      newData[i] = this.data[(i + this.front) % length]
    }
    this.data = newData
    this.front = 0
    this.tail = this.size
  }
}
