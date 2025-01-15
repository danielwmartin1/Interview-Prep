import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) return s.length;
  const seen = {};
  let left = 0;
  let longest = 0;
  for (let right = 0; right < s.length; right++) {
    const currentChar = s[right];
    const previouslySeenChar = seen[currentChar];
    console.log(`Current character: ${currentChar}, previously seen at index: ${previouslySeenChar}`);
    if (previouslySeenChar >= left) {
      left = previouslySeenChar + 1;
      console.log(`Character ${currentChar} seen before, updating left pointer to: ${left}`);
    }
    seen[currentChar] = right;
    longest = Math.max(longest, right - left + 1);
    console.log(`Updated seen characters: ${JSON.stringify(seen)}`);
    console.log(`Current longest substring length: ${longest}`);
  }
  return longest;
};

rl.question('Please enter a string: ', (input) => {
  if (typeof input !== 'string' || input.trim() === '') {
    console.log('Invalid input. Please enter a non-empty string.');
  } else {
    console.log(`The length of the longest substring without repeating characters is: ${lengthOfLongestSubstring(input)}`);
  }
  rl.close();
});

export default lengthOfLongestSubstring;