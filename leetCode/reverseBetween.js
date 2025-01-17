// Function to reverse a linked list between positions m and n
const reverseBetween = (headNode, m, n) => {
  // If the list is empty or m and n are the same, no need to reverse
  if (!headNode || m === n) return headNode;

  // Create a new node to act as the starting point
  const index = new ListNode(0);
  index.next = headNode;
  let listSoFar = index;

  // Move listSoFar to the node just before the m-th node
  for (let i = 0; i < m - 1; i++) {
    listSoFar = listSoFar.next;
  }

  // Start reversing the sublist from m to n
  let currentNode = listSoFar.next;
  for (let i = 0; i < n - m; i++) {
    const nextNode = currentNode.next; // Store the next node
    currentNode.next = nextNode.next; // Remove next from the sublist
    nextNode.next = listSoFar.next; // Insert next at the beginning of the reversed sublist
    listSoFar.next = nextNode; // Update listSoFar to point to the new headNode of the sublist
  }

  // Return the new headNode of the list
  return index.next;
};

// Definition for singly-linked list node
class ListNode {
  constructor(val, nextNode = null) {
    this.val = val;
    this.next = nextNode;
  }
}

// Helper function to create a linked list from an array
const createLinkedListFromArray = (arr) => {
  if (arr.length === 0) return null;
  const headNode = new ListNode(arr[0]);
  let currentNode = headNode;
  for (let i = 1; i < arr.length; i++) {
    currentNode.next = new ListNode(arr[i]);
    currentNode = currentNode.next;
  }
  return headNode;
};

// Helper function to print a linked list
const printLinkedList = (headNode) => {
  const result = [];
  let currentNode = headNode;
  while (currentNode) {
    result.push(currentNode.val);
    currentNode = currentNode.next;
  }
  console.log(result.join(' -> '));
};

// Sample linked list and positions for debugging
const elements = [1, 2, 3, 4, 5];
const headNode = createLinkedListFromArray(elements);
const m = 2;
const n = 4;

console.log('Original Linked List:');
printLinkedList(headNode);

console.log(`Reversing the linked list between positions ${m} and ${n}...`);
const reversedheadNode = reverseBetween(headNode, m, n);

console.log('Reversed Linked List:');
printLinkedList(reversedheadNode);

export default reverseBetween;
