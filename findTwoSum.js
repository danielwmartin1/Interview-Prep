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

function isValidNumber(input) {
  if (isNaN(input) || !Number.isFinite(Number(input))) {
    throw new Error('Invalid target number. Please enter a valid number.');
  }
}

function isValidNumberArray(input) {
  if (!input.split(',').every(num => !isNaN(num.trim()) && Number.isFinite(Number(num.trim())))) {
    throw new Error('Invalid numbers. Please enter a list of valid numbers separated by commas.');
  }
}

function promptUser() {
  rl.question('Enter the target number: ', (target) => {
    try {
      isValidNumber(target);
    } catch (error) {
      console.log(error.message);
      return promptUser();
    }

    rl.question('Enter the numbers separated by commas: ', (nums) => {
      try {
        isValidNumberArray(nums);
      } catch (error) {
        console.log(error.message);
        return promptUser();
      }

      const numArray = nums.split(',').map(Number);
      const result = findTwoSum(Number(target), numArray);
      console.log(`Result: ${result}`);
      rl.close();
    });
  });
}

promptUser();

export default findTwoSum;