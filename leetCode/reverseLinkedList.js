const reverseLinkedList = function (head) {
  let prev = null;
  let current = head;
  while (current) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function createLinkedListFromArray(arr) {
  if (arr.length === 0) return null;
  const head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

function printLinkedList(head) {
  const result = [];
  let current = head;
  while (current) {
    result.push(current.val);
    current = current.next;
  }
  console.log(result.join(' -> '));
}

// Predefined input for debugging
const elements = [1, 2, 3, 4, 5];
const head = createLinkedListFromArray(elements);
console.log('Original Linked List:');
printLinkedList(head);
const reversedHead = reverseLinkedList(head);
console.log('Reversed Linked List:');
printLinkedList(reversedHead);
