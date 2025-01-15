import readline from 'readline';

const validSubPalindrome = (str, left, right) => {
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

const isAlmostPalindrome = (str) => {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      console.debug(`Mismatch found at positions ${left} and ${right}: ${str[left]} !== ${str[right]}`);
      return validSubPalindrome(str, left + 1, right) || validSubPalindrome(str, left, right - 1);
    }
    left++;
    right--;
  }
  return true;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a string to check if it is an almost palindrome: ', (answer) => {
  if (typeof answer !== 'string' || answer.trim() === '') {
    console.error('Invalid input. Please enter a non-empty string.');
    rl.close();
    return;
  }
  const result = isAlmostPalindrome(answer);
  console.log(`The string "${answer}" is ${result ? 'an almost palindrome' : 'not an almost palindrome'}.`);
  rl.close();
});