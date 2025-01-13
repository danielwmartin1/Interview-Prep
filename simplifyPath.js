import exp from 'constants';
import readline from 'readline';

function simplifyPath(path) {
  console.log(`Original path: ${path}`);
  
  // Split the path by '/'
  const components = path.split('/');
  const stack = [];

  // Process each component
  for (const component of components) {
    console.log(`Processing component: ${component}`);
    if (component === '..') { // Go up to the parent directory
      if (stack.length > 0) {
        console.log('Going up one directory');
        stack.pop();
      }
    } else if (component && component !== '.') { // Skip '.' and empty components
      console.log(`Adding component to stack: ${component}`);
      stack.push(component);
    }
  }

  // Join the stack into the canonical path
  const simplifiedPath = '/' + stack.join('/');
  console.log(`Simplified path: ${simplifiedPath}`);
  return simplifiedPath;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a path to simplify: ', (path) => {
  simplifyPath(path);
  rl.close();
});

export default simplifyPath;