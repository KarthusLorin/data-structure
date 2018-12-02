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

  // 向二分搜索树中添加新的元素e
  add (e) {
    this.root = this._add(this.root, e)
  }

  // 向以node为根节点的二分搜索树中插入元素e，递归算法
  // 返回插入新节点后的二分搜索树的根
  _add (node, e) {
    if (node === null) {
      this.size++
      return new Node(e)
    }

    if (e < node.e) {
      node.left = this._add(node.left, e)
    } else if (e > node.e) {
      node.right = this._add(node.right, e)
    }

    return node
  }

  // 看二分搜索树中是否包含元素e
  contains (e) {
    return this._contains(this.root, e)
  }

  // 看以node为根的二分搜索树中是否包含元素e，递归算法
  _contains(node, e) {
    if (node === null) {
      return false
    }

    if (e === node.e) {
      return true
    } else if (e < node.e) {
      return this._contains(node.left, e)
    } else {
      return this._contains(node.right, e)
    }
  }

  // 前序遍历
  preOrder () {
    this._preOrder(this.root)
  }

  // 前序遍历以node为根的二分搜索树，递归
  _preOrder (node) {
    if (node === null) {
      return
    }

    console.log(node.e)
    this._preOrder(node.left)
    this._preOrder(node.right)
  }

  // 中序遍历
  inOrder () {
    this._inOrder(this.root)
  }

  _inOrder (node) {
    if (node === null) {
      return
    }

    this._inOrder(node.left)
    console.log(node.e)
    this._inOrder(node.right)
  }

  // 后序遍历
  postOrder () {
    this._postOrder(this.root)
  }

  _postOrder (node) {
    if (node === null) {
      return
    }

    this._postOrder(node.left)
    this._postOrder(node.right)
    console.log(node.e)
  }
}

class Node {
  constructor (e) {
    this.e = e
    this.left = null
    this.right = null
  }
}

let bst = new BinarySearchTree()
let nums = [5,3,6,8,4,2]
nums.forEach(num => {
  bst.add(num)
})
bst.preOrder()