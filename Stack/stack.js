/**
 * @name: 栈stack
 * @description: 实现数据结构——栈
 * getSize: 获取栈的元素个数
 * isEmpty: 查看栈是否为空
 * push: 推入元素
 * pop: 推出元素
 * peek: 查找当前栈顶元素
 */

class Stack {
  // 初始化空数组
  constructor () {
    this.data = []
  }

  // 获取栈的元素个数
  getSize () {
    return this.data.length
  }

  // 查看栈是否为空
  isEmpty () {
    return this.data.length === 0
  }

  // 推入元素
  push (e) {
    this.data.push(e)
  }

  // 推出元素
  pop () {
    return this.data.pop()
  }

  // 查找当前栈顶元素
  peek () {
    return this.data[this.data.length - 1]
  }
}
