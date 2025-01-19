import readline from 'readline';

const rotateArray = function(nums, k) {
  if (!Array.isArray(nums)) {
    console.error('Invalid input: nums should be an array');
    return;
  }
  if (typeof k !== 'number' || isNaN(k)) {
    console.error('Invalid input: k should be a number');
    return;
  }

  const n = nums.length;
  k = k % n; // To handle cases where k > n

  console.log(`Original array: ${nums}`);
  console.log(`Rotating by ${k} steps`);

  // Reverse the entire array
  reverse(nums, 0, n - 1);
  console.log(`Array after reversing entirely: ${nums}`);
  
  // Reverse the first k elements
  reverse(nums, 0, k - 1);
  console.log(`Array after reversing first ${k} elements: ${nums}`);
  
  // Reverse the rest of the array
  reverse(nums, k, n - 1);
  console.log(`Array after reversing the rest: ${nums}`);
};

function reverse(arr, start, end) {
  console.log(`Reversing from index ${start} to ${end}`);
  while (start < end) {
    console.log(`Swapping elements at index ${start} and ${end}`);
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function promptArrayInput() {
  rl.question('Enter the array elements separated by commas: ', (input) => {
    try {
      const nums = input.split(',').map(Number);
      if (nums.some(isNaN)) {
        throw new Error('Array elements should be numbers');
      }
      promptRotationInput(nums);
    } catch (error) {
      console.error(`Error: ${error.message}`);
      promptArrayInput();
    }
  });
}

function promptRotationInput(nums) {
  rl.question('Enter the number of rotations: ', (k) => {
    const rotations = parseInt(k);
    if (isNaN(rotations)) {
      console.error('Invalid input: number of rotations should be a number');
      promptRotationInput(nums);
      return;
    }
    rotateArray(nums, rotations);
    console.log(`Rotated array: ${nums}`);
    rl.close(); // End the loop by closing the readline interface
  });
}

promptArrayInput();

export default rotateArray;