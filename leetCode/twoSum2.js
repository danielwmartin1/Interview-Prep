/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(numbers, target) {
  // Input validation
  if (!Array.isArray(numbers) || typeof target !== 'number') {
    console.error('Invalid input: numbers should be an array and target should be a number');
    return [];
  }
  
  let left = 0;
  let right = numbers.length - 1;
  
  while (left < right) {
    const sum = numbers[left] + numbers[right];
    console.debug(`left: ${left}, right: ${right}, sum: ${sum}`);
    
    if (sum === target) {
      console.debug(`Found solution: [${left + 1}, ${right + 1}]`);
      return [left + 1, right + 1]; // 1-based index
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
    
    // Early exit condition
    if (numbers[left] + numbers[left + 1] > target) {
      console.debug('Early exit condition met');
      break;
    }
  }
  
  console.debug('No solution found');
  return []; // If no solution is found
};