/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let curA = headA,
    curB = headB,
    lenA = getLen(headA),
    lenB = getLen(headB);
  if (lenA < lenB) {
    [lenA, lenB] = [lenB, lenA];
    [curA, curB] = [curB, curA];
  }
  let diff = lenA - lenB;
  while (diff > 0) {
    curA = curA.next;
    diff--;
  }
  while (curA && curA !== curB) {
    curA = curA.next;
    curB = curB.next;
  }
  return curA;
};

var getLen = function (head) {
  let index = 0,
    cur = head;
  while (cur) {
    index++;
    cur = cur.next;
  }
  return index;
};
// @lc code=end
