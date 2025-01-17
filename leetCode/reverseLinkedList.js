const reverseLinkedList = function (headNode) {
  let prev = null;
  let currentNode = headNode;
  while (currentNode) {
    const next = currentNode.next;
    currentNode.next = prev;
    prev = currentNode;
    currentNode = next;
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
  const headNode = new ListNode(arr[0]);
  let currentNode = headNode;
  for (let i = 1; i < arr.length; i++) {
    currentNode.next = new ListNode(arr[i]);
    currentNode = currentNode.next;
  }
  return headNode;
}

function printLinkedList(headNode) {
  const result = [];
  let currentNode = headNode;
  while (currentNode) {
    result.push(currentNode.val);
    currentNode = currentNode.next;
  }
  console.log(result.join(' -> '));
}

// Predefined input for debugging
const elements = [1, 2, 3, 4, 5];
const headNode = createLinkedListFromArray(elements);
console.log('Original Linked List:');
printLinkedList(headNode);
const reversedheadNode = reverseLinkedList(headNode);
console.log('Reversed Linked List:');
printLinkedList(reversedheadNode);
