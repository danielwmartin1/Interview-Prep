import readline from 'readline';

// Function to reverse a linked list between positions m and n
const reverseBetween = (head, m, n) => {
  if (!head || m === n) return head;

  // Create a dummy node to handle edge cases
  const dummy = new ListNode(0);
  dummy.next = head;
  let prev = dummy;

  // Move prev to the node before the start of the reversal
  for (let i = 0; i < m - 1; i++) {
    prev = prev.next;
  }

  let current = prev.next;
  // Reverse the sublist from m to n
  for (let i = 0; i < n - m; i++) {
    const next = current.next;
    current.next = next.next;
    next.next = prev.next;
    prev.next = next;
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

// Create a readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to prompt the user for linked list elements
function promptForLinkedList() {
  rl.question('Enter the elements of the linked list separated by spaces: ', (answer) => {
    const elements = answer.split(' ').map(Number);
    if (elements.some(isNaN)) {
      console.error('Invalid input: Please enter only numbers separated by spaces.');
      return promptForLinkedList();
    }

    const head = createLinkedListFromArray(elements);
    if (!head) {
      return promptForLinkedList();
    }

    promptForPositions(head, elements.length);
  });
}

// Function to prompt the user for start and end positions for reversal
function promptForPositions(head, length) {
  rl.question('Enter the start position (m): ', (mAnswer) => {
    const m = parseInt(mAnswer);
    if (isNaN(m) || m < 1 || m > length) {
      console.error('Invalid input: Please enter a valid start position.');
      return promptForPositions(head, length);
    }

    rl.question('Enter the end position (n): ', (nAnswer) => {
      const n = parseInt(nAnswer);
      if (isNaN(n) || n < m || n > length) {
        console.error('Invalid input: Please enter a valid end position.');
        return promptForPositions(head, length);
      }

      console.log('Original Linked List:');
      printLinkedList(head);

      console.log(`Reversing the linked list between positions ${m} and ${n}...`);
      const reversedHead = reverseBetween(head, m, n);

      console.log('Reversed Linked List:');
      printLinkedList(reversedHead);

      rl.close();
    });
  });
}

// Start the prompt for linked list input
promptForLinkedList();

export default reverseBetween;