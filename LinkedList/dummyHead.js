/**
 * @name: 带虚拟头节点的链表（dummyHead）
 * @description: 带虚拟头节点的链表，可以减少添加节点时为头结点的判断
 */

class LinkedList {
  constructor () {
    this.dummyHead = new Node(null, null)
    this.size = 0
  }

  // 获取链表中的元素个数
  getSize () {
    return this.size
  }

  // 返回链表是否为空
  isEmpty () {
    return this.size === 0
  }

  // 在链表的index位置添加新的元素e
  add (index, e) {
    if (index < 0 || index > this.size) {
      throw new Error('Add Fail, Illegal index')
    }
    let prev = this.dummyHead
    for (let i = 0; i < index; i++) {
      prev = prev.next
    }
    // let node = new Node(e)
    // node.next = prev.next
    // prev.next = node
    prev.next = new Node(e, prev.next)
    this.size++
  }

  // 在链表头添加新的元素e
  addFirst (e) {
    this.add(0, e)
  }

  // 在链表末尾添加新的元素e
  addLast (e) {
    this.add(this.size, e)
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
