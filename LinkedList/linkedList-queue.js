/**
 * @name: 链表队列
 * @description: 使用尾指针链表实现队列（从head端删除元素，从tail端插入元素）
 */

class LinkedListQueue {
  constructor () {
    // 头指针
    this.head = null
    // 尾指针
    this.tail = null
    this.size = 0
  }

  getSize () {
    return this.size
  }

  isEmpty () {
    return this.size === 0
  }

  eneueue (e) {
    if (this.tail === null) {
      this.tail = new Node(e)
      this.head = this.tail
    } else {
      this.tail.next = new Node(e)
      this.tail = this.tail.next
    }
    this.size++
  }

  dequeue () {
    if (this.isEmpty()) {
      throw new Error('Cannot dequeue from an empty queue')
    }
    let retNode = this.head
    this.head = this.head.next
    retNode.next = null
    if (this.head === null) {
      this.tail = null
    }
    this.size--
    return retNode.e
  }

  getFront () {
    if (this.isEmpty()) {
      throw new Error('Queue is Empty')
    }
    return this.head.e
  }
}

class Node {
  constructor (e = null, next = null) {
    // 内容
    this.e = e
    // 下个节点
    this.next = next
  }
}
