import readline from 'readline';

var maxScore = function(s) {
  if (typeof s !== 'string' || !/^[01]+$/.test(s)) {
    throw new Error('Input must be a string containing only 0s and 1s');
  }

  let n = s.length;
  let leftZeros = 0;
  let rightOnes = 0;
  let maxScore = 0;

  // First, count the total number of ones in the string (this will be our initial rightOnes)
  for (let i = 0; i < n; i++) {
    if (s[i] === '1') {
      rightOnes++;
    }
  }

  console.group('Initial Counts');
  console.debug(`Initial count of '1's (rightOnes): ${rightOnes}`);
  console.groupEnd();

  // Iterate through the string and calculate the score at each possible split
  for (let i = 0; i < n - 1; i++) { // We don't consider the last split since both parts must be non-empty
    if (s[i] === '0') {
      leftZeros++; // Increment leftZeros if current character is '0'
    } else {
      rightOnes--; // Decrement rightOnes if current character is '1'
    }

    // Update the maximum score after this split
    maxScore = Math.max(maxScore, leftZeros + rightOnes);

    console.group(`Index: ${i}`);
    console.debug(`After processing character '${s[i]}' at index ${i}:`);
    console.debug(`Count of '0's in the left part (leftZeros): ${leftZeros}`);
    console.debug(`Count of '1's in the right part (rightOnes): ${rightOnes}`);
    console.debug(`Current max score: ${maxScore}`);
    console.groupEnd();
  }

  return maxScore;
};

// Get user input using readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function promptUser() {
  rl.question("Enter a binary string (containing only 0s and 1s): ", function(input) {
    try {
      if (typeof input !== 'string' || !/^[01]+$/.test(input)) {
        throw new Error('Input must be a string containing only 0s and 1s');
      }
      const result = maxScore(input);
      console.log(`Max score for the input "${input}" is: ${result}`);
      rl.close();
    } catch (error) {
      console.error(error.message);
      promptUser(); // Prompt the user again if the input is invalid
    }
  });
}

promptUser();

export default maxScore;