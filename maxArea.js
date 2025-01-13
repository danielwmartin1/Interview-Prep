import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const maxArea = function (height) {
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    let width = right - left;
    let currentArea = Math.min(height[left], height[right]) * width;
    console.log(`left: ${left}, right: ${right}, width: ${width}, currentArea: ${currentArea}`);
    maxArea = Math.max(maxArea, currentArea);
    console.log(`Updated maxArea: ${maxArea}`);
    if (height[left] <= height[right]) {
      left++;
      console.log(`Incremented left to: ${left}`);
    } else {
      right--;
      console.log(`Decremented right to: ${right}`);
    }
  }
  return maxArea;
};

rl.question('Enter heights separated by commas: ', (answer) => {
  const height = answer.split(',').map(Number);
  console.log('Input heights:', height);
  console.log('Maximum area:', maxArea(height));
  rl.close();
});

export default maxArea;