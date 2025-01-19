const isPalindrome = (x) => {
    if (x < 0) {
        return false;
    }
    const s = String(x).replace(/[^a-zA-Z0-9]/g, '').toLowerCase(); // Remove non-alphanumeric characters and convert to lowercase
    let left = 0;
    let right = s.length - 1; // Use the length of the processed string
    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};
