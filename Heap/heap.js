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

  // 返回完全二叉树的数组表示中，索引为index的左节点的总索引
  leftChild (index) {
    return index * 2 + 1
  }

  // 返回完全二叉树的数组表示中，索引为index的右节点的总索引
  rightChild (index) {
    return index * 2 + 2
  }

  // 向堆中添加元素
  add (e) {
    this.data.push(e)
    this.siftUp(this.data.length - 1)
  }

  // 目标元素上浮
  siftUp (k) {
    while (k > 0 && this.data[this.parent(k)] < this.data[k]) {
      // 交换父元素和k的位置
      let temp = this.data[this.parent(k)]
      this.data[this.parent(k)] = this.data[k]
      this.data[k] = temp
      k = this.parent(k)
    }
  }
}
