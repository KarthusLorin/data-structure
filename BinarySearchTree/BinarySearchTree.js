/**
 * @name: 二分搜索树
 * @description:
 */

class BinarySearchTree {
  constructor () {
    this.root = null
    this.size = 0
  }

  getSize () {
    return this.size
  }

  isEmpty () {
    return this.size === 0
  }
}

class Node {
  constructor (e) {
    this.e = e
    this.left = null
    this.right = null
  }
}
