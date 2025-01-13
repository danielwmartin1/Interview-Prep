import readline from 'readline';

var preorderTraversal = function(root) {
  if (!root) return []; // Handle edge case for empty tree
  
  const result = [];
  const stack = [root];
  
  while (stack.length) {
      const node = stack.pop(); // Pop the top node
      console.log(`Processing node with value: ${node.val}`); // Debugging statement
      result.push(node.val);    // Process root
      
      // Push right child first, so left child is processed first
      if (node.right) {
          console.log(`Pushing right child with value: ${node.right.val}`); // Debugging statement
          stack.push(node.right);
      }
      if (node.left) {
          console.log(`Pushing left child with value: ${node.left.val}`); // Debugging statement
          stack.push(node.left);
      }
  }
  
  return result;
};

// Function to create a binary tree from an array
function createBinaryTree(arr) {
  if (!arr.length) return null;
  const root = { val: arr[0], left: null, right: null };
  const queue = [root];
  let i = 1;
  while (i < arr.length) {
      const node = queue.shift();
      if (arr[i] !== null) {
          node.left = { val: arr[i], left: null, right: null };
          queue.push(node.left);
      }
      i++;
      if (i < arr.length && arr[i] !== null) {
          node.right = { val: arr[i], left: null, right: null };
          queue.push(node.right);
      }
      i++;
  }
  return root;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the tree nodes as an array (e.g., [1,null,2,3]): ', (input) => {
  const arr = JSON.parse(input);
  const root = createBinaryTree(arr);
  const result = preorderTraversal(root);
  console.log('Preorder Traversal Result:', result);
  rl.close();
});

export default preorderTraversal;