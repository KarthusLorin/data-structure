/**
 * @name: 删除链表中的元素
 * @description：删除链表中等于给定值val的所有元素
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

// 考虑内存的写法
const removeElements = function(head, val) {
  // 头节点值相等，删除头节点
  while (head !== null && head.val === val) {
    let delNode = head
    head = head.next
    delNode.next = null
  }

  if (head === null) {
    return head
  }

  let prev = head
  while(prev.next !== null) {
    if (prev.next.val === val) {
      let delNode = prev.next
      prev.next = delNode.next
      delNode.next = null
    } else {
      prev = prev.next
    }
  }

  return head
}

// 不考虑内存的写法
const removeElements2 = function(head, val) {
  // 头节点值相等，删除头节点
  while (head !== null && head.val === val) {
    head = head.next
  }

  if (head === null) {
    return head
  }

  let prev = head
  while(prev.next !== null) {
    if (prev.next.val === val) {
      prev.next = prev.next.next
    } else {
      prev = prev.next
    }
  }

  return head
}

// 虚拟头节点写法
const removeElements3 = function(head, val) {

  let dummyHead = new ListNode(-1)
  dummyHead.next = head

  let prev = dummyHead
  while(prev.next !== null) {
    if (prev.next.val === val) {
      prev.next = prev.next.next
    } else {
      prev = prev.next
    }
  }

  return dummyHead.next
}

// 递归写法
const removeElements4 = function(head, val) {

  if (head === null) {
    return null
  }

  head.next = removeElements4(head.next, val)
  return head.val === val ? head.next : head
}

function ListNode (val) {
  this.val = val
  this.next = null
}
