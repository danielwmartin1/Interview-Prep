import readline from 'readline';

var rotate = function(nums, k) {
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
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the array elements separated by commas: ', (input) => {
  const nums = input.split(',').map(Number);
  rl.question('Enter the number of rotations: ', (k) => {
    rotate(nums, parseInt(k));
    console.log(`Rotated array: ${nums}`);
    rl.close();
  });
});

export default rotate;