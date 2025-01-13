import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function processString(str) {
  let result = [];
  for (let char of str) {
    if (char === '#') {
      if (result.length > 0) {
        result.pop();
      }
    } else {
      result.push(char);
    }
  }
  return result.join('');
}

function backSpaceCompare(s, t) {
  const finalS = processString(s);
  const finalT = processString(t);

  console.log(`Processed first string: ${finalS}`);
  console.log(`Processed second string: ${finalT}`);

  return finalS === finalT;
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

    const result = backSpaceCompare(s, t);
    console.log(`The strings are ${result ? 'equal' : 'not equal'} after processing backspaces.`);
    rl.close();
  });
});
