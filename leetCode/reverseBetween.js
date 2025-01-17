// Function to reverse a linked list between positions m and n
const reverseBetween = (head, m, n) => {
  if (!head || m === n) return head;

  // Create a dummy node to handle edge cases
  const dummy = new ListNode(0);
  dummy.next = head;
  let prev = dummy;

  console.log(`Initial list: ${listToString(dummy.next)}`);

  // Move prev to the node before the start of the reversal
  for (let i = 0; i < m - 1; i++) {
    prev = prev.next;
  }

  console.log(`Node before reversal starts: ${prev.val}`);

  let current = prev.next;
  // Reverse the sublist from m to n
  for (let i = 0; i < n - m; i++) {
    const next = current.next;
    current.next = next.next;
    next.next = prev.next;
    prev.next = next;

    console.log(`Reversing: ${listToString(dummy.next)}`);
  }

  return dummy.next;
};

// Definition for singly-linked list node
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

// Helper function to create a linked list from an array
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

// Helper function to print a linked list
function printLinkedList(head) {
  const result = [];
  let current = head;
  while (current) {
    result.push(current.val);
    current = current.next;
  }
  console.log(result.join(' -> '));
}

// Helper function to convert a linked list to a string
function listToString(head) {
  const result = [];
  let current = head;
  while (current) {
    result.push(current.val);
    current = current.next;
  }
  return result.join(' -> ');
}

// Sample linked list and positions for debugging
const elements = [1, 2, 3, 4, 5];
const head = createLinkedListFromArray(elements);
const m = 2;
const n = 4;

console.log('Original Linked List:');
printLinkedList(head);

console.log(`Reversing the linked list between positions ${m} and ${n}...`);
const reversedHead = reverseBetween(head, m, n);

console.log('Reversed Linked List:');
printLinkedList(reversedHead);

export default reverseBetween;
