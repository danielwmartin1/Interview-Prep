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

// Using Map to store processed strings
function compareProcessedStrings(s, t) {
  const processedStrings = new Map();

  if (!processedStrings.has(s)) {
    processedStrings.set(s, processString(s));
  }
  if (!processedStrings.has(t)) {
    processedStrings.set(t, processString(t));
  }

  const processedS = processedStrings.get(s);
  const processedT = processedStrings.get(t);

  console.log(`Processed first string: ${processedS}`);
  console.log(`Processed second string: ${processedT}`);

  return processedS === processedT;
}

function isValidInput(input) {
  return typeof input === 'string' && input.length > 0;
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

    console.log(`First input: ${s}`);
    console.log(`Second input: ${t}`);

    const result = compareProcessedStrings(s, t);
    console.log(`The strings are ${result ? 'equal' : 'not equal'} after processing backspaces.`);
    rl.close();
  });
});

export default compareProcessedStrings;
