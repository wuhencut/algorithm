/*
 * @lc app=leetcode.cn id=707 lang=javascript
 *
 * [707] 设计链表
 */

// @lc code=start
function ListNode(val, next) {
  this.val = val || 0;
  this.next = next || null;
}

var MyLinkedList = function () {
  this.size = 0;
  this.head = new ListNode(0);
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.size) {
    return -1;
  }
  let cur = this.head;
  while (index >= 0) {
    index--;
    cur = cur.next;
  }
  return cur.val;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  this.addAtIndex(0, val);
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  this.addAtIndex(this.size, val);
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index > this.size) {
    return;
  }
  index = Math.max(0, index);
  let pred = this.head;
  while (index > 0) {
    index--;
    pred = pred.next;
  }
  let toAdd = new ListNode(val);
  // 防止pred.next被提前赋值导致逻辑出问题
  toAdd.next = pred.next;
  pred.next = toAdd;
  this.size++;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.size) {
    return;
  }

  let pred = this.head;
  while (index > 0) {
    index--;
    pred = pred.next;
  }
  this.size--;
  pred.next = pred.next.next;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end
