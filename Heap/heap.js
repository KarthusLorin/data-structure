/**
 * @name: MaxHeap 最大堆
 */

class MaxHeap {
  constructor (capacity) {
    this.data = []
    this.data.length = capacity ? capacity : 0
  }

  // 返回堆中元素的个数
  size () {
    return this.data.length
  }

  // 返回一个布尔值，表示堆中是否为空
  isEmpty () {
    return !!this.data.length
  }

  // 返回完全二叉树的数组表示中，一个索引所表示的元素的父节点的索引
  parent (index) {
    if (index === 0) {
      throw Error("index-0 doesn't have parent")
    }
    return (index - 1) / 2
  }

  // 返回完全二叉树的数组表示中，一个索引所表示的元素的左孩子的索引
  leftChild (index) {
    return index * 2 + 1
  }

  // 返回完全二叉树的数组表示中，一个索引所表示的元素的右孩子的索引
  rightChild (index) {
    return index * 2 + 2
  }
}
