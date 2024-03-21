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
  // 确保A是长的链方便计算
  if (lenA < lenB) {
    [curA, curB] = [curB, curA];
    [lenA, lenB] = [lenB, lenA];
  }

  let diff = lenA - lenB;
  // 移动到差值位，末尾对齐
  while (diff > 0) {
    diff--;
    curA = curA.next;
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
