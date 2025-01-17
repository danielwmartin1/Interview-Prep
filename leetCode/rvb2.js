const { ListNode, reverseBetween } = require('./rvb');

function arrayToList(arr) {
  const dummy = new ListNode(0);
  let current = dummy;
  for (let val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
}

function listToArray(head) {
  const result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

test('reverseBetween should reverse the sublist from left to right', () => {
  const head = arrayToList([1, 2, 3, 4, 5]);
  const left = 2;
  const right = 4;
  const result = reverseBetween(head, left, right);
  expect(listToArray(result)).toEqual([1, 4, 3, 2, 5]);
});