import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('close', () => {
  process.exit(0);
});

const hammingDistance = (x, y) => {
  console.log(`Calculating Hamming Distance between ${x} and ${y}`);
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
  console.log(`Hamming Distance: ${distance}`);
  return distance;
};

const getInput = () => {
  rl.question('Enter the first integer: ', (x) => {
    rl.question('Enter the second integer: ', (y) => {
      console.log(`Received inputs: ${x}, ${y}`);
      const num1 = parseInt(x, 10);
      const num2 = parseInt(y, 10);

      if (isNaN(num1) || isNaN(num2)) {
        console.error('Invalid input. Please enter valid integers.');
        getInput(); // Loop back to get input again
      } else {
        console.log(`Parsed integers: ${num1}, ${num2}`);
        console.log(`Hamming Distance between ${num1} and ${num2}: ${hammingDistance(num1, num2)}`);
        rl.close();
      }
    });
  });
}
getInput();
