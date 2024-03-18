/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

/**
 * 概念性的，在js不存在链表的概念。模拟实现即可
 * 删除val为输入值val的元素
 *
 */
var removeElements = function (head, val) {
  // 算法的开始，我们创建了一个新的ListNode对象ret，
  // 并将其next指针指向了原始链表的头节点head。
  // 这个ret节点是一个虚拟的头节点，
  // 它的目的是为了方便处理链表的头部情况。
  // 一个虚拟节点：
  const ret = new ListNode(0, head);
  let cur = ret;
  while (cur.next) {
    if (cur.next.val === val) {
      cur.next = cur.next.next;
      continue;
    }
    cur = cur.next;
  }
  return ret.next;
};
// @lc code=end
