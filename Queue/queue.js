/**
 * @name: 队列queue
 * @description: 实现数据结构——队列
 * getSize: 获取栈的元素个数
 * isEmpty: 查看栈是否为空
 * enqueue: 插入元素
 * dequeue: 取出元素
 * getFront: 获取队首元素
 */

class Queue {
  constructor () {
    this.data = []
  }

  getSize () {
    return this.data.length
  }

  isEmpty () {
    return this.data.length === 0
  }

  enqueue (e) {
    this.data.push(e)
  }

  dequeue () {
    return this.data.shift()
  }

  getFront () {
    return this.data[0]
  }
}
