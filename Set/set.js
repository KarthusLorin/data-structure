/**
 * @name: 集合
 */

class mySet {
  constructor () {
    this.bst = new BinarySearchTree()
  }

  getSize () {
    return this.bst.size()
  }

  isEmpty () {
    return this.bst.isEmpty()
  }

  // 由于二分搜索树本身就不包含重复元素，所以直接使用二分搜索树的add方法
  add (e) {
    this.bst.add(e)
  }

  contains (e) {
    return this.bst.contains(e)
  }

  remove (e) {
    return this.bst.remove(e)
  }
}

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

  // 寻找二分搜索树的最小元素
  minimum () {
    if (this.size === 0) {
      throw new Error('BST is empty')
    }

    return this._minimum(this.root).e
  }

  _minimum (node) {
    if (node.left === null) {
      return node
    }
    return this._minimum(node.left)
  }

  // 寻找二分搜索树最大值
  maximum () {
    if (this.size === 0) {
      throw new Error('BST is empty')
    }

    return this._maximum(this.root).e
  }

  _maximum (node) {
    if (node.right === null) {
      return node
    }

    return this._maximum(node.right)
  }

  // 删除最小节点
  removeMin () {
    let ret = this.minimum()
    this.root = this._removeMin(this.root)
    return ret
  }

  _removeMin (node) {
    if (node.left === null) {
      let rightNode = node.right
      node.right = null
      this.size--
      return rightNode
    }

    node.left = this._removeMin(node.left)
    return node
  }

  // 删除最大节点
  removeMax () {
    let ret = this.maximum()
    this.root = this._removeMax(this.root)
    return ret
  }

  _removeMax (node) {
    if (node.right === null) {
      let leftNode = node.left
      node.left = null
      this.size--
      return leftNode
    }

    node.right = this._removeMax(node.right)
    return node
  }

  // 删除元素为e的节点
  remove (e) {
    this.root = this._remove(this.root, e)
  }

  _remove (node, e) {
    if (node === null) {
      return null
    }
    if (e < node.e) {
      this._remove(node.left, e)
    } else if (e > node.e) {
      this._remove(node.right, e)
    } else {
      // e === node.e
      // 待删除节点左子树为空的情况
      if (node.left === null) {
        let rightNode = node.right
        node.right = null
        this.size--
        return rightNode
      }
      // 待删除节点右子树为空的情况
      if (node.right === null) {
        let leftNode = node.left
        node.left = null
        this.size--
        return leftNode
      }

      // 待删除节点左右子树均不为空的情况
      // 找到比待删除节点大的最小节点，即待删除节点右子树的最小节点
      // 用这个节点顶替待删除节点的位置
      let successor = this.minimum(node.right)
      successor.right = this.removeMin(node.right)
      successor.left = node.left

      node.left = node.right = null

      return successor
    }
  }
}

class Node {
  constructor (e) {
    this.e = e
    this.left = null
    this.right = null
  }
}
