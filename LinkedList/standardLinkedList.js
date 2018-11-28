/**
 * @name: 标准链表LinkedList
 */

class LinkedList {
  constructor () {
    this.head = null
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

  // 在链表头添加新的元素e
  addFirst (e) {
    // let node = new Node(e)
    // node.next = this.head
    // this.head = node
    this.head = new Node(e, this.head)
    this.size++
  }

  // 在链表的index位置添加新的元素e
  add (index, e) {
    if (index < 0 || index > this.size) {
      throw new Error('Add Fail, Illegal index')
    }
    // 链表头没有prev，特殊处理
    if (index === 0) {
      this.addFirst(e)
    } else {
      let prev = this.head
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next
      }
      // let node = new Node(e)
      // node.next = prev.next
      // prev.next = node
      prev.next = new Node(e, prev.next)
      this.size++
    }
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
