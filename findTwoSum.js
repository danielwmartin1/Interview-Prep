import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function findTwoSum(target, nums) {
  for (let p1 = 0; p1 < nums.length; p1++) {
    const numberToFind = target - nums[p1];
    console.log(`Checking: nums[${p1}] = ${nums[p1]}, numberToFind = ${numberToFind}`);
    for (let p2 = p1 + 1; p2 < nums.length; p2++) {
      console.log(`Comparing with: nums[${p2}] = ${nums[p2]}`);
      if (numberToFind === nums[p2]) {
        console.log(`Match found: nums[${p1}] + nums[${p2}] = ${target}`);
        return [p1, p2];
      }
    }
  }
  console.log('No match found');
  return null;
}

rl.question('Enter the target number: ', (target) => {
  rl.question('Enter the numbers separated by commas: ', (nums) => {
    const numArray = nums.split(',').map(Number);
    const result = findTwoSum(Number(target), numArray);
    console.log(`Result: ${result}`);
    rl.close();
  });
});

export default findTwoSum;