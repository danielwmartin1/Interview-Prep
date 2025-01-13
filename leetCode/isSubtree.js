import readline from 'readline';

function isSubtree(root, subRoot) {
  console.log('Checking if subtree:', JSON.stringify(subRoot), 'is a subtree of:', JSON.stringify(root));
  if (!root) {
    console.log('Root is null, returning false');
    return false; // If the root tree is null, it cannot have a subtree
  }
  if (isSameTree(root, subRoot)) {
    console.log('Subtree matches at root:', JSON.stringify(root));
    return true; // Check if the current subtree matches subRoot
  }
  // Recursively check left and right subtrees
  const leftCheck = isSubtree(root.left, subRoot);
  const rightCheck = isSubtree(root.right, subRoot);
  console.log('Left subtree check result:', leftCheck, 'Right subtree check result:', rightCheck);
  return leftCheck || rightCheck;
}

function isSameTree(p, q) {
  console.log('Comparing trees:', JSON.stringify(p), 'and', JSON.stringify(q));
  if (!p && !q) {
    console.log('Both trees are null, returning true');
    return true; // Both trees are null, so they match
  }
  if (!p || !q) {
    console.log('One of the trees is null, returning false');
    return false; // One tree is null, or values differ
  }
  if (p.val !== q.val) {
    console.log('Tree values differ:', p.val, '!=', q.val);
    return false;
  }
  // Recursively check left and right children
  const leftSame = isSameTree(p.left, q.left);
  const rightSame = isSameTree(p.right, q.right);
  console.log('Left children comparison result:', leftSame, 'Right children comparison result:', rightSame);
  return leftSame && rightSame;
}

function parseTree(input) {
  try {
    const obj = JSON.parse(input);
    console.log('Parsed tree:', JSON.stringify(obj));
    return buildTree(obj);
  } catch (e) {
    console.error('Invalid JSON format:', e.message);
    return null;
  }
}

function buildTree(obj) {
  if (!obj) return null;
  const node = { val: obj.val, left: null, right: null };
  if (obj.left) node.left = buildTree(obj.left);
  if (obj.right) node.right = buildTree(obj.right);
  return node;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function promptForTree(promptText, callback) {
  rl.question(promptText, (input) => {
    const tree = parseTree(input);
    if (tree) {
      callback(tree);
    } else {
      console.log('Failed to parse tree, please try again.');
      promptForTree(promptText, callback); // Retry if parsing fails
    }
  });
}

promptForTree('Enter the root tree in JSON format: ', (root) => {
  promptForTree('Enter the subtree in JSON format: ', (subRoot) => {
    console.log('Root tree:', JSON.stringify(root));
    console.log('Subtree:', JSON.stringify(subRoot));
    console.log('Is subtree:', isSubtree(root, subRoot)); // Output the result
    rl.close();
  });
});

export default isSubtree;
