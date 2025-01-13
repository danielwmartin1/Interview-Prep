import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function processString(str) {
  let result = '';
  let backCount = 0;

  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === '#') {
      backCount++;
    } else if (backCount > 0) {
      backCount--;
    } else {
      result = str[i] + result;
    }
  }

  return result;
}

function backSpaceCompareTwoPointers(s, t) {
  const processedS = processString(s);
  const processedT = processString(t);

  console.log(`Processed first string: ${processedS}`);
  console.log(`Processed second string: ${processedT}`);

  return processedS === processedT;
}

function isValidInput(input) {
  return typeof input === 'string';
}

rl.question('Enter first string: ', (s) => {
  if (!isValidInput(s)) {
    console.error('Invalid input. Please enter a valid string.');
    rl.close();
    return;
  }

  rl.question('Enter second string: ', (t) => {
    if (!isValidInput(t)) {
      console.error('Invalid input. Please enter a valid string.');
      rl.close();
      return;
    }

    const result = backSpaceCompareTwoPointers(s, t);
    console.log(`The strings are ${result ? 'equal' : 'not equal'} after processing backspaces.`);
    rl.close();
  });
});

export default backSpaceCompareTwoPointers;
