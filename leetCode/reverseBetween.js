// Function to reverse a linked list between positions m and n
const reverseBetween = (head, m, n) => {
  // If the list is empty or m and n are the same, no need to reverse
  if (!head || m === n) return head;

  // Create a new node to act as the starting point
  const index = new ListNode(0);
  index.next = head;
  let prev = index;

  // Move prev to the node just before the m-th node
  for (let i = 0; i < m - 1; i++) {
    prev = prev.next;
  }

  // Start reversing the sublist from m to n
  let current = prev.next;
  for (let i = 0; i < n - m; i++) {
    const next = current.next; // Store the next node
    current.next = next.next; // Remove next from the sublist
    next.next = prev.next; // Insert next at the beginning of the reversed sublist
    prev.next = next; // Update prev to point to the new head of the sublist
  }

  // Return the new head of the list
  return index.next;
};

// Definition for singly-linked list node
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

// Helper function to create a linked list from an array
const createLinkedListFromArray = (arr) => {
  if (arr.length === 0) return null;
  const head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
};

// Helper function to print a linked list
const printLinkedList = (head) => {
  const result = [];
  let current = head;
  while (current) {
    result.push(current.val);
    current = current.next;
  }
  console.log(result.join(' -> '));
};

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
