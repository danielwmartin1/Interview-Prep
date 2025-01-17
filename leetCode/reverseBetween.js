import readline from 'readline';

const reverseBetween = (head, m, n) => {
  if (!head || m === n) return head;

  const dummy = new ListNode(0);
  dummy.next = head;
  let prev = dummy;

  for (let i = 0; i < m - 1; i++) {
    prev = prev.next;
  }

  let current = prev.next;
  for (let i = 0; i < n - m; i++) {
    const next = current.next;
    current.next = next.next;
    next.next = prev.next;
    prev.next = next;
  }

  return dummy.next;
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

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

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

promptForLinkedList();

export default reverseBetween;