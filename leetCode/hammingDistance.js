const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
readline.on('close', () => {
  process.exit(0);
});

const hammingDistance = (x, y) => {
  if (typeof x !== 'number' || typeof y !== 'number') {
    console.error('Both inputs must be numbers.');
    return null;
  }
  // XOR operation gives bits set to 1 where bits differ between x and y
  let xor = x ^ y;
  let distance = 0;
  // Count the number of 1s in the XOR result (Hamming weight)
  while (xor !== 0) {
    distance += xor & 1; // Increment if the last bit is 1
    xor >>= 1;          // Right shift to process the next bit
  }
  return distance;
};

readline.question('Enter the first integer: ', (x) => {
  readline.question('Enter the second integer: ', (y) => {
    const num1 = parseInt(x, 10);
    const num2 = parseInt(y, 10);

    if (isNaN(num1) || isNaN(num2)) {
      console.error('Invalid input. Please enter valid integers.');
    } else {
      console.log(`Hamming Distance between ${num1} and ${num2}: ${hammingDistance(num1, num2)}`);
    }
    readline.close();
  });
});
