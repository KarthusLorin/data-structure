/**
 * @name: 栈链表
 * @description: 使用链表实现栈
 */

class LinkedListStack {
  constructor () {
    this.list = new LinkedList()
  }

  getSize () {
    return this.list.getSize()
  }

  isEmpty () {
    return this.list.isEmpty()
  }

  push (e) {
    this.list.addFirst(e)
  }

  pop () {
    return this.list.removeFirst()
  }

  peek () {
    return this.list.getFirst()
  }
}

class LinkedList {
  constructor () {
    this.dummyHead = new Node(null, null)
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

  // 获得链表的第index个位置的元素
  get (index) {
    if (index < 0 || index >= this.size) {
      throw new Error('Get failed, Illegal index')
    }

    let cur = this.dummyHead.next
    for (let i = 0; i < index; i++) {
      cur = cur.next
    }
    return cur.e
  }

  // 获得链表的第一个元素
  getFirst () {
    return this.get(0)
  }

  // 获得链表的最后一个元素
  getLast () {
    return this.get(this.size - 1)
  }

  // 修改链表的第index个位置的元素为e
  set (index, e) {
    if (index < 0 || index >= this.size) {
      throw new Error('Update failed, Illegal index')
    }

    let cur = this.dummyHead.next
    for (let i = 0; i < index; i++) {
      cur = cur.next
    }
    cur.e = e
  }

  // 查找链表中是否有元素e
  contains (e) {
    let cur = this.dummyHead.next

    while (cur !== null) {
      if (cur.e = e) {
        return true
      }
      cur = cur.next
    }
    return false
  }

  // 从链表中删除第index个元素，返回删除元素
  remove (index) {
    if (index < 0 || index >= this.size) {
      throw new Error('Remove failed, Illegal index')
    }

    let prev = this.dummyHead
    for (let i = 0; i < index; i++) {
      prev = prev.next
    }
    let retNode = prev.next
    prev.next = retNode.next
    retNode.next = null
    this.size--

    return retNode.e
  }

  // 从链表中删除第一个元素，返回删除元素
  removeFirst () {
    return this.remove(0)
  }

  // 从链表中删除最后一个元素
  removeLast () {
    return this.remove(this.size - 1)
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
