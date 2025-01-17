import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

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

function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
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

rl.question('Enter the elements of the linked list separated by spaces: ', (answer) => {
  const elements = answer.split(' ').map(Number);
  if (elements.some(isNaN)) {
    console.error('Invalid input: Please enter only numbers separated by spaces.');
    rl.close();
    return;
  }
  const head = createLinkedListFromArray(elements);
  if (!head) {
    rl.close();
    return;
  }
  console.log('Original Linked List:');
  printLinkedList(head);
  const reversedHead = reverseLinkedList(head);
  console.log('Reversed Linked List:');
  printLinkedList(reversedHead);
  rl.close();
});
